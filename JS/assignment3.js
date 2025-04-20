//Qs1. Write a JavaScript program to get the first n elements of an array. In can be any positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]
let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);
console.log("agdfg".length);
//Qs2. Write a JavaScript program to get the last n elements of an array. In can be any positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]
let anss = arr.slice(arr.length-n);
console.log(anss);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str1 = prompt("please enter a string");
if(str1.length == 0){
    console.log("String is blank");
}
else{
    console.log("String is not blank");
}
//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let ch = prompt("please enter characters");
let idx = 3;
// if(str[idx] == str[idx].toLowerCase()){
if(ch === ch.toLowerCase()){
    console.log("Characters are in lower cases");
}
else{
    console.log("Characters are not in lower cases");
}
//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let str = "  hii  ";
console.log(str.trim());

//Qs6. Write a JavaScript program to check if an element exists in an array or not.
// let array = ["hello", 'a', 23, 64, 99, -6];
// let item = 64;
// if(array.indexOf(item) != -1) {
let array = [3,5];
if (array.length === 0){
   console.log("Elements doesn`t exist in an array.");
}
else{
    console.log("Elements exists in an array.");
}