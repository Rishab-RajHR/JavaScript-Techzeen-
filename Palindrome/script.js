document.getElementById("btn").addEventListener("click", function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});

function checkPalindrome(str){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLen = Math.floor( len / 2);
    let result = document.getElementById("result");
}