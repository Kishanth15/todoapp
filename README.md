# Todo App

A simple and efficient **Todo Application** built to help users organize and manage daily tasks. This project provides a clean interface for adding, tracking, and managing todos while also serving as a practical full-stack project to improve frontend and backend development skills.

The application is built using **React + Vite** for the frontend and **Node.js** for the backend, making it a lightweight and modern web application for task management.

---

## Features

* Add new tasks
* View task list in a clean interface
* Manage daily todo items efficiently
* Component-based React structure
* Fast frontend setup using **Vite**
* Backend server support using **Node.js**
* Beginner-friendly project structure for learning full-stack basics

---

## Tech Stack

### Frontend

* **React.js**
* **Vite**
* **JavaScript**
* **CSS**

### Backend

* **Node.js**
* **Express.js** *(if used inside `server.js`)*

### Tools

* npm
* ESLint

---

## Project Structure

```bash id="0n6l7e"
todoapp/
│── public/
│── src/
│   ├── Components/
│   │   └── Todo.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
│── index.html
│── package.json
│── vite.config.js
│── eslint.config.js
│── server.js
└── README.md
```

---

## How It Works

The Todo App allows users to create and manage tasks in a simple and organized way.
The frontend is built using React components, while the backend server can be used to handle task-related data operations if connected to a database or API.

This project is useful for understanding:

* React component structure
* State management for task lists
* Frontend and backend project organization
* Building small productivity applications
* Full-stack application workflow basics

---

## Installation and Setup

### 1. Clone the repository

```bash id="6fqgfa"
git clone https://github.com/Kishanth15/todoapp.git
cd todoapp
```

### 2. Install dependencies

```bash id="t3sqng"
npm install
```

### 3. Run the frontend

```bash id="p4f8ow"
npm run dev
```

The app will start on the Vite development server, usually at:

```bash id="x2jxk2"
http://localhost:5173
```

---

## Backend Setup

If your backend logic is handled in `server.js`, run:

```bash id="h23k3z"
node server.js
```

or, if a script is defined in `package.json`:

```bash id="y3e5n1"
npm start
```

If your backend requires environment variables, create a `.env` file and add the required values.

Example:

```env id="0jlwmx"
PORT=5000
```

---

## Learning Outcomes

Through this project, I improved my understanding of:

* Building UI using **React**
* Creating projects with **Vite**
* Structuring reusable components
* Managing simple application logic for task tracking
* Organizing frontend and backend files in one project
* Building a practical productivity-based application

---

## Future Improvements

Possible future enhancements for the project:

* Mark tasks as completed
* Edit existing tasks
* Delete tasks
* Save tasks in a database
* Add authentication for personal task management
* Add due dates and priority levels
* Add filters such as **Completed / Pending / All**
* Improve UI with better styling and animations
* Deploy frontend and backend online

---

## Author

**Kishanth**
B.Tech Artificial Intelligence and Data Science
KIT - Kalaignarkarunanidhi Institute of Technology

* GitHub: [Kishanth15](https://github.com/Kishanth15)

---

## License

This project is created for **learning, practice, and portfolio purposes**.
