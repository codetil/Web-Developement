// Guessing a movie game using while loop...
// const favourite = "avatar";
// let guess = prompt("Guess my favourite movie:");
// while(guess!=favourite  && guess!="quit"){
//     // console.log(alert("INCORRECT! Your guess is wrong..."));
//     guess = prompt("Wrong guess...Please try again:");
// }
// if(guess==favourite){
// console.log("Cogratulations! Your guess is right...");
// } else{
//     console.log("You Quit...");
// }
const favourite = "avatar";
let guess = prompt("Guess my favourite movie:");
while(guess!=favourite){
    // console.log(alert("INCORRECT! Your guess is wrong..."));
    if (guess =="quit"){
        console.log("You Quit...");
        break;
    }
    guess = prompt("Wrong guess...Please try again:");
}
