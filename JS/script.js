console.log("Hello World!");
console.log("My first JS code!");
let a = 10;
let b = 20;
console.log("Sum is: " + (a + b));
let pencilPrice = 10;
let eraserPrice = 5;
//let total = "The total price is : " + (pencilPrice + eraserPrice) + " Rupees";
// '`' backtick is used for string interpolation
let total = `The total price is : ${pencilPrice + eraserPrice} Rupees`;
console.log(total);
 //Arithmatic Operator
 console.log(a+b);//
 console.log(a-b);//
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 console.log(a**b);
 //Unary Operator
 console.log(++a);
 console.log(a++);
 console.log(a--);
 console.log(--a);
 //Assignment Operator
 a+=10;
 console.log(a);
 a-=10;
 console.log(a);
 a*=10;
 console.log(a);
 a/=10;
 console.log(a);
 a%=10;
 console.log(a);
 a**=10;
 console.log(a);
 //Comparison Operator
 console.log(a==b);
 console.log(a!=b);
 console.log(a>b);
 console.log(a<b);
 console.log(a>=b);
 console.log(a<=b);
 console.log(a===a);
 //Comparison for non-numbers
 console.log('a'<'b');
 console.log('a'>'b');
 console.log('a'=='a');
 console.log('a'=='A');
 //Logical Operator
 console.log(a>b && a<b);
 console.log(a>b || a<b);
 console.log(!(a>b));
 //Ternary Operator
 let result = a>b ? "a is greater than b" : "b is greater than a";
 console.log(result);
 //Typeof Operator
 console.log(typeof a);
 console.log(typeof b);
 console.log(typeof pencilPrice);
 console.log(typeof eraserPrice);
 console.log(typeof total);
 //Null and Undefined
 let c;
 console.log(c);
 console.log(typeof c);
 let d = null;
 console.log(d);
 console.log(typeof d);
 let e;
 console.log(e);
 console.log(typeof e);
 //NaN
 let f = 10/0;
 console.log(f);
 console.log(typeof f);
 //String
 let g = "Hello World!";
 console.log(g);
 console.log(typeof g);
 console.log(g.length);
 console.log(g[0]);
 console.log(g[1]);
 console.log(g[2]);
 //Conditional Statement 
 //if
 console.log("before my if statement"); 
 let age = 23;
 if(age>=18){
     console.log("You can vote");
     console.log("You can drive");
     let a = 5;
     console.log(5*a);
 }
 console.log("after my if statement");

 let firstName = 'Mansi';
 if (firstName == 'Mansi'){
    console.log(`Hello ${firstName}`);
 }
 //Practise Question 2
 //Qs. Create a traffic light system that shows what to do based on color...
 let color = 'green';
 if(color === 'Green'){
    console.log ('Go');
 }
if(color === 'Yellow'){
    console.log ('Slow Down');
 }
 if(color === 'Red'){
    console.log ('Stop');
 }
 //else if
 let age1 = 23;
 if(age1>=18){
     console.log("You are youth");
 }
 else if(13<age1<16){
     console.log("You are teenager");
 }
 else if(10<age1<13){
     console.log("You are kid");
 }
 else{
     console.log("You are child");
 }
//if else
let age2 = 25;
let person = 'Female';
if(age2>=18 && person==='Female'){
    console.log("You can marry");
}
else{
    console.log("You can't marry"); 
}
//Practice Question 2
//Create a system to calculate popcorn prices based on the size customer asked for :
let size = 'XL';
if(size==='S'){
    console.log('Price is Rs. 100');
}
else if (size==='M'){
    console.log('Price is Rs. 100');
}
else if (size==='L'){
    console.log('Price is Rs. 200'); 
}
else if(size==='XL'){
    console.log('Price is Rs. 250'); 
}
else{
    console.log('Invalid Size');
}
//Nested if-else
let marks = 50;
if(marks>=30){
    console.log('Pass');
    if (marks>=80){
        console.log('O Grade');
    }
    else{
        console.log('A Grade');
    }
}
else{
    console.log('Better Luck Next Time !');
}
//Logical Operator
let grade = 88;
//Logical AND
if(grade>=33 && grade>=80){
    console.log('Pass');
    console.log('A+');
}
//Logical OR
if(grade<33 || grade<80){
    console.log('Fail');
}
//Logical NOT
if(!(grade>=33)){
    console.log('Fail');
}
if((marks>33 && marks<=80) || !false){
    console.log('Pass');
}
//Practice Question 2
// Qs. A "good string " is a string that starts with the letter 'a' & has a length > 3.
// Write a program to check if a string is good or not.
let str = 'abc';
if((str[0]==='a') && (str.length>3)){
    console.log('Good String');
}
else{
    console.log('Not a good String'); 
}
//Truthy & Falsy values
if(true){
    console.log('It has true value.')
}
else{
    console.log('It has true value.')
}
if(null){
    console.log('It has true value.')
}
else{
    console.log('It has true value.')
}