// Random Quotes Api URl
const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

// Display random quotes
const renderNewQuote = async () => {
    // Fetch contents from url
    const response = await fetch(quoteApiUrl);

    // Store response
    let data = await response.json();

    // Access quote
    quote = data.content;

    console.log(data);
}

window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
};