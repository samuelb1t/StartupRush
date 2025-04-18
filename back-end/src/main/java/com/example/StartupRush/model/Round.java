package com.example.StartupRush.model;

import lombok.Getter;

import java.util.ArrayList;

@Getter
public class Round {
    private static int idCounter = 0;
    private final int id;
    private ArrayList<Battle> battles = new ArrayList<>();

    public Round() {
        this.id = idCounter++;
    }

    public void add(Battle battle){
        battles.add(battle);
    }
}
