//Used to repet something
//For Loop...
//Print 1 to 5
console.log("Numbers from 1 to 5:");
for(let i=1; i<=5; i++){
    console.log(i);
}
//Print 5 to 1
console.log("Numbers from 5 to 1:")
for(let i=5; i>=1; i--){
    console.log(i);
}
//Print odd numbers(1 to 15)
console.log("Odd numbers from 1 to 15:")
for(let i=1; i<=15; i++){
    if(i%2 != 0){
        console.log(i);
    }
}
console.log("backward");
for(let i=15; i>=1; i=i-2){
    console.log(i);
}
//Print Even Numbers
console.log("Even numbers from 1 to 15:")
for(let i=1; i<=15; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
//Print Multiplication table of 5
console.log("Table of 5:");
for(let i=5; i<=50; i=i+5){
    console.log(i);
} 
// Print table using input
let n = prompt("Enter your number:");
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}
//Nested Loop
for(let i=1; i<=3; i++){
    console.log(`Outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
//While Loop...
//Print 1 to 5 using while loop
console.log("Numbers from 0 to 5 using while loop:");
let i2=0;
while(i2<=5){
    console.log(i2);
    i2++;
}
//Break Keyword
let i3=0;
while(i3<=5){
    if (i3==3){
        break;
    }
    console.log(i3);
    i3++;
}
console.log("We used break at 3");
//Loops with arrays
let fruits = ["Mango","Apple","Litchi"];
fruits.push("Pineapple");
for(let i=0; i<fruits.length; i++){
    console.log(i+1, fruits[i]);
}
//Nested Loops with Nested Arrays
let hero = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];
for(let i=0; i<hero.length; i++){
    console.log(`List #${i+1}`);
    for(let j=0; j<hero[i].length; j++){
        console.log(j+1, hero[i][j]);
    }
}
//for of loop
//for of loop with string
let str = "my class"
for(let char of str){
    console.log(char);
}
//for of loop with array
let fruit = ["Mango","Apple","Litchi"];
for(let item of fruit){
    console.log(item);
}
//Nested for of loop
let heroes = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];
let listNumber = 1;
for(let heroGroup of heroes){
    console.log(`List #${listNumber}`);
    for(let heroName of heroGroup){
        console.log(heroName);
    }
    listNumber++;
} 