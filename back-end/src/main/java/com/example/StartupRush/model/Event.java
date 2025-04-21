package com.example.StartupRush.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;


public class Event {
    private Startup startup;
    private Map<EventType,Boolean> events;

    public Event(Startup startup, Map<EventType, Boolean> events) {
        this.startup = startup;
        this.events = events;
    }

    public Startup getStartup() {
        return startup;
    }

    public void setStartup(Startup startup) {
        this.startup = startup;
    }

    public Map<EventType, Boolean> getEvents() {
        return events;
    }

    public void setEvents(Map<EventType, Boolean> events) {
        this.events = events;
    }



}
