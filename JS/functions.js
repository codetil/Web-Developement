//Function definition
function hello(){
    console.log("Hello");
}
//Function calling
hello();
hello();
hello();

//Print even or odd number
function printEvenorOdd() {
    let n = prompt ("Enter a number: ");
    if(n%2==0){
        console.log("Number is even");
    }else {
        console.log("Number is odd");
    }
}
printEvenorOdd();

//Funtion with arguments
function sum(a,b) {
    console.log(a + b);
}
sum(1, 2);
sum(4, 5);

//Return Keyword
function sum(a,b) {
    console.log(a + b);
}
console.log(sum(1, 2), 3);

function isAdult(age) {
    if(age >= 18) {
        return "Adult";
    }else {
        return "Not Adult";
    }
}

//Scope
let summ = 54; //Global Scope;

function calSum(a, b) {
    let summ = a+b;//Function Scope;
    console.log(summ);
}
calSum(1, 2);
console.log(summ);

for(let i=1; i<=5; i++){
    console.log(i);//Block Scope;
}

