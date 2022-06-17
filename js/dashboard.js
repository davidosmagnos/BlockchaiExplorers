let container = document.getElementById("content-box");
let createCard = document.getElementById("create-card");

// create card
createCard.addEventListener("click",()=>{
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    container.appendChild(newCard);
});

// create card