const menu = document.querySelector(".menu")
const nav = document.querySelector(".navbar")
const iconMenu = document.querySelector(".icon_menu")
const html = document.querySelector("html")
const back = document.querySelector(".back")

menu.addEventListener("click", () => {
    if (nav.classList.contains("nav-off")) {
        nav.classList.remove("nav-off")
        nav.classList.add("nav-on")
        iconMenu.src = "images/icon-menu-close.svg"
        html.classList.add("ligado")
        html.classList.remove("desligado")
        back.classList.add("fundo-on")
        back.classList.remove("fundo-off")
    }else {
        nav.classList.add("nav-off")
        nav.classList.remove("nav-on")
        iconMenu.src = "images/icon-menu.svg"
        html.classList.remove("ligado")
        html.classList.add("desligado")
        back.classList.remove("fundo-on")
        back.classList.add("fundo-off")
    }
})
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        back.classList.add("fundo-off")
        back.classList.remove("fundo-on")
    }else {
        if (window.innerWidth < 768 && nav.classList.contains("nav-on")) {
            back.classList.add("fundo-on")
            back.classList.remove("fundo-off")
        }
    }
})
