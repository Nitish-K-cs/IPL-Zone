package com.ipl.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayersFromTeamAndPosition(String teamName, String position) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getTeam().equalsIgnoreCase(teamName) && player.getRole().equalsIgnoreCase(position))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersFromTeam(String teamName) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getTeam().equalsIgnoreCase(teamName))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String searchText) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getPlayer() != null && player.getPlayer().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

   public List<Player> getPlayersByPosition(String position) {
    return playerRepository.findAll().stream()
        .filter(player -> 
            player.getRole() != null &&
            player.getRole().toLowerCase().contains(position.toLowerCase())
        )
        .collect(Collectors.toList());
    }

    public List<Player> getPlayersByNation(String nation) {
    return playerRepository.findAll().stream()
        .filter(player -> 
            player.getCountry() != null && 
            player.getCountry().equalsIgnoreCase(nation)
        )
        .collect(Collectors.toList());
    }

    public Player addPlayer(Player player) {
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Player updatedPlayer) {
        Optional<Player> existingPlayerOpt = playerRepository.findByPlayer(updatedPlayer.getPlayer());

        if(existingPlayerOpt.isPresent()) {
            Player existingPlayer = existingPlayerOpt.get();
            existingPlayer.setPlayer(updatedPlayer.getPlayer());
            existingPlayer.setCountry(updatedPlayer.getCountry());
            existingPlayer.setRole(updatedPlayer.getRole());
            existingPlayer.setTeam(updatedPlayer.getTeam());
            existingPlayer.setAge(updatedPlayer.getAge());
            existingPlayer.setCaptain(updatedPlayer.getCaptain());
            existingPlayer.setSold(updatedPlayer.getSold());

            playerRepository.save(existingPlayer);
            return existingPlayer;
        } else {
            throw new RuntimeException("Player not found: " + updatedPlayer.getPlayer());
        }
    }

    @Transactional
    public void deletePlayer(String playerName) {
         playerRepository.deleteByPlayer(playerName);
    }
}



