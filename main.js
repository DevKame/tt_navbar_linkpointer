"use strict";

const pointer = document.querySelector(".pointer");
const links = document.querySelectorAll("a");
firstAdjustment();

links.forEach(link => {
    link.addEventListener("click", adjustPointer);
});

function adjustPointer(e) {
    const link = e.currentTarget;
    const data = link.getBoundingClientRect();
    pointer.style.width = (data.width + 8) + "px";
    pointer.style.left = (link.offsetLeft - 4) + "px";
    resetLinkColors();
    adjustLinkColor(link);
}
function firstAdjustment() {
    const data = links[0].getBoundingClientRect();
    pointer.style.width = (data.width + 8) + "px";
    pointer.style.left = (links[0].offsetLeft - 4) + "px";
    links[0].classList.add("active");
}
function adjustLinkColor(link) {
    resetLinkColors();
    link.classList.add("active");
} 
function resetLinkColors() {
    links.forEach(link => { link.classList.remove("active"); });
}