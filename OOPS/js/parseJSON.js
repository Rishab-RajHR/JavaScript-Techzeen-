let data = `
{
    "name" : "Alex",
    "age" : 23,
    "is_employee" : true,
    "passport" : null,
     "language" : ["JavaScript", "C++", "Java", "Python"],
     "contact" : {
        "phone_number" : 123456789,
        "email" : "alex12@gmail.com"
     },
     "students" : [
        {
            "name" : "Naveen",
            "class" : "Nine"
        },
        {
            "name" : "Tovino",
            "class" : "Ten"
        },
        {
            "name" : "Basil",
            "class" : "Eight"
        }
     ]
}`;

let dObj = JSON.parse(data);
console.log(dObj);