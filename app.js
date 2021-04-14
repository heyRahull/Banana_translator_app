var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click",()=>{
var inputText = txtInput.value;
var translationURL = serverURL + "?" + "text=" +inputText;

    fetch(translationURL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText= translatedText;
        })
        .catch(error => {console.log("ERROR OCCURED",error);
        alert("Something wrong with server! Try again in some time");
    })

})


txtInput.addEventListener("change",()=>{return console.log(txtInput.value);
})