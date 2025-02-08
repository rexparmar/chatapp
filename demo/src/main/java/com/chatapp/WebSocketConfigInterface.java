package com.chatapp;

import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

public interface WebSocketConfigInterface {
    void registerStompEndPoints(StompEndpointRegistry registry);

    void configureMessageBroke(MessageBrokerRegistry registry);
}
