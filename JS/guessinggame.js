//Guessing game
//User enters a max number & then tries to guess a random generated number between 1 to max.
const max = prompt("Enter a max number: ");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number: ");

while(true){
    if(guess == "quit"){
        console.log("You are quitting the game!");
        break;
    }
    if(guess == random){
        console.log("Congrats!!! You are right! random number was: ", random);
        break;
    }else if(guess < random){
        guess = prompt("HINT: Your guess was too small. Please try again: ");
    }
    else{
        guess = prompt("HINT: Your guess was too large. Please try again: ");
    }
}
