var anchor=document.querySelectorAll("a")
var par =document.querySelector("p")
anchor.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        if(e.target.id=="show"){
            par.display=`display:block`
        }else{
            par.style=`display:none`
        }
    })
})