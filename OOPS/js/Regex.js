let regEx = /very/g; // change globally
let message = "I'm a very very very good boy and very nice";

// console.log(message.replace('very', 'VERY')); // only replace first occurence
console.log(message.replace(regEx, 'VERY'));