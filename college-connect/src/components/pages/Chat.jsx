import React, { useState, useEffect } from "react";
import { use } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5173");

const Chat = () => {
  const userName = JSON.parse(localStorage.getItem("user")).name;
  const recipient = useLocation().state?.recipient || "Recipient"; // Fallback to "Recipient" if not provided
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("register", userName);

    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [userName]);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        senderId: userName,
        recipientId: recipient,
        content: message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: userName, content: message },
      ]);
      setMessage("");
    }
  };

  return (
    <div>
      <div id="chat-window" style={{ height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender === userName ? "You" : "Recipient"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
