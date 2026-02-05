
---

# 🚀 NaukriSetu Application

<p align="center">
  <img src="https://img.shields.io/badge/FullStack-Application-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Backend-SpringBoot-green?style=for-the-badge&logo=springboot" />
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Database-MySQL-orange?style=for-the-badge&logo=mysql" />
  <img src="https://img.shields.io/badge/Auth-JWT-red?style=for-the-badge&logo=jsonwebtokens" />
</p>

<p align="center">
  A modern full-stack web application built with <b>React + Spring Boot</b> featuring secure JWT authentication, scalable REST APIs, and clean architecture design.
</p>

---

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://naukri-setu-application.vercel.app)

---

## 📖 Overview

NaukriSetu is a full-stack platform designed using modern web development practices. The application demonstrates secure authentication, structured backend architecture, and responsive frontend design.

This project focuses on:

* Clean architecture principles
* Secure authentication flow
* Scalable backend development
* Real-world full-stack implementation

---

## 🧰 Tech Stack

### 🔹 Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Bootstrap

### 🔹 Backend

* Java
* Spring Boot
* Spring Security
* REST APIs
* JWT Authentication

### 🔹 Database

* MySQL
* JPA / Hibernate

### 🔹 Tools

* Git
* GitHub
* Maven
* Postman

---

## ✨ Key Features

🚀 JWT-based authentication system
🔐 Secure login and API access
⚡ RESTful API architecture
📱 Responsive frontend UI
🧱 Layered backend structure
💾 Relational database design

---

## 🔐 Authentication (Demo Credentials)

```
username: rahul
password: rahul@2021

username: praneetha
password: praneetha@2021
```

---

## 📡 Authentication API

### Description

Returns a response based on the credentials provided.

---

### ✅ Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

---

### ❌ Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

---

## 🏗️ Architecture

```
Client (React)
      ↓
REST Controllers (Spring Boot)
      ↓
Service Layer (Business Logic)
      ↓
Repository Layer (JPA/Hibernate)
      ↓
MySQL Database
```

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ayush1164/NaukriSetu-Application.git
cd NaukriSetu-Application
```

---

### 2️⃣ Backend

* Configure MySQL
* Update application.properties

```bash
mvn spring-boot:run
```

---

### 3️⃣ Frontend

```bash
npm install
npm start
```

---

## 🧪 API Testing

1. Login using demo credentials.
2. Copy JWT token from response.
3. Add header:

```
Authorization: Bearer <jwt_token>
```

---

## 📈 Roadmap / Future Improvements

* Role-based authorization
* Admin dashboard
* Cloud deployment
* Advanced filtering

---

## 👨‍💻 Author

**Ayush**
Full Stack Developer (React + Spring Boot)

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---
