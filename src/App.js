import React, { useState, useEffect } from 'react';
import { stompClient, sendMessage } from './websocketService';

const App = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false); // Track connection status

  useEffect(() => {
    stompClient.activate();
    stompClient.onConnect = () => {
      setIsConnected(true); // Update connection status when WebSocket is connected
      stompClient.subscribe('/topic/messages', (msg) => {
        console.log(JSON.parse(msg.body))
        setMessages((prev) => [...prev, JSON.parse(msg.body)]);
      });
    };
    return () => stompClient.deactivate();
  }, []);

  const handleSendMessage = () => {
    if (isConnected) {
      sendMessage(username, message);
      setMessage('');
    } else {
      console.log('WebSocket is not connected yet');
    }
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.username}: </strong> {msg.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
