package com.ipl.player;

import jakarta.persistence.*;

@Entity
@Table(name = "ipl")
public class Player {

    @Id
    @Column(name = "player")
    private String player;

    @Column(name = "country")
    private String country;

    @Column(name = "team")
    private String team;

    @Column(name = "age")
    private Integer age;

    @Column(name = "captain")
    private Integer captain;

    @Column(name = "role")
    private String role;

    @Column(name = "sold")
    private String sold;


    // Constructors
    public Player() {}

    public Player(String player) {
        this.player = player;
    }

    public Player(String player, String country, String team, Integer age, Integer captain,
                  String role, String sold) {
        this.player = player;
        this.country = country;
        this.team = team;
        this.age = age;
        this.captain = captain;
        this.role = role;
        this.sold = sold;
    }

    // Getters & Setters

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getCaptain() {
        return captain;
    }

    public void setCaptain(Integer captain) {
        this.captain = captain;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSold() {
        return sold;
    }

    public void setSold(String sold) {
        this.sold = sold;
    }

    
    @Override
    public String toString() {
        return "Player{" +
                "player='" + player + '\'' +
                ", country='" + country + '\'' +
                ", team='" + team + '\'' +
                ", age=" + age +
                ", captain=" + captain +
                ", role=" + role +
                ", sold=" + sold +
                '}';
    }
}