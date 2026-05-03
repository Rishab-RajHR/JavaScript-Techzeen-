/*  ****************** Static Method in JavaScript ***************************
Static methods in JavaScript are associated with a class rather than an instance of the class.
They are called on the class itself, not on an instance of the class .
*/

class Employee{
   constructor(name){
      this.name = name;
   }
   intro(){
      console.log(`My Name is ${this.name}`);
   }
}

let a  = new Employee("Tovino");
a.intro();