import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function ShareModal({ documentId, onClose }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("viewer");
  const [message, setMessage] = useState("");

  const handleShare = async () => {
    try {
      const res = await axios.post(`http://localhost:3001/documents/${documentId}/share`, {
        email,
        role,
      });
      setMessage(res.data.message);
      setEmail("");
      setRole("viewer");
    } catch (err) {
  const msg =
    err.response?.data?.error ||
    err.message ||
    "Error sharing document";
  setMessage(msg);
}

  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">📤 Share Document</h2>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          className="w-full p-2 border rounded mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
        </select>

        <div className="flex justify-between">
          <button
            onClick={handleShare}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Share
          </button>
          <button
            onClick={onClose}
            className="text-gray-700 hover:underline ml-2"
          >
            Cancel
          </button>
        </div>

        {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}

ShareModal.propTypes = {
  documentId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
