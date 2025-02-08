package com.chatapp;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
public class ChatController {
    private final SimpMessagingTemplate messagingTemplate;

    public ChatController(SimpMessagingTemplate messagingTemplate){
        this.messagingTemplate=messagingTemplate;
    }

    @MessageMapping("/sendMessage")
    public void sendMessage(ChatMessage chatMessage){
        messagingTemplate.convertAndSend("/topic/public",chatMessage);
    }
}
