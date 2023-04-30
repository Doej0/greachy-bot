import React from "react";
import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      text: message,
      createdAt: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Send</button>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chatbot;