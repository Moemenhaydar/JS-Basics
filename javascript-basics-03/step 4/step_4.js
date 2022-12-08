var pass=document.querySelector("#password");
var confirm=document.querySelector("#confirmation");
var btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    if(pass.value!=confirm.value){
        pass.style.border="3px solid red";
        confirm.style.border="3ps solid red";
    }
})