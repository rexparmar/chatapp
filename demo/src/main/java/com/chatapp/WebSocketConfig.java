package com.chatapp;

import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

public class WebSocketConfig implements WebSocketMessageBrokerConfigurer, WebSocketConfigInterface {

    @Override
    public void registerStompEndPoints(StompEndpointRegistry registry){
        registry.addEndpoint("/chat").withSockJS();
    }

    @Override
    public void configureMessageBroke(MessageBrokerRegistry registry){
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }
}
