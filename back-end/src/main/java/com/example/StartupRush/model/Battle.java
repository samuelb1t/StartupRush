package com.example.StartupRush.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Battle {
    private Startup startup1,startup2;
    private Startup Winner = null;

    public Battle(Startup startup1,Startup startup2){
        this.startup1 = startup1;
        this.startup2 = startup2;
    }
}
