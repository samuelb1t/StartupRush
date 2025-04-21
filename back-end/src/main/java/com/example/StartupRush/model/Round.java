package com.example.StartupRush.model;

import lombok.Getter;

import java.util.ArrayList;


public class Round {
    private static int idCounter = 0;
    private final int id;
    private ArrayList<Battle> battles = new ArrayList<>();

    public Round() {
        this.id = idCounter++;
    }

    public static int getIdCounter() {
        return idCounter;
    }

    public static void setIdCounter(int idCounter) {
        Round.idCounter = idCounter;
    }

    public int getId() {
        return id;
    }

    public ArrayList<Battle> getBattles() {
        return battles;
    }

    public void setBattles(ArrayList<Battle> battles) {
        this.battles = battles;
    }

    public void add(Battle battle){
        battles.add(battle);
    }

    public Battle getBattle(int id){
        for (Battle battle : battles) {
            if(battle.getId() == id){
                return battle;
            }
        }
        return null;
    }
}
