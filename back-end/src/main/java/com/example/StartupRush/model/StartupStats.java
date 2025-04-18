package com.example.StartupRush.model;

import lombok.Getter;

@Getter
public class StartupStats {
    private int pitchs = 0;
    private int bugs = 0;
    private int tracoes = 0;
    private int investidoresIrritados = 0;
    private int fakeNews = 0;

    public void increment(EventType type) {
        switch (type) {
            case PITCH_CONVINCENTE: pitchs++; break;
            case PRODUTO_BUGS: bugs++; break;
            case TRACAO_USUARIOS: tracoes++; break;
            case INVESTIDOR_IRRITADO: investidoresIrritados++; break;
            case FAKE_NEWS: fakeNews++; break;
        }
    }
}
