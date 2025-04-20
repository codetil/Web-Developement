//Qs. 1 Create a function that print a poem...
function printPoem() {
    console.log("Twinkle Twinkle Little Star");
    console.log("How I Wonder What You Are ?");
    console.log("Up Above The World So High");
    console.log("Like A Diamond In The Sky...");
}
printPoem();

//Qs. 2 Create a Function to roll a dice & always display the value of the dice (1 to 6).
function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log("Value of dice is : ", random);
}
rollDice();

//Qs. 3 Create a function that gives us the average of 3 numbers.
function calcAvg(a, b, c) {
    let avg = (a+b+c)/3 ;
    console.log("Average of 3 numbers is: ", avg);
}
calcAvg(1, 2, 3);
console.log(typeof calcAvg);

//Qs. 4 Print a function that prints the multiplication table of a number.
function printTable(n) {
    console.log(`Multiplication table of ${n}:`);
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
printTable(6);

//Qs. 5 Create a function that returns the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;
    console.log(`Sum of numbers from 1 to ${n}:`);
    for(let i=n; i<=n; i++){
       console.log(sum+=i);
    }
    return sum;
}
getSum(3);

//Qs. 6 Create a function that returns the concatenation of all strings in an array.
let str = ["hi", "hello", "bye", "!"];
function concat(str) {
    let result = "";
    for(let i=0; i<str.length; i++){
       result += str[i];
    }
    console.log(result);
    return result;
}
concat(str);