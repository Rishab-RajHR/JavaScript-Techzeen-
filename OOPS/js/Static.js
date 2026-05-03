/*  ****************** Static Method in JavaScript ***************************
Static methods in JavaScript are associated with a class rather than an instance of the class.
They are called on the class itself, not on an instance of the class .
*/

class Employee{
   constructor(name){
      // this.name = name;
      this.name = Employee.capitalized(name);
   }
   intro(){
      console.log(`My Name is ${this.name}`);
      // console.log(`My Name is ${Employee.capitalized(this.name)}`);
   }
   static capitalized(name){
       return name.charAt(0).toUpperCase() + name.substr(1, name.length);
   }
}

let a  = new Employee("Tovino");
a.intro();