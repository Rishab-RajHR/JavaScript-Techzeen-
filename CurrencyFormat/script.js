let btn = document.getElementById("btn");

let rupees = document.getElementById("output1");

let formatter1 = new Intl.NumberFormat(
    "en-IN",
    {style: "currency", currency: "INR"}
);

btn.addEventListener("click", ()=>{
    let amount = document.getElementById("amount").nodeValue;

    rupees.innerHTML = `<span>Indian Rupees:</span>${formatter1.format(amount)}`;

});