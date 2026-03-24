SecurityAndModeration.md
text
# Naadu Security & Moderation
**Zero-Trust Architecture | Privacy-First | Anti-Abuse**

## 1. Authentication (Mandatory for Actions)

FLOW:

Phone number input

Firebase Phone Auth OTP

Backend Cloud Function:
a. SHA-256(phone) → user_id
b. Generate anonymous username
c. Create Firestore user doc

User selects Home + Current constituency

text

**Never stored or shown**:
- Raw phone numbers
- Real names  
- Profile photos
- Email addresses

## 2. Content Moderation Pipeline

### Auto-Flagging (Real-time)
Triggers:

Profanity lists (100+ terms)

Religious slurs (200+ terms)

Political party symbols/emojis

Excessive caps (>70%)

Repeated characters (e.g., "killll")

text
undefined
Flagged → Show placeholder:
"This comment is under review by moderators"
→ Human review within 24h

text

### Community Moderation
Per comment:

Upvote (agreement)

Downvote (disagreement)

Flag → triggers auto-flag + human review

text

### Strike System
Warning → 1 Strike (visible to user)
3 Strikes → 7-day posting ban
5 Strikes → Permanent ban
Appeals available for all actions

text

## 3. Anti-Spam Measures

### Issue Duplication
Radius check: 500m around GPS
Show: "3 similar issues found nearby"
→ Add evidence to existing OR explain difference

text

### Vote Manipulation
IP rate limiting (10 votes/hour)

Device fingerprinting

Behavioral analysis (rapid voting patterns)

text

### Sybil Resistance
One phone number = one account

CAPTCHA on rapid actions

Manual review of high-volume reporters

text

## 4. Data Privacy Compliance

✅ DPDP Act 2023 (India)
✅ Anonymized location (3 decimal GPS)
✅ No cross-site tracking
✅ Opt-out analytics
✅ Data deletion requests (30 days)

text

## 5. MLA Account Verification

Manual process (v1):

Phone + official email

Constituency proof (voter ID, official letterhead)

Admin approval (you + 2 trusted volunteers)

Public "Verified Representative" badge