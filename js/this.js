// This refers to the current object or context where a piece of code is being executed allows you to access and work with the properties and methods of that object.

let person = {
    firstName: 'Alex',
    lastName: 'Pandian',
    age: 22,
    sayHello (){
       console.log("I'm " + person.firstName + " "+ person.lastName + " and I've a " + laptop.brand + " laptop");
    }

}

let laptop = {
   brand: 'ASUS',
   model: '2023'
}

person.sayHello()