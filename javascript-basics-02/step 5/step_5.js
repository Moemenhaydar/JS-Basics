/*document.querySelector(".container").onmouseover=()=>{
    document.getElementById("image1").src="images/image1_2.jpg"
    document.getElementById("image2").src="images/image2_2.jpg"
    document.getElementById("image3").src="images/image3_2.jpg"
    document.getElementById("image4").src="images/image4_2.jpg"
    document.getElementById("image5").src="images/image5_2.jpg"
}*/
var img=document.querySelectorAll("img");
img.forEach((e)=>{
    e.addEventListener("mouseover", function (e) {
            e.target.src = `images/${e.target.id}_2.jpg`;
        });
})