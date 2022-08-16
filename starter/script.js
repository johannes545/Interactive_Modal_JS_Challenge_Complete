'use strict';

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

for(let i = 0; i<btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", function(){
        openModal()
    })
}

btnClosedModal.addEventListener("click", function(){
    closeModal()
})

overlay.addEventListener("click", function(){
    closeModal()
})

document.addEventListener("keydown", function(e){
    if(e.key === "Escape") {
        if(!modal.classList.contains("hidden"))
        closeModal()
    }
})