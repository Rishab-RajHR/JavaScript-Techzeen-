/*
   bug: "#26de81",
   dragon: "#ffeaa7",
   electric: "#fed330",
   fairy: "#FF0069",
   fighting: "#30336b",
   fire: "#f0932b",
   flying: "#81ecec",
   grass: "#00b894",
   ground: "#EFB549",
   ghost: "#a55eea",
   ice: "#74b9ff",
   normal: "#95afc0",
   poison: "#6c5ce7",
   psychic: "#a29bfe",
   rock: "#2d3436",
   water: "#0190FF"

*/

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");



let getPokeData = () => {
    // Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 100) + 1;
    // Combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    // Fetch generated URL
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
        });
};

// Generate Card

let generateCard = (data) => {
     // Get neccessary data and assign it to variables
     console.log(data);
     const hp = data.stats[0].base_stat;
     console.log(hp);
}

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);