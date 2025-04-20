// Assignment 2 of JavaScript

// Qs.1 Create a number variable num with some Value.
//      Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 23;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}
// Qs2. Take the user's name & age as input using prompts.
//     Then return back the following statement to the user as an alert (by substituting their name & age):
//     name is age years old.
//     [Use template Literals to print this sentence]
let name = prompt("Enter your name");
let age = prompt("Enter your age");
let msg = (`${name} is ${age} years old.`);
alert (msg);
// Qs3. Write a switch statement to print the months in a quarter.
//     Months in Quarter 1: January, February, March
//     Months in Quarter 2: April, May, June
//     Months in Quarter 3: July, August, September
//     Months in Quarter 4: October, November, December
//     [Use the number as the case value in switch]
let quater = 1;

switch(quater) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July August September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not a quarter!");
}
// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
//     For a given string print if it is golden or not.
let string = "golden string";
if((string[0]=='A' || string[0]=='a') && string.length>5){
    console.log("Golden String");
}
else{
    console.log("Not a golden string");
}
// Qs5. Write a program to find the largest of 3 numbers.
let a = 3;
let b = 4;
let c = 5;
if(a>b){
    if(a>c){
        console.log(a, "is largest number");
    }
    else{
        console.log(c,"is largest number");
    }
}
else{
    if(b>c){
        console.log(b, "is largest number");
    }
    else{
        console.log(c, "is largest number");
    }
}
// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit. 
// Eg: 32 and 47852 have the same last digit i.e. 2
let y = 32;
let z = 47852;
if( (y % 10) == (z % 10) ){
    console.log("Numbers have the same last digit which is", y % 10 );
}
else{
    console.log("Numbers do not have the same last digit");
}