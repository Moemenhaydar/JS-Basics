var n=document.querySelector("#name")
var ln=document.querySelector("#surname")
var city=document.querySelector("#city")
var button=document.querySelector("button")
button.addEventListener("click" , ()=> {
    var ans=prompt("do u want to clear 'y/n'")
    if (ans=="y") {
        n.value=ln.value=city.value="";
    }
})
