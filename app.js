var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');
// console.log(txtInput)
// btnTranslate.addEventListener("click",()=>{
//     console.log("hi");
// })
// btnTranslate.addEventListener("click",function x(){
//     console.log("hi");
// })

function x(){
    output.innerHTML="jskdljsakdj" + txtInput.value;
}

btnTranslate.addEventListener('click', x);