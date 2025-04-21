package com.example.StartupRush.model;

public class Battle {
    private static int idCounter = 0;
    private Startup startup1,startup2;
    private Startup Winner = null;
    private int id;
    private Event[] events;

    public Startup getStartup1() {
        return startup1;
    }

    public void setStartup1(Startup startup1) {
        this.startup1 = startup1;
    }

    public Startup getStartup2() {
        return startup2;
    }

    public void setStartup2(Startup startup2) {
        this.startup2 = startup2;
    }

    public Startup getWinner() {
        return Winner;
    }

    public void setWinner(Startup winner) {
        Winner = winner;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Event[] getEvents() {
        return events;
    }

    public void setEvents(Event[] events) {
        this.events = events;
    }

    public Battle(Startup startup1, Startup startup2){
        this.startup1 = startup1;
        this.startup2 = startup2;
        this.id = idCounter++;
    }
}
