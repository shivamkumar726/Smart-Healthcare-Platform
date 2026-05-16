# 🏥 Smart Healthcare Platform (MEDIrxCARE)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

> **A sophisticated AI-integrated Healthcare Ecosystem featuring role-based dashboards (Admin, Doctor, Patient), real-time queue management, and AI-driven diagnostics. Built with a modern React + TypeScript stack for seamless hospital operations and improved patient care.**

---

## ✨ Key Highlights

- 🤖 **AI-Powered Diagnostics:** Integrated Symptom Checker and Prescription Insights using OpenAI.
- 🕒 **Live Queue Tracking:** Real-time hospital waiting time updates for patients.
- 🔐 **Secure RBAC:** Robust Role-Based Access Control for Patients, Doctors, and Admins.
- 📊 **Interactive Analytics:** Rich data visualization using Recharts for hospital stats and earnings.
- 💻 **Video Consultation:** Dedicated room for remote doctor-patient interaction.
- 📱 **Fully Responsive:** Modern UI built with Tailwind CSS & Framer Motion, optimized for all devices.

---

## 🎭 User Roles & Features

### 👤 Patient Portal
- **Dashboard:** Overview of upcoming appointments and recent health activity.
- **AI Symptom Checker:** Get instant guidance based on symptoms.
- **Appointment Booking:** Seamlessly schedule visits with preferred doctors.
- **Live Queue:** Track your position in the hospital queue in real-time.
- **Health Reports:** Secure access to medical history and prescriptions.

### 👨‍⚕️ Doctor Dashboard
- **Patient Management:** Access detailed patient history and health trends.
- **Queue Control:** Manage live patient flow and appointment status.
- **Digital Prescriptions:** AI-assisted prescription writing and insights.
- **Earnings Tracker:** Monitor daily/monthly revenue and consultation stats.
- **Telemedicine:** Conduct remote video consultations.

### ⚙️ Admin Control Center
- **Hospital Overview:** Real-time analytics of total patients, doctors, and appointments.
- **User Management:** Create and manage Doctor and Patient profiles.
- **Queue Monitoring:** Oversee hospital-wide patient flow.
- **System Settings:** Configure hospital-wide parameters and services.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (v18) with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Shadcn UI, Radix UI, Material UI (MUI)
- **Animation:** Framer Motion (Motion)
- **Charts:** Recharts
- **State Management:** Context API + Custom Hooks

### Backend
- **Server:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** JWT (JSON Web Tokens)
- **AI Integration:** OpenAI API

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- OpenAI API Key (Optional for AI features)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivamkumar726/Smart-Healthcare-Platform.git
   cd Smart-Healthcare-Platform
   ```

2. **Setup Environment Variables:**
   ```bash
   # In root directory
   cp frontend/.env.example frontend/.env
   cp backend/.env.example backend/.env
   ```

3. **Install Dependencies:**
   ```bash
   npm install --prefix frontend
   npm install --prefix backend
   ```

4. **Run the Application:**
   ```bash
   # Start Backend (Port 5000)
   npm run dev:backend

   # Start Frontend (Port 4173)
   npm run dev:frontend
   ```

---

## 🔑 Demo Accounts

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@medirxcare.in` | `Password123!` |
| **Doctor** | `aarav.mehta@medirxcare.in` | `Password123!` |
| **Patient** | `rohan.verma@example.com` | `Password123!` |

---

## 🐳 Docker Support

Run the entire stack with a single command:
```bash
docker compose up --build
```
- Frontend: `http://localhost:8080`
- Backend: `http://localhost:5000`

---

Developed with ❤️ for a Smarter Healthcare.
