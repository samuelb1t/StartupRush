package com.example.StartupRush.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;

@AllArgsConstructor
@Getter
public class Event {
    private Startup startup;
    private Map<EventType,Boolean> events;
}
