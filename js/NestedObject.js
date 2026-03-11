/*
*******  Nested Object ********

An object that is placed inside another object
it is just like box inside another box, where each box holds related information together
*/

let student = {
    id : 1,
    personalInfo : {
         firstName : "Alex",
         lastName : "Pandian",
         contactInfo : {
             email : "alex112@gmail.com",
             phone : '123-456-789'
         }
    }
}
console.log(student)