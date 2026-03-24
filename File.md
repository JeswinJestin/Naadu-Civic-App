# Naadu PRD - Product Requirements Document
**Version 1.0 | Kerala Civic Accountability Platform | March 2026**

## 1. Vision & Mission

**Vision**: Community-driven civic accountability where Kerala citizens report issues, verify with evidence, and track MLA performance through transparent satisfaction polls.

**Mission**: Close the loop between ground-level issues → community verification → MLA response → community-confirmed resolution → monthly satisfaction tracking.

**Core Principles**:
- Politically neutral (no party bias)
- Privacy-first (hashed phone auth, anonymous usernames)
- Evidence-based (photos + community corroboration)
- Community-driven (no single moderator gatekeeps)

## 2. Target Users & Personas

### Persona 1: Civic Citizen (Primary)
- Age: 18-45, Kerala resident
- Goal: Report potholes, water issues, sanitation problems
- Pain: Issues ignored, no transparency on MLA work
- Success: Issue gets verified, MLA responds, community confirms fix

### Persona 2: Civic Volunteer (Power User)
- Goal: Corroborate issues, add evidence, keep platform credible
- Success: High-quality reports prioritized, bad actors moderated

### Persona 3: MLA/Staff (Secondary)
- Goal: See constituency issues, respond publicly, show work completed
- Success: Community confirms their resolutions, satisfaction improves

## 3. v1 Core Features (MVP Scope)

### Feature 1: Mobile OTP Authentication
- Phone number → OTP → hashed storage → auto-generate anonymous username
- User sets: Home Constituency + Current Residential Constituency
- **No login required** to browse issues

### Feature 2: Kerala Constituency Map
- India map → Kerala zoom → 140 constituencies as clickable polygons
- Each constituency shows: issue count, avg satisfaction score

### Feature 3: Issue Reporting (Multi-step)
Location (GPS + map picker + nearby issue check)

Category (Roads/Water/Sanitation/Health/Education/Hazards/Community/Other)

Title + Description (min 20 chars)

Photos (up to 3, 5MB each, EXIF stripped)

Review → Submit → Get reference # (ISS-KL-2026-000123)

text

### Feature 4: Issue Lifecycle & Community Verification
Status Flow: UNVERIFIED → VERIFIED → IN_PROGRESS → RESOLVED

text
- **UNVERIFIED**: Live immediately, marked clearly
- **VERIFIED**: Community adds evidence/upvotes → threshold met
- **IN_PROGRESS**: MLA claims work started OR community sees work
- **RESOLVED**: Community confirms fix with photos/comments

### Feature 5: Per-Issue Discussion Threads
- Reddit-style comments + photo attachments
- Upvote comments, flag violations
- Auto-flag hate speech → placeholder during review

### Feature 6: MLA Representative Accounts
Permissions:

Comment officially on constituency issues

Mark "Work Initiated" / "Resolved (pending community confirmation)"

text
- **Key**: MLA "Resolved" claim → community must confirm with evidence

### Feature 7: Monthly Satisfaction Polls
- 1st of each month → poll notification
- Per constituency, two slices:
  - Home Constituency voters
  - Current Residents (live there, vote elsewhere)
- 1-5 rating + required text explanation (20+ chars)
- One response per user per constituency per month

### Feature 8: Constituency Leaderboards
Display (not competition):

Top-rated by Home Constituency satisfaction

Top-rated by Current Resident satisfaction

text

## 4. Success Metrics (v1)

| Metric | Target | How Measured |
|--------|--------|-------------|
| Monthly Active Users | 5K+ | Firebase Analytics |
| Issues Reported/Month | 1K+ | Firestore count |
| Verified Issue % | 70%+ | Status tracking |
| Avg Time to Verified | <7 days | Timestamp diff |
| Avg Resolution Time | <30 days | Status timestamps |
| Monthly Poll Participation | 20%+ MAU | Response count |

## 5. Launch Scope
- **Kerala only** (140 constituencies)
- **Mobile-first** (React Native)
- **Beta**: 5 constituencies → full Kerala rollout