package com.example.StartupRush.model;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Battle {
    private static int idCounter = 0;
    private Startup startup1,startup2;
    private Startup Winner = null;
    private int id;
    private Event[] events;

    public Battle(Startup startup1,Startup startup2){
        this.startup1 = startup1;
        this.startup2 = startup2;
        this.id = idCounter++;
    }
}
