# 🚀 NaukriSetu Application

A full-stack web application built using **React + Spring Boot** that provides secure authentication, scalable backend APIs, and structured service/job management. The project follows clean architecture principles and modern full-stack development practices.

---

## 📌 Tech Stack

### 🔹 Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- Bootstrap

### 🔹 Backend

- Java
- Spring Boot
- Spring Security
- RESTful APIs
- JWT Authentication

### 🔹 Database

- MySQL
- JPA / Hibernate

### 🔹 Tools

- Git & GitHub
- Maven
- Postman

---

## ✨ Features

✅ Secure JWT-based authentication
✅ REST API architecture
✅ Clean layered backend design (Controller → Service → Repository)
✅ Responsive UI design
✅ Database relational mapping
✅ Production-ready backend structure

---

## 🔐 User Authentication (Demo Credentials)

```
username: rahul
password: rahul@2021

username: praneetha
password: praneetha@2021
```

---

## 📥 Authentication API

### Description

Returns a response based on the credentials provided.

---

### ✅ Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

---

### ❌ Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ayush1164/NaukriSetu-Application.git
cd NaukriSetu-Application
```

---

### 2️⃣ Backend Setup

- Configure MySQL database
- Update `application.properties`

```bash
mvn spring-boot:run
```

---

### 3️⃣ Frontend Setup

```bash
npm install
npm start
```

---

## 📡 API Testing

1. Authenticate using demo credentials.
2. Copy JWT token from response.
3. Add token to Authorization header:

```
Authorization: Bearer <jwt_token>
```

---

## 🧱 Architecture Overview

- Controller Layer → API endpoints
- Service Layer → Business logic
- Repository Layer → Database operations
- Security Config → JWT authentication flow

---

## 📈 Future Enhancements

- Role-based authorization
- Admin dashboard
- Advanced filtering & search
- Cloud deployment

---

## 👨‍💻 Author

**Aayush**
Full Stack Developer | React + Spring Boot
