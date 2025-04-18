package com.example.StartupRush.service;

import com.example.StartupRush.model.Battle;
import com.example.StartupRush.model.Round;
import com.example.StartupRush.model.Startup;
import com.example.StartupRush.model.Tournament;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TournamentService {
    private final Tournament tournament = new Tournament();

    public boolean addStartup(Startup startup){
        if(tournament.getStartups().size() >= 8){
            return false;
        }
        return tournament.getStartups().add(startup);
    }

    public ArrayList<Startup> getStartups(){
        return tournament.getStartups();
    }

    public ArrayList<Round> getRounds(){
        return tournament.getRounds();
    }

    public ArrayList<Battle> getBattles(Round round){
        return round.getBattles();
    }

    public Round getRound(int id) {
        for (Round round : tournament.getRounds()) {
            if (round.getId() == id) {
                return round;
            }
        }
        return null;
    }

    //funcao pra iniciar o torneio
    //  - verifica se o numero de startups eh valida
    //  - se sim chama a funcao que faz o chaveamneto de forma aleatoria
    //  - se nao da erro e pede pra cadastrar mais startups

    public boolean startRound(){
        if(!List.of(4, 6, 8).contains(tournament.getStartups().size())){
            return false;
        }
        Round round = new Round();
        createMatches(round);
        return true;
    }

    private void createMatches(Round round){
        ArrayList<Startup> startups = (ArrayList<Startup>) tournament.getStartups().clone();
        Startup startup1,startup2;
        while (startups.size() > 0){
            int randomInt = (int)(Math. random() * startups.size());
            startup1 = startups.remove(randomInt);
            randomInt = (int)(Math. random() * startups.size());
            startup2 = startups.remove(randomInt);
            Battle battle = new Battle(startup1, startup2);
            round.add(battle);
        }
        tournament.addRound(round);
    }
}
