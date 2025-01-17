# To-Do App (Full-Stack)

This is a full-stack **To-Do App** built with:
- **Backend:** Node.js (Express) with PostgreSQL
- **Frontend:** React.js
- **Database:** PostgreSQL
- **Testing:** Jest (Backend & Frontend)
- **Containerization:** Docker with Docker Compose

## 📌 Features
- Users can **add tasks** with a title & description.
- Only the **5 most recent** tasks are shown.
- Users can **mark tasks as completed**, which hides them from the UI.
- Data is stored in a **PostgreSQL database**.

---

## 🏗️ Architecture
### **1️⃣ Backend (Node.js + Express + PostgreSQL)**
- The backend provides a **REST API** to manage tasks.
- Stores tasks in a **PostgreSQL database**.
- Handles **CRUD operations** (Create, Read, Update, Delete).
- Uses **Jest** for unit tests.

### **2️⃣ Frontend (React.js)**
- Users can **add, view, and complete tasks**.
- Communicates with the backend using **Axios**.
- Uses **Jest + React Testing Library** for UI tests.

### **3️⃣ Database (PostgreSQL)**
- Stores tasks in a `tasks` table with fields:
  - `id` (Primary Key)
  - `title` (Task title)
  - `description` (Task details)
  - `completed` (Boolean to mark task as done)
- The table is **automatically created** when the backend starts.

### **4️⃣ Docker (Containerization)**
- Uses **Docker Compose** to run:
  - `backend` (Node.js server)
  - `frontend` (React app)
  - `postgres` (Database)
- Simplifies deployment & local development.

---

## 🚀 How to Run the Project
### **🔹 Prerequisites**
Ensure you have installed:
- [Node.js](https://nodejs.org/) (v18+)
- [Docker & Docker Compose](https://www.docker.com/)

### **🔹 Clone the Repository**
```bash
git clone https://github.com/your-repo/todo-app.git
cd todo-app
```

### **🔹 Run with Docker**
```bash
docker-compose up --build
```
- The app will be available at: **`http://localhost:3000`**
- The backend runs at: **`http://localhost:3001`**

### **🔹 Run Manually (Without Docker)**
#### **1. Start PostgreSQL**
Make sure PostgreSQL is running locally, then create a database:
```bash
CREATE DATABASE todoapp;
```

#### **2. Setup Backend**
```bash
cd backend
npm install
npm start
```

#### **3. Setup Frontend**
```bash
cd frontend
npm install
npm start
```

---

## ✅ Running Tests
### **Backend Tests (Jest)**
```bash
cd backend
npm test
```

### **Frontend Tests (Jest + React Testing Library)**
```bash
cd frontend
npm test
```

---

## 📂 Project Structure
```
📦 todo-app
 ┣ 📂 backend  # Node.js + Express + PostgreSQL
 ┃ ┣ 📜 server.js  # Main server file
 ┃ ┣ 📜 db.js  # Database connection
 ┃ ┣ 📜 routes.js  # API routes
 ┃ ┣ 📂 tests  # Jest test cases
 ┣ 📂 frontend  # React.js UI
 ┃ ┣ 📜 src/App.js  # Main React component
 ┃ ┣ 📜 src/api.js  # API calls
 ┃ ┣ 📂 src/__tests__  # Jest UI tests
 ┣ 📜 docker-compose.yml  # Docker setup
 ┣ 📜 README.md  # Documentation
```

---

## 📌 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/tasks` | Get all incomplete tasks (Max: 5) |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id/done` | Mark a task as completed |

---

## 🎯 Future Improvements
- Add **user authentication** (Login/Register)
- Store completed tasks instead of deleting them
- Implement **drag-and-drop** for task management

🚀 **Enjoy building your To-Do App!**

