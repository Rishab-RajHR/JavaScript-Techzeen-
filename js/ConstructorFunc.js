/*

 ******* Object Constructor Function *******

 creates and initializes an object instance.
 a constructor gets called when an object is created using the new keyword.

 Syntax: 
 function MethodName(paramter list){
     code.....    
  }

*/

/* let employee1 = {
    firstName : "Alex",
    lastName : "Pandian",
    salary : 50000,
    department : "IT"
}
let employee2 = {
    firstName : "Tovino",
    lastName : "Pandian",
    salary : 60000,
    department : "AI"
} */



// Object Constructor Function
/* function Employee(first, last, salary, dep){
     this.firstName = first;
     this.lastName = last;
     this.salary = salary;
     this.department = dep;
}

let employee1 = new Employee("Alex", "Pandian", 50000, "IT");
let employee2 = new Employee("Tovino", "Pandian", 60000, "AI");
console.log(employee1);
console.log(employee2); */




/* function Employee(first, last, salary, dep){
     this.firstName = first;
     this.lastName = last;
     this.salary = salary;
     this.department = dep;
}

let employee1 = new Employee("Alex", "Pandian", 50000, "IT");
// If you want to add any property in employee1 object then you can do this 
employee1.bonus = "10%";

console.log(employee1); */



function Employee(first, last, salary, dep){
     this.firstName = first;
     this.lastName = last;
     this.salary = salary;
     this.department = dep;
}

let employee1 = new Employee("Alex", "Pandian", 50000, "IT");

// If you want to add any function in employee1 object then you can do this
employee1.fullInfo = function(){
    return this.firstName + " " + this.lastName + " " + this.salary + " " + this.department
}
console.log(employee1);