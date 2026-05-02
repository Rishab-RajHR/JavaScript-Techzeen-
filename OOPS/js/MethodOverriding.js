class Person{
    sayName(name){
        console.log("My Name is: " + name);
    }
}

class Child extends Parent {
    
}

let c = new Child();

c.sayName("Alex");