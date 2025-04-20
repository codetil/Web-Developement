//String Methods
//Trim Method :- Cuts spaces but value of msg remains same
let msg = " Hello ";
msg.trim();

let password = prompt("Enter your password");
let newPass = password.trim();
console.log(newPass);
console.log(password);
//Uppercase & Lowercase method
let str = "Random String";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//String Methods with Arguments
//indexOf()
let stre = "ILoveCoding";
console.log(str.indexOf("Love"));// 1 gives first index only
console.log(str.indexOf("J"));// -1 for not found
console.log(str.indexOf("o"));// 2 ans
//Method Chaining
let Msg = " Hello ";
let newMsg =  Msg.trim().toUpperCase();//HELLO 
console.log(newMsg);
//Slice Method
console.log(stre.slice(5));// Coding ...if we just starting index of string it assumes ending index as last digit
console.log(stre.slice(1,4));// Love
let strng = str.slice(-2)// ng...  str.slice(length-num));
console.log(strng);// 
// Replace Method
console.log(stre.replace("Love","Do"));// I Do Coding
let mg = "apnaapnaapna";
console.log(mg.replace("apna","college"));// Collegeapnaapna ... Only first word or letter will be replaced
// Repate Method
let string = "Mango";
console.log(str.repeat(3));//MangoMangoMango
//