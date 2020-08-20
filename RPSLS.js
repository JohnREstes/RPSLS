"use strict";

class Player {

    constructor(name){
        this.name = name;
        this.choice = ['rock', 'paper', 'scissor', 'lizard', 'Spock'];
        this.turn = turn;
        this.win = win;
    } 
    displayInformation(){
     console.log("The Player is named " + this.name + ".");
    }
    playTurn(){
        this.turn = prompt("Would you like to choose:\n" + this.choice).toLocaleLowerCase;
    }
 }