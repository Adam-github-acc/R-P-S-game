/*computerPlay function that returns 
r, p or s when called upon*/
let computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 1){
        return 'rock'
    }
    else if(randomNumber == 2){
        return 'paper'
    }
    else return 'scissors'
}

let outcome = (playerSelection, computerSelection) => {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    console.log(computerSelection)
    if(playerSelectionLowerCase == computerSelection){
        return "That's a tie play again"
    }
    else if(playerSelectionLowerCase == 'rock'){
        if(computerSelection == 'paper'){
            return "lose"
        }
        else if(computerSelection == 'scissors'){
            return "win"
        }
    }
    else if(playerSelectionLowerCase == 'paper'){
        if(computerSelection == 'scissors'){
            return "lose"
        }
        else if(computerSelection == 'rock'){
            return "win"
        }
    }
    else if(playerSelectionLowerCase == 'scissors'){
        if(computerSelection == 'paper'){
            return "win"
        }
        else if(computerSelection == 'rock'){
            return "lose"
        }
    }
    
}

let game = () => {
    let computerPoints = 0;
    let playerPoints = 0;
    for(let i = 0; i < 5; i++){
    let userInput = prompt("Rock, paper, scissors")
    let result = outcome(userInput, computerPlay());
    if(result == "win" ){
        console.log("You win you have " + (playerPoints += 1) + " points")
    }
    else if(result == "lose"){
        console.log("You lose computer has " + (computerPoints += 1) + " points")
    }
    else console.log("You tied play again")
    }
    if(computerPoints < playerPoints){
        return "You win! You got " + playerPoints + " points and the computer got " + computerPoints + " points"
    }
    else if(computerPoints > playerPoints){
        return "You lose! The computer got " + computerPoints + " points and you got " + playerPoints + " points"
    }
    else return "It's a tie you got " + playerPoints + " points and the computer got" + computerPoints + " points"
}
