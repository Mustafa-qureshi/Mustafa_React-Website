# CodeCraft — Professional Software Development Management

CodeCraft is a modern React web application designed for software development teams to manage their projects with a professional, clean aesthetic. It features local storage-based authentication and data persistence for standalone deployment without external dependencies.

---

## ✨ Key Functionalities

- **Local Authentication**: Secure login system using localStorage for session management with Email/Password authentication.
- **Dynamic Project CRUD**: Full Create, Read, Update, and Delete capabilities for software development projects (Title, Description, Technologies, Status, Client, Budget, Timeline).
- **Role-Based Dashboards**: Distinct interfaces and permissions for regular **Users** (personal projects) and **Admins** (global project oversight).
- **Modern UI Design System**: A professional visual language featuring clean layouts, subtle shadows, and technology-focused gradients.

---

## 🛠️ Technical Architecture & Core Logic

### 1. Smart Redirect Algorithm
To ensure a frictionless user experience, the application implements a context-aware navigation system.
- **Mechanism**: Captures the intended protected destination using React Router's `location` state during unauthorized access attempts.
- **Outcome**: Automatically restores the user's workflow by redirecting them to their original target immediately after successful authentication, preventing session "jump-scares" back to the homepage.

### 2. Role-Based Access Control (RBAC)
A robust security layer implemented via custom React components (`ProtectedRoute`, `AdminRoute`).
- **Logic**: Intercepts routing requests and validates the user's authentication state and localStorage-stored roles before rendering sensitive components.
- **Algorithm**: Uses a hierarchical check: `User Session` > `Loading State` > `Role Claim`.

### 3. Local Storage Data Persistence
Utilizes browser localStorage for data persistence and synchronization.
- **Implementation**: Custom utility functions (`utils/localStorage.js`) handle CRUD operations with JSON serialization.
- **Features**: Automatic ID generation, timestamp tracking, user-specific data isolation, and error handling for storage operations.

### 4. Global Design Tokens
The modern aesthetic is maintained through a centralized CSS variable system (`index.css`), allowing for rapid global changes to spacing and shadow depths.

---

## 🚀 Quick Start

1. **Clone & Install**:
   ```bash
   git clone [repository-url]
   npm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

The project is optimized for deployment on any static hosting platform including **Vercel**, **Netlify**, **GitHub Pages**, or traditional web servers.
- Build the project: `npm run build`
- Deploy the `dist` folder to your hosting provider
- No external dependencies or configuration required - the app runs completely standalone using browser localStorage.

---
© 2025 CodeCraft. Code Boldly.
