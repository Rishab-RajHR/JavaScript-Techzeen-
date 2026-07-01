document.getElementById("btn").addEventListener("click", function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});

function checkPalindrome(str){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '');
    console.log(txt,txt_new);
}