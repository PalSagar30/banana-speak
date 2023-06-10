var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');

// console.log(txtInput)
// btnTranslate.addEventListener("click",()=>{
//     console.log("hi");
// })
// btnTranslate.addEventListener("click",function x(){
//     console.log("hi");
// })

function x(){
    console.log("hi");
    console.log("input",txtInput.value);
}

btnTranslate.addEventListener('click', x);