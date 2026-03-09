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
function Employee(first, last, salary, dep){
     this.firstName = first;
     this.lastName = last;
     this.salary = salary;
     this.department = dep;
}

let employee1 = new Employee("Alex", "Pandian", 50000, "IT");
console.log(employee1);