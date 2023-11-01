var ibox=document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

 
function openModal(){
    console.log("modal is open");
    ibox.classList.add("active");
    overlay.classList.add("overlayactive");
}


function closemodal(){
    ibox.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

