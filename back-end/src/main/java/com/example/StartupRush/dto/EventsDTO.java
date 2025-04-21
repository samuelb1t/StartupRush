package com.example.StartupRush.dto;

import com.example.StartupRush.model.Event;
import com.example.StartupRush.model.EventType;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;

@AllArgsConstructor
public class EventsDTO {
    private Map<EventType, Boolean> eventsStartup1;
    private Map<EventType, Boolean> eventsStartup2;

    public Map<EventType, Boolean> getEventsStartup1() {
        return eventsStartup1;
    }

    public Map<EventType, Boolean> getEventsStartup2() {
        return eventsStartup2;
    }
}
