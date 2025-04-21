package com.example.StartupRush.model;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Tournament {
    private ArrayList<Startup> startups = new ArrayList<>();
    private ArrayList<Round> rounds = new ArrayList<>();
    private Map<String,StartupStats> stats;
    private boolean finished = false;

    public ArrayList<Startup> getStartups() {
        return startups;
    }

    public void setStartups(ArrayList<Startup> startups) {
        this.startups = startups;
    }

    public ArrayList<Round> getRounds() {
        return rounds;
    }

    public void setRounds(ArrayList<Round> rounds) {
        this.rounds = rounds;
    }

    public Map<String, StartupStats> getStats() {
        return stats;
    }

    public void setStats(Map<String, StartupStats> stats) {
        this.stats = stats;
    }

    public boolean isFinished() {
        return finished;
    }

    public void setFinished(boolean finished) {
        this.finished = finished;
    }

    public void addRound(Round round){
        rounds.add(round);
    }

}
