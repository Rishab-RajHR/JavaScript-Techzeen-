class Form{
     submit(){
        alert(this.name + ": Form Submitted!! and his id is: " + this.id);
     }
     cancel(){
        alert(this.name + ": Form is not submitted!! and his id is: " + this.id);
     }
     fillInfo(givenName, id){
        this.name = givenName;
        this.id = id;
     }
}

let alex = new Form();
alex.fillInfo("Alex", 123);
alex.submit();
let basil = new Form();
basil.fillInfo("Basil",456);
basil.cancel();

// Pascal Convention
// AlexPandian ---> class

// camel case Convention
// alexPandian  ---> variables , methods