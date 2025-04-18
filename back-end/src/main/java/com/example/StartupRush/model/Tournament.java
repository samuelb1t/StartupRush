package com.example.StartupRush.model;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter @Setter
public class Tournament {
    private ArrayList<Startup> startups = new ArrayList<>();
    private ArrayList<Round> rounds = new ArrayList<>();

    public void addRound(Round round){
        rounds.add(round);
    }


}
