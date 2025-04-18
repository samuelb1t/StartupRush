package com.example.StartupRush.dto;

import com.example.StartupRush.model.Event;
import com.example.StartupRush.model.EventType;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;

@AllArgsConstructor
@Getter
public class EventsDTO {
    private Map<EventType, Boolean> eventsStartup1;
    private Map<EventType, Boolean> eventsStartup2;
}
