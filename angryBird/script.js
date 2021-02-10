const btn=document.querySelector(".btn")
const rightIcon=document.getElementById("right-icon")

btn.addEventListener("mouseover", function(){

    console.log("hello")
    rightIcon.classList.add("hide");

})