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

    // Array of characters in the quote
    let arr = quote.split("").map((value) => {
        //   wrap the characters in a span tag
        return "<span class='quote-chars'>" + value + "</span>";
    });

    // Join Array for displaying
    quoteSection.innerHTML += arr.join("");
};

// Start Test
const startTest = () => {
     mistakes = 0;
     timer = "";
     userInput.disabled = false;
     document.getElementById("start-test").style.display = "none";
     document.getElementById("stop-test").style.display = "block";
};

// Logic for comparing input words with quote
userInput.addEventListener("input", () => {
     let quoteChars = document.querySelectorAll(".quote-chars");
     // Create an array from received span tags
     quoteChars = Array.from(quoteChars);

    // Array of user input characters
    let userInputChars = userInput.value.split("");

    // Loop through each character in quote
    quoteChars.forEach((char,index) => {
        // Check if char(quote character) = userInputChars[index](input character)'
        if (char.innerText == userInputChars[index]) {
              char.classList.add("success");
        } 
        // If user hasn't entered anything or backspaced
        else if(userInputChars[index] == null){
            // Remove class if any
            if(char.classList.contains("success")){
                 char.classList.remove("success");
            }
            else{
                 char.classList.remove("fail");
            }
        }
        // If user enter wrong character
        else{
            // Checks if we already have added fail class
            if(!char.classList.contains("fail")){
                 // increment and display mistakes
                 mistakes += 1;
                 char.classList.add("fail");
            }
            document.getElementById("mistakes").innerText = mistakes;
        }
        // Returns true if all the characters are entered correctly
        let check = quoteChars.every(element=>{
             return element.classList.contains("success");
        });
        // End test if all the characters are correct
    });
});

window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
};