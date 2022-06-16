console.log("hello world")
/*computerPlay function that returns 
r, p or s when called upon*/
let computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 1){
        return 'Rock'
    }
    else if(randomNumber == 2){
        return 'Paper'
    }
    else return 'Scissors'
}