package com.ipl.player;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping(path = "api/v1/player")
public class PlayerController {
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getAllPlayers(
        @RequestParam(required = false) String team,
        @RequestParam(required = false) String player,
        @RequestParam(required = false) String role,   // ✅ FIXED
        @RequestParam(required = false) String country) {

        if(team != null && role != null) {
            return playerService.getPlayersFromTeamAndPosition(team, role);
        }
        else if(team != null) {
            return playerService.getPlayersFromTeam(team);
        }
        else if(player != null) {
            return playerService.getPlayersByName(player);
        }
        else if(role != null) {
            return playerService.getPlayersByPosition(role);
        }
        else if(country != null) {
            return playerService.getPlayersByNation(country);
        }
        else {
            return playerService.getAllPlayers();
        }
    }

    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player) {
        Player newPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(newPlayer , HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player) {
        Player updatedPlayer = playerService.updatePlayer(player);
        if(updatedPlayer != null) {
            return new ResponseEntity<>(updatedPlayer , HttpStatus.OK);
        }else{
            return new ResponseEntity<>(updatedPlayer , HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{player}")
    public ResponseEntity<String> deletePlayer(@PathVariable String player) {
        playerService.deletePlayer(player);
        return new ResponseEntity<>("Player deleted successfully", HttpStatus.OK);
    }
}
