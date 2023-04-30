import React, { useState } from "react";
import { useRouter } from "next/router";
import { ChatGPT } from "chatgpt";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = {
      message: message,
    };

    ChatGPT.post("https://api.chat-gpt.com/v1/generate", request)
      .then((response) => {
        setResponse(response.data.generated_text);
      })
      .catch((error) => {
        console.error(error);
      });

    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Send</button>
      <div>{response}</div>
    </div>
  );
};

export default Chatbot;