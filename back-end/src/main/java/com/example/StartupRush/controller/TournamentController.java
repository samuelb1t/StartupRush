package com.example.StartupRush.controller;

import com.example.StartupRush.dto.EventsDTO;
import com.example.StartupRush.model.Battle;
import com.example.StartupRush.model.Event;
import com.example.StartupRush.model.Round;
import com.example.StartupRush.model.Startup;
import com.example.StartupRush.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/tournament")
public class TournamentController {
    private final TournamentService tournamentService;

    @Autowired
    public TournamentController(TournamentService tournamentService) {
        this.tournamentService = tournamentService;
    }

    @GetMapping("/startups")
    public ArrayList<Startup> getStartups(){
        return tournamentService.getStartups();
    }

    @GetMapping("/rounds")
    public ArrayList<Round> getRounds(){
        return tournamentService.getRounds();
    }

    @GetMapping("/battles/{id}")
    public ArrayList<Battle> getBattles(@PathVariable int id){
        return tournamentService.getBattles(tournamentService.getRound(id));
    }

    @PostMapping
    public ResponseEntity<String> addStartup(@RequestBody Startup startup){
        if(tournamentService.addStartup(startup)){
            return ResponseEntity.ok("Startup criada com sucesso");
        }else{
            return ResponseEntity.badRequest().body("Erro ao adicionar startup");
        }
    }

    @PostMapping("/start")
    public ResponseEntity<String> startTournament(){
        if(tournamentService.startRound()){
            return ResponseEntity.ok("Torneio criado com sucesso");
        }else{
            return ResponseEntity.badRequest().body("Número de startups no torneio inválido");
        }
    }

    @PostMapping("/round/{roundId}/{battleId}/events")
    public ResponseEntity<String> addEvents(@PathVariable int roundId,@PathVariable int battleId,@RequestBody EventsDTO events){
        Startup winner = tournamentService.battleWinner(tournamentService.getRound(roundId),battleId,events);
        if(winner == null){
            return ResponseEntity.badRequest().body("A batalha já aconteceu");
        }
        if(tournamentService.isFinal()){
            return ResponseEntity.ok("A startup campeã do torneio foi: " + winner.getName());
        }
        return ResponseEntity.ok("A startup vencedora dessa batalha foi: " + winner.getName());
    }
}
