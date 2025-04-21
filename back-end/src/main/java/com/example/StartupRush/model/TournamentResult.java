package com.example.StartupRush.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tournament_result")
public class TournamentResult {
    @Id
    @GeneratedValue
    private Long id;

    private String startupName;

    public void setTournamentId(long tournamentId) {
        this.tournamentId = tournamentId;
    }

    private long tournamentId;
    private int points;
    private int pitchs;
    private int bugs;
    private int tracoes;
    private int investidoresIrritados;
    private int fakeNews;

    public void setId(Long id) {
        this.id = id;
    }

    public void setStartupName(String startupName) {
        this.startupName = startupName;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public void setPitchs(int pitchs) {
        this.pitchs = pitchs;
    }

    public void setBugs(int bugs) {
        this.bugs = bugs;
    }

    public void setTracoes(int tracoes) {
        this.tracoes = tracoes;
    }

    public void setInvestidoresIrritados(int investidoresIrritados) {
        this.investidoresIrritados = investidoresIrritados;
    }

    public void setFakeNews(int fakeNews) {
        this.fakeNews = fakeNews;
    }
}
