var shoe=prompt("enter ur shoe nb");
var birth=prompt("when is ur birthday ?");
document.getElementById("shoe_size").value=shoe;
document.getElementById("year").value=birth;
document.getElementById("validate").onclick=function(){
    alert("the result is " + (shoe*2+5*50-birth+1766))
}