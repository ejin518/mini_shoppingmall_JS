'use strict';
const clothesList = document.querySelector('.listJS'),
    clickBtn = document.querySelector('button'),
    clickBtnT = document.querySelector('#btnT'),
    clickBtnP = document.querySelector('#btnP'),
    clickBtnS = document.querySelector('#btnS'),
    img = document.createElement("img"),
    li = document.createElement("li"),
    span = document.createElement("span");


function addT() {
    img.src = "imgs/blue_p.png";
    span.classList.add("itemAdd");
    span.classList.remove("itemRemove");
    span.innerText = "male, large";
    
}
function addP() {
    img.src = "imgs/blue_p.png";
    span.classList.add("itemAdd");
    span.classList.remove("itemRemove");
    span.innerText = "male, small";
}
function addS() {
    img.src = "imgs/blue_s.png";
    span.classList.add("itemAdd");
    span.classList.remove("itemRemove");
    span.innerText = "female, small";
}

function makeList() {
    clothesList.appendChild(li);
    li.appendChild(img);
    li.appendChild(span);
    clickBtnT.addEventListener("click", addT);
    clickBtnP.addEventListener("click", addP);
    clickBtnS.addEventListener("click", addS);
}

function init() {
    makeList();
}

init();
