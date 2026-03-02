# 🚀 React Router Auth & Global State Management

A modern, responsive React application demonstrating secure authentication flows using **React Router v6** and global state management via the **Context API**.

![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Future Enhancements](#-future-enhancements)

## ✨ Features
- **Dynamic Routing:** Seamless page transitions using `react-router-dom`.
- **Global Auth State:** User authentication data is shared across the entire app using React Context.
- **Secure Redirection:** Automatic navigation to welcome pages upon successful login.
- **Responsive UI:** Fully mobile-responsive login interface styled with Tailwind CSS.
- **Error Handling:** Robust debugging patterns for common React Context and Hook errors.

## 🛠 Tech Stack
- **Frontend:** React.js (Hooks, Context API)
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Environment:** Vite / Create React App

## 🏗 Architecture
The project follows a modular architecture to separate logic from UI:
- **`Context/`**: Contains the `userContext` which acts as a "Central Store" for user data.
- **`Components/`**: Pure UI components and functional logic (Login, Welcome).
- **Hooks**: Implementation of `useContext` and `useNavigate` for efficient flow control.

## 🚀 Installation

1. **Clone the repository:**
   bash
   git clone [https://github.com/zayanwaris7-hash/ReactRouter.git](https://github.com/zayanwaris7-hash/ReactRouter.git)
Navigate to the project directory:

Bash
cd ReactRouter
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev

## 📂 Project Structure
Plaintext
src/
├── Context/
│   └── userContext.js    # Global state configuration
├── components/
│   ├── Login.jsx         # User Authentication UI
│   └── Wellcome.jsx      # Post-auth dashboard
├── App.jsx               # Route definitions & Provider wrapping
└── main.jsx              # Entry point
🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

Developed with ❤️ by zayanwaris7-hash


---

### 💡 Why this README helps you:
1.  **Badges:** It uses visual badges to immediately show recruiters you know modern tools like Tailwind and React Router.
2.  **Architecture Section:** It explains *how* your app works (Context API), which shows you understand the underlying concepts.
3.  **Visual Structure:** The file tree helps other developers navigate your code quickly.

### Final Technical Tip:
Ensure that in your App.jsx, you have wrapped the <Routes> with your <UserContextProvider>. This is the final step to ensuring that the setuser error you encountered never returns!

[React Router v6 Authentication Tutorial](https://www.youtube.com/watch?v=ip4Oybl7Rnc) 

This video provides a practical walkthrough of setting up authentication and private routes in React Router, which directly complements the login and navigation features you're implementing.


http://googleusercontent.com/youtube_content/0
