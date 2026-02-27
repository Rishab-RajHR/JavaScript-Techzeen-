function fullName(a,b){

    let answer = (a+" " +b);
    return answer;
    // return (a+" " +b); => We cannot use multiple returns
}
let result = fullName("Alex","Pandian");
console.log(result);


function checkNumber(a)
{
    if(a>0)
    {
       return "Positive";
    }
    else if(a<0)
    {
        return "Negative";
    }
    else{
      return "Zero";
    }
}

let resulte = checkNumber(2);
console.log(resulte);