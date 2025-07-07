# Doctor Appointment Booking Application

## 📋 Overview
The Doctor Appointment Booking Application is a full-stack web platform that streamlines the process of scheduling medical appointments. Users can register as patients or doctors, search for doctors, book appointments, and manage their schedules. Admins can manage users and doctor applications.

---

## ✨ Features
- User authentication (JWT-based) for patients, doctors, and admins
- Search and filter doctors by department
- Book, reschedule, or cancel appointments
- Doctor dashboard to manage schedules and view appointments
- Patient dashboard to track upcoming and past appointments
- Admin dashboard to manage users and approve doctor applications
- Notification system for important events
- Responsive design for all devices

---

## 🛠️ Tech Stack
- **Frontend:** React, Redux, Ant Design, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Token)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### 1. Clone the Repository
```bash
git clone <repo-url>
cd Doctor-Appointment-Booking-main
```

### 2. Backend Setup
```bash
cd Doctor-Appointment-Booking-main
npm install
```

#### Create a `.env` file in the backend root with the following:
```
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

#### Start the Backend Server
```bash
npm start # or nodemon server.js
```

The backend will run on [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup
```bash
cd client
npm install
```

#### Start the Frontend
```bash
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000) and is configured to proxy API requests to the backend.

---

## 🧩 Project Structure

```
Doctor-Appointment-Booking-main/
  ├── client/                # React frontend
  ├── config/                # Backend config (db connection)
  ├── middlewares/           # Express middlewares (auth)
  ├── models/                # Mongoose models (User, Doctor)
  ├── routes/                # Express routes (user, doctor, etc.)
  ├── server.js              # Backend entry point
  └── ...
```

---

## 🔑 Environment Variables
- `MONGO_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `PORT`: (optional) Port for backend server (default: 5000)

---

## 📚 Usage
- Register as a patient or apply as a doctor
- Admin reviews and approves doctor applications
- Patients can search for doctors and book appointments
- Doctors manage their schedules and appointments
- All users receive notifications for important events

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License
This project is licensed under the MIT License.

