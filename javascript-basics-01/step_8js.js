var age=prompt("enter ur age");
document.getElementById("age").value=age;
document.getElementById("validate").onclick= function(){
    if (age>18){
        alert("you are over 18")
    }
    else{
        alert("you are under 18")
    }
}