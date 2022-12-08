var img=document.querySelectorAll("img");
img.forEach((e)=>{
    e.addEventListener("mouseover", function (e) {
            e.target.src = `images/${e.target.id}_2.jpg`;
        });
})
var img=document.querySelectorAll("img");
img.forEach((e)=>{
    e.addEventListener("mouseout", function (e) {
            e.target.src = `images/${e.target.id}.jpg`;
        });
})