package com.chatapp;

public class ChatMessage {
    private String username;
    private String message;

    public void setMessage(String message){
        this.message=message;
    }

    public String getMessage(){
        return message;
    }

    public void setUsername(String username){
        this.username=username;
    }

    public String getUsername(){
        return username;
    }
}
