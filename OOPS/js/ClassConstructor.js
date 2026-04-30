/* 
********************** Constructors in JavaScript ***********************
The constructor() method is a special method for creating and initializing objects created within a class.

The constructor() method is called automatically when a class is initiated, and it has to have the exact name "contructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty contructor method.

Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.

*/

class User{
    constructor(){
        console.log("Contructor Called....")
    }

    userDetails(n, a){
        this.firstName = n;
        this.age = a;
        alert("Name: " + this.firstName + " Age: " + this.age);
    }
}

let user1 = new User();
let user2 = new User();
let user3 = new User();

user1.userDetails("Alex", 22);
user1.userDetails("Basil", 24);
user1.userDetails("Tovino", 26);