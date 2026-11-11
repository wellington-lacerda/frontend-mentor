const nav = document.querySelector(".guest-navegation")
const menu = document.querySelector(".menu")
const icon = document.querySelector(".menu img")

const src = [
  "assets/images/icon-menu.svg", 
  "assets/images/icon-close.svg"
]
menu.addEventListener("click", () => {
  nav.classList.toggle("menu-on")
  if (nav.classList.contains("menu-on")) {
    icon.src = src[1]
    return
  }
  icon.src = src[0] 
})
