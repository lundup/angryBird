const btn=document.querySelector(".btn")
const rightIcon=document.getElementById("span-icon")

btn.addEventListener("mouseover", function(){

    console.log("hello")
    rightIcon.classList.add("hide");

})
btn.addEventListener("mouseout", function(){
console.log("im mouse out")
    console.log("hello")
    rightIcon.classList.remove("hide");

})