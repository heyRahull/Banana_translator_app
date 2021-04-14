var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");


btnTranslate.addEventListener("click",()=>{
   console.log("Button Clicked");
   console.log(txtInput.value);
})


txtInput.addEventListener("change",()=>{return console.log(txtInput.value);
})