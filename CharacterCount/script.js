let myText = document.getElementById("my-Text");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    console.log(myText.value,count);
});