Flows.md
text
# Naadu User Flows
**v1 Screen-by-Screen Specifications**

## Flow 1: First-Time User (No Login)

Splash Screen → India Map → Kerala Map → Constituency Detail → Issue List
↓
[Login to Report] FAB

text

**Screens**:
1. **Splash**: Logo + "Explore civic issues across Kerala"
2. **India Map**: Kerala highlighted, "Tap to explore Kerala issues"
3. **Kerala Map**: 140 constituency polygons, search bar
4. **Constituency Detail**: Stats header → Issue list → Satisfaction preview
5. **Issue Detail**: Photos carousel → Status → Comments thread

## Flow 2: Report New Issue (Full Flow)

[+ FAB] → Location Picker → [Nearby Issues?] → Category → Details → Photos → Review → Submit
↓ if nearby exists
[Add to Existing] OR [New Issue]

text

**Step-by-Step**:
Location Picker

GPS button + Map picker

"Found 2 similar issues nearby" → list

Category Selection

8-category grid

Details Screen

Title field (required)

Description textarea (min 20 chars)

Photos Screen

Camera/gallery (3 max)

Progress indicators

Review Screen

Summary card

Edit any step

"Submit Issue" → ISS-KL-2026-000123

text

## Flow 3: MLA Workflow

MLA Login → Constituency Dashboard → Issue List → [Issue Detail]
↓
[Mark In Progress] → Community notified
[Mark Resolved] → Awaiting community confirmation

text

## Flow 4: Monthly Poll

Notification → Poll Modal

text
undefined
For [Home Constituency]:
★☆☆☆☆ (1-5 stars)
What’s working well / What needs improvement? [required textarea]
[Submit]

text

## Flow 5: Content Moderation

User posts comment → Auto-flag check → [Approved] OR [Flagged for review]
↓
Show: "This comment under review"

text

## Screen Inventory (17 Total)

**Public Screens** (no login):
1. Splash
2. India Map  
3. Kerala Map
4. Constituency Detail
5. Issue Detail (read-only)

**Authenticated Screens**:
6. OTP Login
7. Constituency Setup
8. Report Location
9. Report Category
10. Report Details
11. Report Photos
12. Report Review
13. Bottom Sheet (map interactions)
14. Add Evidence
15. Comment Composer
16. Monthly Poll
17. MLA Dashboard