/*computerPlay function that result.textContent =s 
r, p or s when called upon*/
let computerPoints = 0;
let playerPoints = 0;
let rounds = 0;

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

let playRound = (playerSelection, computerSelection) => {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    if(playerSelectionLowerCase == computerSelection){
        return "tie"
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
const btnR = document.querySelector('#btnR')
btnR.addEventListener('click', () => {
    game("rock")
});

const btnP = document.querySelector('#btnP')
btnP.addEventListener('click', () => {
    game("paper")
});

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', () => {
    game("scissors")
});
const results = document.querySelector('#result')
const round = document.querySelector('#round')
const points = document.querySelector('#points')

let game = (userInput) => {
    let result = playRound(userInput, computerPlay());
    if(result == "win" ){
        results.setAttribute('style', 'color: green')
        results.textContent = "You win"
        round.textContent = "Round: " + (rounds +=1)
        points.textContent = "Computer points: " + (computerPoints) + " Player points: " + (playerPoints += 1)
    }
    else if(result == "lose"){
        results.setAttribute('style', 'color: red')
        results.textContent = "You lose"
        round.textContent = "Round: " + (rounds +=1)
        points.textContent = "Computer points: " + (computerPoints += 1) + " Player points: " + (playerPoints)
    }
    else if(result == "tie"){
        results.setAttribute('style', 'color: black')
        results.textContent = "You tied"
        round.textContent = "Round: " + (rounds +=1) 
        points.textContent = "Computer points: " + (computerPoints) + " Player points: " + (playerPoints)
    }
    if(playerPoints == 5){
        results.setAttribute('style', 'color: green; font-size: 25px;')
        results.textContent = "You win the game!";
        rounds = 0;
        playerPoints = 0;
        computerPoints = 0;
    }
    else if(computerPoints == 5){
        results.setAttribute('style', 'color: red; font-size: 25px')
        results.textContent = "You lose the game!";
        rounds = 0;
        playerPoints = 0;
        computerPoints = 0;
}
}