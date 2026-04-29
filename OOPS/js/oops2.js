class Form{
     submit(){
        alert(this.name + ": Form Submitted!!");
     }
     cancel(){
        alert(this.name + ": Form is not submitted!!");
     }
     fillInfo(givenName){
        this.name = givenName;
     }
}

let alex = new Form();
alex.fillInfo("Alex");
alex.submit();
let basil = new Form();
basil.fillInfo("Basil");
basil.submit();

// Pascal Convention
// AlexPandian ---> class

// camel case Convention
// alexPandian  ---> variables , methods