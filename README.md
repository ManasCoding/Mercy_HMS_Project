# 🏥 Mercy HMS (Hospital Management System)

Mercy HMS is a full-stack web application designed to manage hospital operations efficiently. It helps streamline patient records, appointments, doctor management, and administrative tasks in a centralized system.

---

## 🎯 Objective

The goal of Mercy HMS is to digitize hospital workflows and improve efficiency by providing a secure and user-friendly platform for managing healthcare operations.

---

## 🚀 Features

- 🔐 User Authentication (Admin, Doctor, Patient)
- 🧑‍⚕️ Doctor Management System
- 🧑‍🤝‍🧑 Patient Registration & Records
- 📅 Appointment Booking System
- 💊 Prescription Management
- 🧾 Billing & Payment System
- 📊 Dashboard with Analytics
- 📱 Responsive Design

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

**Other Tools:**
- JWT Authentication
- Cloudinary (optional for reports/images)

---

## 📂 Folder Structure

Mercy-HMS/
│
├── frontend/
│ ├── components/
│ ├── pages/
│ └── services/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── middleware/
│
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone Repository

---

### 2. Install Dependencies

**Frontend**

cd frontend
npm install


**Backend**

cd backend
npm install


---

### 3. Environment Variables

Create `.env` in backend:


PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key


---

### 4. Run Application

**Backend**

npm run dev


**Frontend**

npm run dev


---

## 🔄 API Endpoints (Sample)

- `POST /api/auth/register` → Register user  
- `POST /api/auth/login` → Login  
- `GET /api/doctors` → Get all doctors  
- `POST /api/appointments` → Book appointment  
- `GET /api/patients` → Get patient data  

---

## 📸 Screenshots

_Add your screenshots here (dashboard, appointment page, etc.)_

---

## 💡 Future Enhancements

- 🧠 AI-based diagnosis suggestions  
- 📲 SMS/Email notifications  
- 💳 Online payment integration  
- 📁 Medical report uploads  

---

⭐ If you like this project, give it a star!
