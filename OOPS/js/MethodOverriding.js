class Parent{
    sayName(name){
        console.log("My Name is: " + name);
    }
}

class Child extends Parent {
      sayName(name){
         console.log("Mera Naam " + name + " hai");
      }
}

let c = new Child();

c.sayName("Alex");