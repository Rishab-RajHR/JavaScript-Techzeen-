let words = [
  "Alexander Orion Vale",
"Sophia Celeste Marlowe",
"Ethan Gabriel Cross",
"Isabella Rosehart Quinn",
"Damian Lucius Grey",
"Aurora Skye Bennett",
"Julian Phoenix Carter",
"Lila Evangeline Storm",
"Sebastian Orion Drake",
"Clara Seraphine Wilde",
"Nathaniel Archer Frost",
"Elena Marigold Hayes",
"Xavier Thorne Blackwel",
"Amara Soleil Winters",
"Leo Caspian Rivers",
"Vivienne Starling Moore",
"Dorian Atlas Knight",
"Selene Ivy Harrington",
"Gabriel Sterling Voss",
"Ophelia Dawn Sinclair"
];

words.sort();
let input = document.getElementById("input");
let suggestion = document.getElementById("suggestion");
// Enter Key Code
const enterKey = 13;

window.onload = () => {
   input.value = "";
   clearSuggestion();
}

const clearSuggestion = () => {
   suggestion.innerHTML = "";
}

// Execute function on input
input.addEventListener("input", (e) => {
    clearSuggestion();
    // Convert input value to regex since string.startsWith() is case sensitive
    let regex = new RegExp("^" + input.value, "i");
    // loop through words array
    for(let i in words) {
       // Check if input matches with any word in words array
       if(regex.test(words[i]) && input.value != ""){}
    }
})