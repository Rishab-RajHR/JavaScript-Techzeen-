class Parent {
    constructor(name){
        console.log("How Are You " + name + " ?")
    }
}

class Child extends Parent {
    constructor(name,age){
        super(name);
        console.log(name + " Age is: " + age);
    }
}

let c = new Child("Basil Joseph");