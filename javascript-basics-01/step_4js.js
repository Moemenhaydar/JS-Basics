var name=prompt("what's ur name")
var last_name=prompt("what's last name ")
var city=prompt("where do you live")

document.getElementById("name").value=name;
document.getElementById("surname").value=last_name;
document.getElementById("city").value=city;
document.getElementById("validate").onclick=function(){
    alert("Hello "+name+" "+last_name+" who live in "+city);
}