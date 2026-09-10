let btn = document.getElementById("btn");

let rupees = document.getElementById("output1");

let formatter1 = new Intl.NumberFormat(
    "en-IN",
    {style: "currency", currency: "INR"}
);