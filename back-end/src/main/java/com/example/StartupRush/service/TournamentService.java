package com.example.StartupRush.service;

import com.example.StartupRush.dto.EventsDTO;
import com.example.StartupRush.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static com.example.StartupRush.model.EventType.*;

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

    public Startup battleWinner(Round round,int battleId,EventsDTO events){
        Battle battle = round.getBattle(battleId);
        if(battle.getWinner() != null){
            return null;
        }
        Event eventsStartup1 = new Event(battle.getStartup1(),events.getEventsStartup1());
        Event eventsStartup2 = new Event(battle.getStartup2(),events.getEventsStartup2());
        Event[] e = {eventsStartup1, eventsStartup2};
        battle.setEvents(e);
        updatePoints(battle.getStartup1(),events.getEventsStartup1());
        updatePoints(battle.getStartup2(),events.getEventsStartup2());

        if(battle.getStartup1().getPoints() > battle.getStartup2().getPoints()){
            battle.setWinner(battle.getStartup1());
            return battle.getStartup1();
        }else{
            battle.setWinner(battle.getStartup2());
            return battle.getStartup2();
        }
    }

    private void updatePoints(Startup startup, Map<EventType,Boolean> events){
        int points = 0;
        if(events.get(PITCH_CONVINCENTE)){
            points += 6;
        }
        if(events.get(PRODUTO_BUGS)){
            points -= 4;
        }
        if(events.get(TRACAO_USUARIOS)){
            points += 3;
        }
        if(events.get(INVESTIDOR_IRRITADO)){
            points -= 6;
        }
        if(events.get(FAKE_NEWS)){
            points -= 8;
        }

        startup.setPoints(startup.getPoints() + points);
    }
}
