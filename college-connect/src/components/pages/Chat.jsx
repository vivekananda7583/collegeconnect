import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5173");

const Chat = ({ userId, recipientId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("register", userId);

    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [userId]);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        senderId: userId,
        recipientId,
        content: message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: userId, content: message },
      ]);
      setMessage("");
    }
  };

  return (
    <div>
      <div id="chat-window" style={{ height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender === userId ? "You" : "Recipient"}:</strong>{" "}
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
