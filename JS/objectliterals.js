//Used to store keyed collection & complex entities...
//Basically collection of complex data, it is used to store complex data...
//Objects are collection of object...
let student = {
    name: "avni",
    age: 23,
    marks: 94.4,
};

// Print entire student object
console.log("Student object:", student);

// Print individual properties
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Student marks:", student.marks);

let student2 = ["avn", 23, 9.4];
console.log("Student2 array:", student2);

let delhi = {
    latitude: "28.7041 N",
    longitude: "77.1025 E",
};

// Print entire delhi object
console.log("Delhi location:", delhi);

// Print individual properties
console.log("Delhi latitude:", delhi.latitude);
console.log("Delhi longitude:", delhi.longitude);

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red","pink"],
};

// Print entire item object
console.log("Item object:", item);

// Print individual properties including array
console.log("Item price:", item.price);
console.log("Item discount:", item.discount);
console.log("Item colors:", item.colors);

// Print specific array elements
console.log("First color:", item.colors[0]);
console.log("Second color:", item.colors[1]);

//Add / Update Value
let students = {
    name: "avni",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

//Change the city to mumbai
//Add a new property, gender: "Female"
//Change the marks to "A"
students.city = "Mumbai";
students.gender = "Female";
students.marks = "A";
delete students.age;
console.log("Updated students object:", students);

//Object of objects
const classInfo = {
    mansi: {
        grade: "A+",
        city: "Delhi"
    },
    bhushan: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};
console.log("Class Info", classInfo);
console.log(classInfo.mansi);
console.log(classInfo.bhushan.city);
//Array of objects
const classInformation = [
    {
        name: "Mansi",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Bhushan",
        grade: "A",
        city: "Pune"
    },
    {
        name: "Karan",
        grade: "O",
        city: "Mumbai"
    }
];
console.log("Class Information using array", classInformation);
console.log(classInformation[1]);
console.log(classInformation[2].city);

//MATH Object Examples

// Math.abs() - Returns absolute value
console.log("\nMath.abs() Examples:");
console.log("Math.abs(12):", Math.abs(12));
console.log("Math.abs(-12):", Math.abs(-12));
console.log("Math.abs(-12.5):", Math.abs(-12.5));

// Math.pow() - Returns base raised to exponent
console.log("\nMath.pow() Examples:");
console.log("Math.pow(4,4):", Math.pow(4,4));
console.log("Math.pow(2,3):", Math.pow(2,3));

// Math.floor() - Rounds down to nearest integer
console.log("\nMath.floor() Examples:");
console.log("Math.floor(-5.4):", Math.floor(-5.4));
console.log("Math.floor(5.99999):", Math.floor(5.99999));
console.log("Math.floor(5):", Math.floor(5));
console.log("Math.floor(5.4):", Math.floor(5.4));

// Math.ceil() - Rounds up to nearest integer
console.log("\nMath.ceil() Examples:");
console.log("Math.ceil(5.5):", Math.ceil(5.5));
console.log("Math.ceil(5.999999):", Math.ceil(5.999999));
console.log("Math.ceil(5):", Math.ceil(5));
console.log("Math.ceil(5.2):", Math.ceil(5.2));

// Math.random() - Returns random number between 0 (inclusive) and 1 (exclusive)
console.log("\nMath.random() Examples:");
console.log("Random number 1:", Math.random());
console.log("Random number 2:", Math.random());
console.log("Random number 3:", Math.random());

//Random Integers Examples

// Method 1: Step by step (for understanding)
console.log("\nRandom Integer (1-5) - Step by Step:");
let num = Math.random();
let step2 = num * 5;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log("Random number between 1 and 5:", step4);

// Method 2: One-liner (recommended)
console.log("\nRandom Integer (1-5) - One-liner:");
let random = Math.floor(Math.random() * 5) + 1;
console.log("Random number between 1 and 5:", random);

// General formula for random integers between min and max
console.log("\nRandom Integer Formula:");
let min = 1;
let max = 100;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max}:`, randomInRange);