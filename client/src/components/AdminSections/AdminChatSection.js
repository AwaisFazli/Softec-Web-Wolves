import React, { useState, useEffect } from 'react';

const AdminChatSection = () => {
  const [ws, setWs] = useState(null);
  const [recipient, setRecipient] = useState('user1'); 
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {

    const socket = new WebSocket('ws://your-server-address'); 
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const { messageData } = data;
      setChat((prevChat) => [...prevChat, `${messageData.sender}: ${messageData.chat}`]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws && message.trim() !== '') {
      const messageObject = {
        chat: message,
        recipient: recipient,
      };

      ws.send(JSON.stringify(messageObject));

      setChat((prevChat) => [...prevChat, `You: ${message}`]);

      setMessage('');
    }
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>

      <label htmlFor="recipient">Select a recipient:</label>
      <select id="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)}>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
      </select>

      <label htmlFor="message">Message:</label>
      <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" />
      <button onClick={sendMessage}>Send</button>

      <div>
        {chat.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default AdminChatSection;
