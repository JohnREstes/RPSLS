"use strict";

class Player {

    constructor(name){
        this.name = name;
        this.choice = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
        this.turn = '';
        this.win = [];
    } 
    displayInformation(){
     console.log("The Player is named " + this.name + ".");
    }
    playTurn(){
        return this.turn = prompt("Would you like to choose:\n" + this.choice);
    }
}

class Human extends Player{
    constructor(name){
        super(name)
    }
}
class Computer extends Player{
    constructor(name){
        super(name)
    }
    playTurn(){
        let choice = Math.floor(Math.random() * 5);
        return this.turn = this.choice[choice];
    }
}

class Game {

    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
    }

    chooseNumberOfPlayers(userInput){
        if(userInput == "one"){
            this.playerOne = new Human();
            this.playerTwo = new Computer();
        }
        else{
            this.playerOne = new Human();
            this.playerTwo = new Human();           
        }
    }

    mainMenu(){
        let promptResponse = "";   
        do{
            promptResponse = prompt("Welcome to Rock, Paper, Scissor, Lizard, Spock!\n\nWould you like to play best of three or see the rules?\n\nType the option you want: 'play' 'rules' or 'quit'");
            switch(promptResponse){
                case 'play':
                    this.howManyPlayers();
                    break;
                case 'rules':
                    this.rules();
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
                    this.chooseNumberOfPlayers(promptResponse);
                    this.gamePlay();
                    return
                case 'quit':
                    break;
                default:
                    alert("That is an invald response");
            }
        }
        while(promptResponse !== 'quit')    
    }

    gamePlay(){
        do{
            let playerOneTurn = this.playerOne.playTurn();
            let playerTwoTurn = this.playerTwo.playTurn();
            this.whoWon(playerOneTurn, playerTwoTurn);
        }
        while(this.playerOne.win.length < 3)
        let theWinner = 0;
        for(let i = 0; i < 3; i++){    
            if(this.playerOne.win[i] == true){
                theWinner++; 
            }  
        }
        if(theWinner >= 2){
            alert("Player One Wins\n\nHURRAH");
        }
        else{
            alert("Player Two Wins\n\nHURRAH");
        }

    }  
    whoWon(playerOneTurn, playerTwoTurn){
        if(playerOneTurn === playerTwoTurn){
            alert(`Tie\n\nYou both chose ${playerTwoTurn}`);
        }
        else{
            for(let i = 0; i < whoWonArray.length; i++){
                if(playerOneTurn == whoWonArray[i][0] && playerTwoTurn == whoWonArray[i][2]){
                    alert(`Player One Wins:\n\n${whoWonArray[i][0]} ${whoWonArray[i][1]} ${whoWonArray[i][2]}`);
                    this.playerOne.win.push(true);
                    this.playerTwo.win.push(false);
                }
                else if(playerTwoTurn == whoWonArray[i][0] && playerOneTurn == whoWonArray[i][2]){
                    alert(`Player Two Wins:\n\n${whoWonArray[i][0]} ${whoWonArray[i][1]} ${whoWonArray[i][2]}`);
                    this.playerTwo.win.push(true);
                    this.playerOne.win.push(false);
                }
            }
        }
    } 
}

const whoWonArray = [
    ['rock', 'crushes', 'scissors'],
    ['rock', 'crushes', 'lizard'],
    ['paper', 'covers', 'rock'],
    ['paper', 'disproves', 'spock'],
    ['scissors', 'cuts', 'paper'],
    ['scissors', 'decapitates', 'lizard'],
    ['lizard', 'poisons', 'spock'],
    ['lizard', 'eats', 'paper'],
    ['spock', 'smashes', 'scissors'],
    ['spock', 'vaporizes', 'rock']
]

let gamePlay = new Game();
gamePlay.mainMenu();