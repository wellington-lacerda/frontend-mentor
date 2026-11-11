const menu = document.querySelector(".menu")
const nav = document.querySelector("nav")

menu.addEventListener("click", () => {
  if (nav.classList.contains("nav-off")) {
    nav.classList.remove("nav-off")
    nav.classList.add("nav-on")
  }else {
    nav.classList.remove("nav-on")
    nav.classList.add("nav-off")
  }
})