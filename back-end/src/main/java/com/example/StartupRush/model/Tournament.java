package com.example.StartupRush.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Entity
public class Tournament {
    @Id
    @GeneratedValue
    private long id;

    @Transient
    private ArrayList<Startup> startups = new ArrayList<>();

    @Transient
    private ArrayList<Round> rounds = new ArrayList<>();

    @Transient
    private Map<String,StartupStats> stats;

    @Transient
    private boolean finished = false;

    public ArrayList<Startup> getStartups() {
        return startups;
    }

    public long getId() {
        return id;
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
