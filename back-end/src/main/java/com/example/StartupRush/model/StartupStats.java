package com.example.StartupRush.model;

public class StartupStats {
    private int pitchs = 0;
    private int bugs = 0;
    private int tracoes = 0;
    private int investidoresIrritados = 0;
    private int fakeNews = 0;
    private int points;

    public void increment(EventType type) {
        switch (type) {
            case PITCH_CONVINCENTE: pitchs++; break;
            case PRODUTO_BUGS: bugs++; break;
            case TRACAO_USUARIOS: tracoes++; break;
            case INVESTIDOR_IRRITADO: investidoresIrritados++; break;
            case FAKE_NEWS: fakeNews++; break;
        }
    }

    public int getPitchs() {
        return pitchs;
    }

    public int getBugs() {
        return bugs;
    }

    public int getTracoes() {
        return tracoes;
    }

    public int getInvestidoresIrritados() {
        return investidoresIrritados;
    }

    public int getFakeNews() {
        return fakeNews;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
