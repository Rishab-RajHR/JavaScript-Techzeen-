let btn = document.getElementById("btn");

let rupees = document.getElementById("output1");
let dollars = document.getElementById("output2");
let yen = document.getElementById("output3");

let formatter1 = new Intl.NumberFormat(
    "en-IN",
    {style: "currency", currency: "INR"}
);
let formatter2 = new Intl.NumberFormat(
    "en-US",
    {style: "currency", currency: "USD"}
);
let formatter3 = new Intl.NumberFormat(
    "en-IN",
    {style: "currency", currency: "I"}
);

btn.addEventListener("click", ()=>{
    let amount = document.getElementById("amount").nodeValue;

    rupees.innerHTML = `<span>Indian Rupees:</span>${formatter1.format(amount)}`;
    rupees.innerHTML = `<span>US Dollars:</span>${formatter1.format(amount)}`;

});