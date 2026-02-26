// Arguments => An Array like object accessible inside functions that contain the values of the arguments passed to that function

// function add(a,b) {
//    console.log(a+b);
// }
// add(2,3);


// function add()
// {
//   //  console.log(arguments.length);
//   //  console.log(arguments[2]);
// }
// add();
// add(2,3,4);

function add()
{
     if(arguments.length == 0)
     {
        console.log("The sum is 0 because no argument is passed");
     }
     else{
        let sum = 0;
        for(let i=0; i<arguments.length; i++)
          {
           sum += arguments[i]; // sum = sum + arguments[i]
        }
        console.log("The Sum is " + sum);
     }
}
// add(2);
add(3,4,5);


let addition = add; //assign function to variable

addition(1,2,3,4);