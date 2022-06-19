let headerButtons = document.querySelectorAll(".buttons-header");
let nav = document.querySelectorAll(".navs");
 for(let i=0;i<nav.length;i++){
    headerButtons[i].addEventListener('click',()=>{
        // if(i==0){
        //     nav[i].classList.toggle("off");
        // }
        // else if(i==1){
        //     nav[i].classList.toggle("off");
        // }
        // else if(i==1){
        //     nav[i].classList.toggle("off");
        // }
        // else if(i==1){
        //     nav[i].classList.toggle("off");
        // }
        nav[i].classList.toggle("off")
    });
 }