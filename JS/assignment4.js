// Qs1. Write a JS program to delete all occurrences of element 'num' in a given array.
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2 
//          Result should be arr = [1, 3, 4, 5, 6, 3]
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log("Q1 Result:", arr);
// Qs2. Write a JS program to find the no of digits in a number. 
//      Example: if number = 287152, count = 6
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log("Q2 Result:", count);
// Qs3. Write a JS program to find the sum of digits in a number.
//      Example: if number = 287152, sum = 25
let no = 287152;
let sum = 0;
let copyNo = no;
while(copyNo > 0){
    let digit = copyNo % 10;
    sum += digit;
    copyNo = Math.floor(copyNo/10);
}
console.log("Q3 Result:", sum);
// Qs4. Print the factorial of a number n.
//      Example:7! = 1x2x3x4x5x6x7 = 5040
//              5! = 1x2x3x4x5 = 120
//              3! = 1x2x3 = 6
//              0! = 1
let n = 5;
let factorial = 1;
for(let i = 1; i <= n; i++){
    factorial *= i;
}
console.log(`Q4 Result: factorial of ${n} is ${factorial}`);
// Qs5. Find the largest number in an array with only positive numbers.
let array = [2,5,10,4,2,7,1,9];
let largest = 0;
for(let i = 0; i < array.length; i++){
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log("Q5 Result:", largest);