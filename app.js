const buttons=document.querySelectorAll("#btn");
const display = document.querySelector("#display");
const equal=document.querySelector("#equal");
const clear=document.querySelector("#clear");

buttons.forEach(button => {
    button.addEventListener('click',function(){
        display.value +=button.getAttribute('data-value');
    })
        
});
clear.addEventListener('click',function(){
    display.value="";
})

equal.addEventListener('click',function(){
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value="Error";
    }
})