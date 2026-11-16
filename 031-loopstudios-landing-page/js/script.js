const menu = document.querySelector(".menu")
let porcent = 0
menu.addEventListener("click", () => {
 document.documentElement.style.setProperty('--porcent',`${porcent}%`);
   if (menu.src.includes("icon-hamburger")) {
       porcent = -100
       menu.src = "images/icon-close.svg"
   }else {
       porcent = 0
       menu.src = "images/icon-hamburger.svg"
   }
})