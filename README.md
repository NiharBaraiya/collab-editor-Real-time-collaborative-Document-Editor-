
# 📝 Real-Time Collaborative Document Editor

A full-stack collaborative document editor that allows multiple users to edit the same document in real-time. Built with React, Node.js, Express, MongoDB, and Socket.IO.

---

## 🚀 Features

- 🔄 Real-time collaborative editing (multiple users)
- 🕒 Auto-save every 60 seconds
- 🧾 Version history (via MongoDB)
- 🧑‍🤝‍🧑 User roles: viewer/editor
- 📤 Share documents via email
- 📌 Pin/unpin documents
- 🔒 Read-only document support
- 👥 Live user presence indicator
- 🔗 Shareable document links(Gmail)

---

## 🖥️ Tech Stack

**Frontend:**
- React.js
- Quill.js (rich-text editor)
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO

---

## 📁 Folder Structure

```
collab-editor/
├── backend/
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── server.js         # Server setup
├── public/               # Static files
├── client/               # React app
│   ├── components/       # React components
│   └── App.js
└── README.md
```

---

## ⚙️ Getting Started

### 📦 Backend Setup

```bash
cd backend
npm install
node server.js
```

Make sure MongoDB is running locally.

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit: `http://localhost:3000`

---

## 📤 Share API

**POST** `/documents/:id/share`

```json
{
  "email": "user@example.com",
  "role": "editor" // or "viewer"
}
```

---

## 🔧 Environment Variables

Add a `.env` file in the backend with:

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/your-db-name
```

---

## 🧪 Future Improvements

- Document export (PDF/DOCX)
- Commenting system
- Notifications
- CI/CD Integration
- chat between multiple user in document editor
---

## 👤 Author

Made by [Nihar Baraiya]  
GitHub: [github.com/Nihar Baraiya](https://github.com/NiharBaraiya)

---

## 📄 License

MIT License
---
