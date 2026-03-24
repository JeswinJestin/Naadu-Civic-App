# Naadu Civic Accountability Platform 🗳️

Naadu is a community-driven, privacy-first civic accountability platform built to digitize and track the resolution of local issues across electoral constituencies in Kerala. It aims to bridge the gap between citizens (civic volunteers) and their elected MLAs through transparent, immutable public ledgers of civic issues.

## 📱 Project Status (V1 MVP)

Currently, the project is in the **UI Shell Phase** for the Kerala-only MVP. 
The complete Frontend navigation, UI styling, and interactions have been built using **React Native (Expo)** and **NativeWind (Tailwind CSS)**.

### Features
- ✅ **Authentication**: Zero-Trust Mobile OTP verification flow (UI ready).
- ✅ **Sovereign Identity Setup**: Users securely link their anonymous identity to their voting district and constituency.
- ✅ **Constituency Discovery Map**: Kerala drill-down view showing active issue hotspots and MLA satisfaction scores.
- ✅ **5-Step Issue Reporting**: Location -> Category -> Details -> Evidence (Photos) -> Review -> Submit.
- ✅ **Community Feed (Explore)**: Reddit-style scrolling feed of verified civic issues.

## 🛠️ Technology Stack
- **Framework**: React Native with [Expo Router](https://docs.expo.dev/router/introduction/)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
- **Backend Infrastructure (Planned)**: Firebase (Firestore, Cloud Functions, Authentication)
- **Mapping (Planned)**: Mapbox GL JS / RN Maps
- **Security Strategy**: Hashed PII (SHA-256), geo-coordinate truncation (3 decimal points), and strict Firestore read-only Security Rules.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JeswinJestin/Naadu-Civic-App.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start        # For Expo Go / Mobile Emulators
   npm run web      # To build & run on a local web server
   ```

## 🔐 Privacy & Moderation
The platform strictly runs on a Zero-Trust architecture, adhering to the DPDP Act. Absolute phone numbers are never stored (only salted hashes). Issues undergo a 500m radius multi-factor anti-spam check and a dual-layer moderation (Auto-flagging dictionary + Community consensus) before becoming visibly verified.
