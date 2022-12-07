var n1=prompt("enter the first nb");
var n2=prompt("enter the second nb");
document.getElementById("first_number").value=n1;
document.getElementById("second_number").value=n2;
document.getElementById("validate").onclick= function (){
    alert("The division is " + (n1/n2));
}