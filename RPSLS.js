"use strict";

Game.mainMenu();

class Player {

    constructor(name){
        this.name = name;
        this.choice = ['rock', 'paper', 'scissor', 'lizard', 'Spock'];
        this.turn = '';
        this.win = [];
    } 
    displayInformation(){
     console.log("The Player is named " + this.name + ".");
    }
    playTurn(){
        this.turn = prompt("Would you like to choose:\n" + this.choice).toLowerCase;
    }
}

class Human extends Player{
    constructor(name){
        super(name, choice, turn, win)
    }
}
class Computer extends Player{
    constructor(name){
        super(name, choice, turn, win)
    }
    playTurn(){
        let choice = Math.floor(Math.random() * 5);
        this.turn = this.choice[choice];
    }
}

class Game {

    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
    }

    chooseNumberOfPlayers(){
        if(userInput == "one"){
            this.playerOne = new Human();
            this.playerTwo = new Computer();
        }
        else{
            this.playerOne = new Human();
            this.playerTwo = new Human();           
        }
        this.playerOne.playTurn();
        this.playerTwo.playTurn();
    }

    mainMenu(){
        let promptResponse = "";   
        do{
            promptResponse = prompt("Welcome to Rock, Paper, Scissor, Lizard, Spock!\n\nWould you like to play best of three or see the rules?\n\nType the option you want: 'play' 'rules' or 'quit'");
            switch(promptResponse){
                case 'play':
                    Game.howManyPlayers();
                    Game.gamePlay();
                    break;
                case 'rules':
                    Game.rules();
                    break;
                case 'quit':
                    break;
                default:
                    alert("That is an invald response");
            }
        }
        while(promptResponse !== 'quit')
    }
    rules(){
        alert("This is a twist on Rock Paper Scissors!\n\nIn this version, you can choose from:\n\nRock, Paper, Scissor, Lizard or Spock.");
        alert("These are the possible combinatins:\n\nRock crushes Scissors and Rock crushes Lizard\nPaper covers Rock and Paper disproves Spock\nScissors cuts Paper and Scissors decapitates Lizard\nLizard poisons Spock and Lizard eats Paper\nSpock smashes Scissors and Spock vaporizes Rock");
        alert("You will also be able to choose whether you would like to play against the computer or play against a friend.\n\nGood Luck!");
    } 
    howManyPlayers(){
        let promptResponse = "";   
        do{
            promptResponse = prompt("How Many Players?\n\nType the option you want: 'one' 'two' or 'quit'");
            switch(promptResponse){
                case 'one':
                case 'two':
                    Game.chooseNumberOfPlayers(promptResponse);
                    
                    break;
                case 'quit':
                    break;
                default:
                    alert("That is an invald response");
            }
        }
        while(promptResponse !== 'quit')    
    }
    gamePlay(){

        let choice = prompt("What would you like your move to be?\n\nRock, Paper, Scissor, Lizard or Spock?");

    }   
}