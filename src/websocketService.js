import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const socketUrl = 'http://localhost:8080/chat';

export const stompClient = new Client({
  webSocketFactory: () => new SockJS(socketUrl),
  reconnectionDelay: 5000,
  onConnect: () => {
    console.log('Connected to WebSocket');
    stompClient.subscribe('/topic/messages', (message) => {
      console.log('Message received:', JSON.parse(message.body));
    });
  },
  onWebSocketError: (error) => {
    console.error('WebSocket Error:', error);
  },
});

export const sendMessage = (username, message) => {
  if (stompClient.connected) {
    stompClient.publish({
      destination: '/app/chat',
      body: JSON.stringify({ username, message }),
    });
  } else {
    console.log('WebSocket not connected');
  }
};
