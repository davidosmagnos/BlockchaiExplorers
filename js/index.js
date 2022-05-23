//initialization
var stat = {
    accepted:{
        status:"Accepted",
        color:"#2ECC71"
    },
    pending:{
        status:"Pending",
        color:"#EBB840"
    },
    progress:{
        status:"In Progress",
        color:"#FF914D"
    },
    rejected:{
        status:"Rejected",
        color:"#F44336"
    }
}
var bgColors = document.getElementsByClassName("status-box");
var statText = document.getElementsByClassName("status");
var menuColors = document.getElementsByClassName("down");
var index;
var changeStatButton = document.getElementsByClassName("dropdown");
var popup = document.getElementsByClassName("popup");
var circle = document.getElementsByClassName("circle");
//end of initialization


//closes popup window
document.getElementById("close").addEventListener("click",()=>{
    popup[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = "1"
});
//opens popup window
for(let i=0;i<changeStatButton.length;i++){
    changeStatButton[i].addEventListener("click",()=>{
        index = i; //records index of selected transaction
        popup[0].style.display = "block";
        document.getElementsByClassName("container")[0].style.opacity = "0.7"
    });
}

//initial load of cards -- sample purpose only
function loadCards(){
    bgColors[0].style.backgroundColor = stat.accepted.color;
    bgColors[1].style.backgroundColor = stat.pending.color;
    bgColors[2].style.backgroundColor = stat.pending.color;
    bgColors[3].style.backgroundColor = stat.rejected.color;
    bgColors[4].style.backgroundColor = stat.accepted.color;

    menuColors[0].style.fill = stat.accepted.color;
    menuColors[1].style.fill = stat.pending.color;
    menuColors[2].style.fill = stat.pending.color;
    menuColors[3].style.fill = stat.rejected.color;
    menuColors[4].style.fill = stat.accepted.color;

    statText[0].textContent = stat.accepted.status;
    statText[1].textContent = stat.pending.status;
    statText[2].textContent = stat.pending.status;
    statText[3].textContent = stat.rejected.status;
    statText[4].textContent = stat.accepted.status;

    circle[0].style.backgroundImage = "url('../images/accept.png')";
    circle[1].style.backgroundImage = "url('../images/pending.png')";
    circle[2].style.backgroundImage = "url('../images/pending.png')";
    circle[3].style.backgroundImage = "url('../images/reject.png')";
    circle[4].style.backgroundImage = "url('../images/accept.png')";
}
loadCards();//function invocation

//responsible for changing states
document.getElementById("accept").addEventListener('click',()=>{
    bgColors[index].style.backgroundColor = stat.accepted.color;
    menuColors[index].style.fill = stat.accepted.color;
    statText[index].textContent = stat.accepted.status;
    circle[index].style.backgroundImage = "url('../images/accept.png')";

    popup[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = "1"

});

document.getElementById("pend").addEventListener('click',()=>{
    bgColors[index].style.backgroundColor = stat.pending.color;
    menuColors[index].style.fill = stat.pending.color;
    statText[index].textContent = stat.pending.status;
    circle[index].style.backgroundImage = "url('../images/pending.png')";

    popup[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = "1"

});

document.getElementById("reject").addEventListener('click',()=>{
    bgColors[index].style.backgroundColor = stat.rejected.color;
    menuColors[index].style.fill = stat.rejected.color;
    statText[index].textContent = stat.rejected.status;
    circle[index].style.backgroundImage = "url('../images/reject.png')";

    popup[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = "1"

});
//hover over nav items
var items = document.getElementsByClassName("item")
var icons = document.getElementsByClassName("icons")

for(let i=0;i<items.length;i++){
    items[i].addEventListener("mouseover",()=>{
        items[i].style.backgroundColor = "white";
        items[i].style.color = "#6ECDCA"

        if(i==0 || i==1){
            icons[i].style.fill = "#6ECDCA";
        }
    });
    items[i].addEventListener("mouseout",()=>{
        items[i].style.backgroundColor = "transparent";
        items[i].style.color = "white"
        if(i==0 || i==1){
            icons[i].style.fill = "white";
        }
    });
}

//close and opens nav bar
var nav = document.getElementsByClassName("nav")[0];
var close1 = document.getElementById("close1");
isNavOpen = false;

close1.addEventListener("click",()=>{
    if(isNavOpen){
        nav.style.width = "0"
        nav.style.boxShadow = "none"
        isNavOpen = false;
    }
    else{
        nav.style.width = "15vw"
        nav.style.boxShadow = "1.3px 2px 10px 10px rgba(0,0,0,.4)";
        isNavOpen = true;
    }
});



document.getElementById("burger").addEventListener('click',()=>{
    nav.style.width = "15vw"
    nav.style.boxShadow = "1.3px 2px 10px 10px rgba(0,0,0,.4)";
    isNavOpen = true;
});






