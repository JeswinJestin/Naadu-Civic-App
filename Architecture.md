text
# Naadu System Architecture
**v1 Technical Specification | Firebase-Based | Secure & Scalable**

## 1. Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | React Native + React.js | Cross-platform, Mapbox integration |
| Backend | Firebase (Auth/Firestore/Storage/Functions) | Serverless, secure auth, real-time |
| Maps | Mapbox GL JS | Constituency polygons, clustering |
| Auth | Firebase Phone Auth (OTP) | Privacy-preserving, India-standard |
| Storage | Firebase Storage | Secure photo hosting |

## 2. Data Models (Firestore)

### users/{hashed_phone}
```javascript
{
  anonymous_username: "CalmRiver92",
  home_constituency_id: "KL-001",
  current_residential_constituency_id: "KL-023",
  reputation_score: 85,
  strikes: 0,
  poll_responses: { "2026-03": { "KL-001": true } },
  created_at: timestamp
}
issues/{issue_id}
javascript
{
  reference_number: "ISS-KL-2026-000123",
  constituency_id: "KL-001",
  location: { lat: 10.123, lng: 76.456 }, // 3 decimal precision
  category: "roads",
  title: "Pothole on MG Road",
  description: "Deep pothole causing accidents",
  photos: ["gs://bucket/photo1.jpg"],
  status: "UNVERIFIED", // UNVERIFIED|VERIFIED|IN_PROGRESS|RESOLVED
  status_history: [
    { status: "UNVERIFIED", timestamp: "...", triggered_by: "user" }
  ],
  upvotes: 23,
  evidence_count: 4,
  created_at: timestamp,
  reported_by: "user_hash_abc123"
}
comments/{issue_id}/{comment_id}
javascript
{
  text: "I saw this yesterday, here's photo",
  photo_url: "gs://bucket/evidence2.jpg",
  user_hash: "user_hash_xyz789",
  upvotes: 5,
  flagged: false,
  created_at: timestamp
}
polls/{constituency_id}/{month_year}
javascript
{
  home_constituency_responses: {
    "user_hash_abc": { rating: 3, feedback: "Roads improved but water issues persist" }
  },
  current_resident_responses: { ... },
  avg_home_rating: 3.2,
  avg_current_resident_rating: 2.8,
  total_responses: 156
}
3. Security Rules (Critical)
All writes → Cloud Functions only
text
Security Rule: allow read, list; // View-only for public
// NO direct writes from client
Phone Auth → Hashing Pipeline
text
1. Firebase Phone Auth → get phone number
2. SHA-256 hash → store as user_id
3. Generate anonymous username
4. Never store/show raw phone number
Location Privacy
text
GPS stored → round to 3 decimal places (100m precision)
No historical tracking of user movements
4. API Endpoints (Cloud Functions)
text
POST /reportIssue
- Input: location, category, title, description, photos
- Logic: Check nearby issues → create new → return reference

POST /addEvidence/{issue_id}
- Input: photo, comment
- Logic: Add to issue evidence_count → check verification threshold

POST /submitPoll
- Input: constituency_id, rating, feedback
- Logic: Validate one-per-month → store → recalculate averages

POST /mlaMarkResolved/{issue_id}
- Input: official_comment
- Logic: Add MLA claim → notify community → await confirmation
5. Deployment Pipeline
text
1. Staging: 5 test constituencies
2. Security audit: All Cloud Functions
3. Beta users: 100 civic volunteers
4. Full Kerala launch