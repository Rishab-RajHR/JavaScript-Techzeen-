// String Manipulation
// For new line => \n
// For tab space => \t
// For backslash => \\
// let message = "This is \n good";
let message = "This is \n good";
let messaget = "This is \t good";
let messager = "This is \\ good";
console.log(message);
console.log(messaget);
console.log(messager);


// For double quotation 
let msg = "This is\" good";
console.log(msg);

// For single quotation 
let msge = 'This is\' good';
console.log(msge);


// For calculating length
let par = 'This is good';
console.log(message.length);


// For accessing the index value
let party = 'This is good';
console.log(party[8]);


// For concatenation
let firstName = "Alex";
let lastName = "Pandian";
console.log(firstName + " " + lastName);


// == equal to operator

let first = "Alex";
if(first == "Alex")
{
     console.log("Equal");
}
else {
  console.log("Not Equal");
}



// Concatenation function

let firstN = "Alex";
let lastN = "Pandian";

let result = firstN.concat(" ",lastN);
console.log(result);



// Here findout the substring of the string
let msgn = 'This is good';
// let resultn = msgn.substr(5, 2);
// let resultn = msgn.substring(5, 10);
let resultn = msgn.indexOf('good');  // When there is no word then return -1
// let resultr = msget.indexOf('is',3);
// let resultr = msget.lastIndexOf('is');
console.log(resultn);



// Trim() => Removing the unwanted space
let tar = '       This is good   ';
let ant = tar.trim();
// let ant = tar.trimStart();
// let ant = tar.trimEnd();
console.log(ant);



// Convert to uppercase and lowercase
let see = 'This is Noida';
// let sheep = see.toLowerCase();
let sheep = see.toUpperCase();
console.log(sheep);




// Replace the word

let seer = 'This is Uttar';
let amr = seer.replace('This', 'Alex');
console.log(amr);



// includes -> checks strings exist or not

let the = 'This is Alex';
let kam = the.includes("Alex");
console.log(kam);
