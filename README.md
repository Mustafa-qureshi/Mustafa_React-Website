# StrideGear — Premium Sneaker Management

StrideGear is a mockup/sample high-performance React web application designed for sneaker enthusiasts to manage their collections with a premium, modern aesthetic. It integrates secure authentication, real-time inventory tracking, and role-based access control.

---

## ✨ Key Functionalities

- **Secure Authentication**: Multi-layered login system supporting standard Email/Password and one-tap Google OAuth.
- **Dynamic Inventory CRUD**: Full Create, Read, Update, and Delete capabilities for sneaker records (Brand, Model, Category, Price, Size).
- **Role-Based Dashboards**: Distinct interfaces and permissions for regular **Users** (personal collections) and **Admins** (global catalog management).
- **Soft UI Design System**: A bespoke visual language featuring super-rounded corners, layered soft shadows, and premium gradients.

---

## 🛠️ Technical Architecture & Core Logic

### 1. Smart Redirect Algorithm
To ensure a frictionless user experience, the application implements a context-aware navigation system.
- **Mechanism**: Captures the intended protected destination using React Router's `location` state during unauthorized access attempts.
- **Outcome**: Automatically restores the user's workflow by redirecting them to their original target immediately after successful authentication, preventing session "jump-scares" back to the homepage.

### 2. Role-Based Access Control (RBAC)
A robust security layer implemented via custom React components (`ProtectedRoute`, `AdminRoute`).
- **Logic**: Intercepts routing requests and validates the user's authentication state and custom claims (Firestore-stored roles) before rendering sensitive components.
- **Algorithm**: Uses a hierarchical check: `User Session` > `Loading State` > `Role Claim`.

### 3. Real-time Synchronization & Fallback
Leverages Firebase Firestore for low-latency data updates.
- **Implementation**: Utilizes `onSnapshot` for real-time UI reflect.
- **Resilience Algorithm**: Includes a fallback query logic that detects missing composite indexes and automatically switches to client-side sorting to maintain functionality during database optimization.

### 4. Global Design Tokens
The "Soft" aesthetic is maintained through a centralized CSS variable system (`index.css`), allowing for rapid global changes to corner radii and shadow depths.

---

## 🚀 Quick Start

1. **Clone & Install**:
   ```bash
   git clone [repository-url]
   npm install
   ```

2. **Environment Setup**:
   Configure `src/firebase/config.js` with your Firebase project credentials.

3. **Development**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

The project is optimized for **Firebase Hosting**. 
- Deploy using: `firebase deploy --only hosting`
- Ensure authorized domains are configured in the Firebase Console for proper OAuth functionality.

---
© 2025 StrideGear. Step Boldly.
