"use strict";

const elModalBtn = document.querySelector(".modal-open");
const elModalBtnClose = document.querySelector(".modal-close");
const elModal = document.querySelector(".modal");
const elMenu = document.querySelector(" .link ");
const elMenu_X = document.querySelector(" .link_m ");
const elUl = document.querySelector(".wrapper__menu");
const elContent = document.querySelector(".content");
const elX = document.querySelector(".link_m");
const elHamMenu = document.querySelector(".fa-bars");
const elOverlay=document.querySelector(".overlay");

elModalBtn.addEventListener("click", () => {
  elModal.classList.add("open");
});

elModalBtnClose.addEventListener("click", () => {
  elModal.classList.remove("open");
});


// elOverlay.addEventListener("click",()=>{
//   elModal.classList.remove("open")
//   console.log("123");
// })


elMenu.addEventListener("click", () => {
  elMenu.classList.add("menuuu");
  elContent.classList.add("cn");
  elUl.classList.add("show");
  elX.classList.add("link_x");
  elMenu.style.display = "none";
});

// elMenu.addEventListener("click",()=>{
//   elMenu.classList.remove("menuuu");
//   elContent.classList.remove("cn");
//   elUl.classList.remove("show");
//   elX.classList.remove("xmar")
//   elHamMenu.classList.remove("xmu")
// })

elMenu_X.addEventListener("click", () => {
  elMenu.classList.remove("menuuu");
  elContent.classList.remove("cn");
  elUl.classList.remove("show");
  elX.classList.remove("link_x");
  elMenu.style.display = "block";
});
