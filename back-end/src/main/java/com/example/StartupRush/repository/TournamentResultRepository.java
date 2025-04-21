package com.example.StartupRush.repository;


import com.example.StartupRush.model.Tournament;
import com.example.StartupRush.model.TournamentResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TournamentResultRepository extends JpaRepository<TournamentResult, Long> {
    List<TournamentResult> findByTournamentId(Long tournamentId);
}