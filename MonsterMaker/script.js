let colorBtn = document.getElementById("color-btn");
let faceBtn = document.getElementById("face-btn");
let hornsBtn = document.getElementById("horns-btn");
let tailBtn = document.getElementById("tail-btn");

let docRoot = document.querySelector(":root");

let bodyColors = [
    "#a8d530",
    "#42aaff",
    "#f3d5db",
    "#ff4f51",
    "#904ae8",
    "#ffa711"
];

let colors = [...bodyColors, "transparent"];
let [counter1, counter2, counter3, counter4] = Array(4).fill(0);

let setCounter = (counter, len) => {
  return counter < len - 1 ? counter + 1 : 0;
}

faceBtn.addEventListener("click", () => {
    counter1 = setCounter(counter1, 6);
    document.getElementById("face").setAttribute("src", `face-${counter1},png`);
})