// Array [Data Structure]
let students = ["Aman", "Shradha", "Rajat"];

let num = [2,4,6,8];
console.log(num[0]); //2
console.log(num.length); //4 
console.log(typeof num); //object

let info = ["aman", 56, 9.5];
let arr = []; //empty array
console.log(info.length); //3
console.log(arr.length); //0
console.log(info[2]); //9.5
console.log(arr[0]); //undefined
console.log(info[0][0]); //a
console.log(info[0].length); //4

//Arrays are mutable
let fruits = ["Mango","Apple","Litchi"];
fruits[0] = "Banana";
console.log(fruits);
fruits[7] = "Papaya";
console.log(fruits);

// Array Methods
let cars = ["BMW", "Ferrari", "XUV", "Audi"];
//Push 
cars.push("Maruti");
console.log("After push:", cars);
//Pop
cars.pop();
console.log("After pop:", cars);
//Unshift
cars.unshift("Maruti");
console.log("After unshift:", cars);
//Shift
cars.shift();
console.log("After shift:", cars);
//indexOf
console.log("Index of BMW:", cars.indexOf("BMW")); //0
console.log("Index of xuv:", cars.indexOf("xuv")); //-1
//includes
console.log("Includes XUV:", cars.includes("XUV")); //true
console.log("Includes mercedes:", cars.includes("mercedes")); //false

//Concate Method
let primary = ["red", "yellow", "green"];
let secondary = ["blue","white","black"];
console.log("Concatenated arrays:", primary.concat(secondary));

//Reverse Method
let colorsToReverse = ["red", "yellow", "green"];
console.log("Original array:", colorsToReverse);
console.log("Reversed array:", [...colorsToReverse].reverse());
console.log("Original array unchanged:", colorsToReverse);

//Slice Method
let colors = ["red", "yellow", "green", "blue","white","black"];
console.log("Original array:", colors);
console.log("Slice with no params:", colors.slice());
console.log("Slice from index 2:", colors.slice(2));
console.log("Slice from 1 to 3:", colors.slice(1,3));
console.log("Slice last 2:", colors.slice(-2));

//Splice Method
let colors1 = ["red", "yellow", "green", "blue","white","black"];
let colors2 = ["red", "yellow", "green", "blue","white","black"];
let colors3 = ["red", "yellow", "green", "blue","white","black"];

console.log("\nSplice Examples:");
console.log("Original array:", colors1);
console.log("Splice from index 4:", colors1.splice(4));
console.log("Remaining array:", colors1);

console.log("\nOriginal array:", colors2);
console.log("Splice first element:", colors2.splice(0,1));
console.log("Remaining array:", colors2);

console.log("\nOriginal array:", colors3);
console.log("Splice and replace:", colors3.splice(0,1,"black","grey"));
console.log("Modified array:", colors3);

//Sort Method
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("\nSort Examples:");
console.log("Original numbers:", numbers);
console.log("Sorted numbers:", [...numbers].sort());
console.log("Original numbers unchanged:", numbers);

//Array Reference
let originalArray = ['a','b'];
let arrayCopy = originalArray;
console.log("\nArray Reference Example:");
console.log("Original array:", originalArray);
arrayCopy.push('c');
console.log("After modifying copy, original array:", originalArray);

//Constant Arrays
const constantArray = [1,2,3,4];
console.log("\nConstant Array Example:");
console.log("Original constant array:", constantArray);
// constantArray = [5,6,7,8]; // This would cause an error
constantArray.push(5); // This works
console.log("After push to constant array:", constantArray);

//Nested Array
let number = [[2,4],[3,6],[4,8]];
console.log("\nNested Array Example:");
console.log("Number of sub-arrays:", number.length);
console.log("First sub-array:", number[0]);
console.log("Length of first sub-array:", number[0].length);
console.log("First element of first sub-array:", number[0][0]);