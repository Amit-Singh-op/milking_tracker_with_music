# 🐄 Milking Tracker with Music 🎵

A simple web application to track milking sessions with a music player, timer, and history log.

## 🚀 Features

- **Landing Page**: Start a new milking session.
- **Milking Session**: Timer, music player, and session controls (Pause/Stop).
- **Session Logging**: Records start time, end time, duration, and milk collected.
- **History Page**: View past milking sessions.

## 🏗️ Tech Stack

### **Frontend**

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Hooks
- framer motion

### **Backend**

- Node.js (Express)
- TypeScript
- MongoDB (Mongoose)
- Morgan (Logging)
- Cors (Security)

````

## ⚡ Installation
```sh
git clone <repo-url>
cd your-project
npm install
````

## 🛠️ Run in Development

```sh
npm run dev  # Starts Next.js and Express server
```

## 🏭 Run in Production

```sh
npm run build   # Build frontend
npm start      # Start server
```

## 📡 API Endpoints

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| GET    | /api/sessions | Get all sessions    |
| POST   | /api/sessions | Start a new session |
