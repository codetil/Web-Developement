//Qs 1. For the Given String: let msg = "help!"; 
//      Trim it & convert it to uppercase.
let msg = "help!";
console.log(msg.trim().toUpperCase());//HELP!
//Qs 2. Qs. For the String -> let name = "ApnaCollege", predict the output for following:
//          name.slice(4, 9)
//          name.indexOf("na")
//          name.replace("Apna", "Our")
let name = "ApnaCollege";
console.log(name.slice(4, 9));//Colle
console.log(name.indexOf("na"));//2
console.log(name.replace("Apna", "Our"));//OurCollege

//Qs 3. Separate the "College" part in above string & replace 'l' with 't' in it.
console.log(name.slice(4).replace('l','t').replace('l','t'));//cottege

//Qs 1. For the given start of an array, change it to final form using methods.
let start = ['January', 'July', 'March', 'August'];
start.shift(); 
start.shift();
start.unshift('june');
start.unshift('july');
console.log(start);

//Qs 1. For the given start state of an array, change it to final form using splice.
//     start: ['january', 'july', 'march', 'august']
//     final: ['july', 'june', 'march', 'august']
let months = ['january', 'july', 'march', 'august'];
(months.splice(0,2,"july","june"));
//Qs 2. Return the index of the "javascript" from the given array, if it was reversed.
//    ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
lang.reverse().indexOf("javascript");

//Qs. Create a nested array to show the following tic-tac-toe game state.
let game = [['X','null','O'],['null','X','null'],['O','null','X']];
