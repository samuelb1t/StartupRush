package com.example.StartupRush.controller;

import com.example.StartupRush.dto.EventsDTO;
import com.example.StartupRush.model.*;
import com.example.StartupRush.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tournament")
@CrossOrigin(origins = "http://localhost:5173")
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

    @GetMapping("/battles")
    public ArrayList<Battle> getBattles(){
        return tournamentService.getBattles(tournamentService.getRounds().getLast());
    }

    @GetMapping("/stats")
    public Map<String, StartupStats> getStats(){
        return tournamentService.getStats();
    }

    @GetMapping("/tournaments")
    public List<Tournament> getAllTournaments(){
        return tournamentService.getAllTournaments();
    }

    @GetMapping("/{id}")
    public List<TournamentResult> getTournamentStats(@PathVariable long id){
        return tournamentService.getTournamentStats(id);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/new")
    public ResponseEntity<HttpStatus> newTournament(){
        if(tournamentService.startNewTournament()){
            return new ResponseEntity<>(HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<HttpStatus> addStartup(@RequestBody Startup startup){
        if(tournamentService.addStartup(startup)){
            return ResponseEntity.ok(HttpStatus.CREATED);
        }else{
            return ResponseEntity.status(HttpStatus.CONFLICT).body(HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/start")
    public ResponseEntity<String> startTournament(){
        if(tournamentService.startRound()){
            return ResponseEntity.ok("Torneio criado com sucesso");
        }else{
            return ResponseEntity.badRequest().body("Número de startups no torneio inválido");
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/round/{battleId}/events")
    public ResponseEntity<String> addEvents(@PathVariable int battleId,@RequestBody EventsDTO events){
        Startup winner = tournamentService.battleWinner(battleId,events);
        if(winner == null){
            return ResponseEntity.badRequest().body("A batalha já aconteceu");
        }
        return ResponseEntity.ok(winner.getName());
    }
}
