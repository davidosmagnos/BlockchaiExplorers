let results = document.getElementById("search-results");
let triggers = document.querySelectorAll(".search-comp");

triggers.forEach((e)=>{
    e.addEventListener("click",()=>{
        results.classList.toggle("hidden-results");
    });
});

window.addEventListener("click",e=>{
    if(e.target!=triggers[0]){
        results.classList.add("hidden-results");
    }
    
});
