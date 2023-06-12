var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');
//These 3 are same
//1. btnTranslate.addEventListener("click",()=>{
//     console.log("hi");
// })

//2. btnTranslate.addEventListener("click",function x(){
//     console.log("hi");
// })

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";
 
function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}
//3.
 function x(){
    //output.innerHTML="jskdljsakdj" + txtInput.value;

    var inputTxt = txtInput.value; //taking input

    //calling server from processing
    fetch(getTranslationUrl(inputTxt))
    .then(response=> response.json())
    .then(json =>{
        var translatetxt =json.contents.translated;
        output.innerText= translatetxt;
    })
}

btnTranslate.addEventListener('click', x);

