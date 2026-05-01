/*
********************* Inheritance In JavaScript ***********************
Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.

Using class inheritance, a class can inherit all the methods and properties of another class.

Inheritance is a useful feature that allows code reusability.

To use class inheritance, you use the extends keyword.

*/

class Person{
    constructor(name){
         this.name = name;
    }
    greet(){
       console.log(`Hello I'm ${this.name}`);
    }
}
class Student{
    constructor(name){
        this.name = name;
    }
    greet(){
       console.log(`Hello I'm ${this.name}`);
    }
}

let student1 = new Student("Alex");
student1.greet();