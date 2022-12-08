var div = document.createElement("div")
document.querySelector("body").appendChild(div).setAttribute("id","other_div")
var otherDiv=document.querySelector("#other_div")
var input=document.querySelector("#name")
input.addEventListener("keyup" ,function() {
     otherDiv.innerText = input.value
})

