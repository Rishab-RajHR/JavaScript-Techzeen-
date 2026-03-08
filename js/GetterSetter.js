/*
*)getters ---> can be used to access the properties of an object
Syntax: 
get methodName()
{
   // code for getting the property
}
*)setters ---> can be used to execute a function whenever a specified property is attempted to be changed
Syntax:
set methodName(paramter)
{
   // code for setting the property
}
*/

/*let student = {
    firstName : "Alex",
    getName : function()
    {
        return this.firstName.toUpperCase();
    }
}

console.log(student.getName())*/

// console.log(student.firstName);
// console.log(student.firstName.toUpperCase());



// with using getter method
let student = {
    firstName : "Tovino",
    // Getter Method
    get getName()
    {
        return this.firstName.toUpperCase();
    }
}

console.log(student.getName);
