let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
       qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_TEXT_OR_URL" + qrText.value;
       imgBox.classList.add("show-img");
    }
  
}