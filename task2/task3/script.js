let fetchButton = document.getElementById("fetchButton");
let jokes  = document.querySelector(".jokes");
let thumbsUpButton=document.getElementById("thumbsUpButton");
let total  = document.querySelector(".total");
let thumbsDownButton=document.getElementById("thumbsDownButton");
let sum  = 0;
fetchButton.addEventListener("click", function(){
    fetch("https://api.chucknorris.io/jokes/random").then((res)=>res.json().then((data)=>{
        console.log(data);
        let jokes  = document.querySelector(".jokes");
        jokes.textContent=data.value;
        
    }))
})
thumbsUpButton.addEventListener("click",function(){
    sum++;
    total.textContent=`total likes ${sum}`
    
})
thumbsDownButton.addEventListener("click",function(){
    sum--;
    total.textContent=`total likes ${sum}`
    
})