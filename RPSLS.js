"use strict";

gamePlay();

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

function gamePlay(){
    let promptResponse = "";   
    do{
        promptResponse = prompt("Welcome to Rock, Paper, Scissor, Lizard, Spock!\n\nWould you like to play best of three or see the rules?\n\nType the option you want: 'play' 'rules' or 'quit'");
        switch(promptResponse){
            case 'play':
                
                
            case 'rules':
                rules();
            case 'quit':
                break;
            default:
                alert("That is an invald response");
        }
    }
    while(promptResponse == 'play' || promptResponse == 'rules')
}
function rules(){
    alert("This is a twist on Rock Paper Scissors!\n\nIn this version, you can choose from:\n\nRock, Paper, Scissor, Lizard or Spock.");
    alert("These are the possible combinatins:\n\nRock crushes Scissors and Rock crushes Lizard\nPaper covers Rock and Paper disproves Spock\nScissors cuts Paper and Scissors decapitates Lizard\nLizard poisons Spock and Lizard eats Paper\nSpock smashes Scissors and Spock vaporizes Rock");
    alert("You will also be able to choose whether you would like to play against the computer or play against a friend.\n\nGood Luck!");

}    