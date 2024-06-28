let unhide = document.querySelector(".btn1")
let hide  = document.querySelector(".btn2");
let rect  =  document.querySelector(".rect")
unhide.addEventListener("click", function(){
    rect.classList.add("open");
})
hide.addEventListener("click",function(){
    rect.classList.remove("open");
})