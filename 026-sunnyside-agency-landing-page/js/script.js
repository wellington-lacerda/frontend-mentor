const btnMenu = document.querySelector("header .btn-menu")
const navbar = document.querySelector(".navbar")

btnMenu.addEventListener("click", () => {
    if (navbar.classList.contains("navbar-off")) {
        navbar.classList.add("navbar-on")
        navbar.classList.remove("navbar-off")
    }else {
        navbar.classList.remove("navbar-on")
        navbar.classList.add("navbar-off")
    }
})
// parte do hover
const linkImg = document.querySelectorAll("footer .icon-social")

const icon = [
     "images/icon-facebook.svg",
     "images/icon-instagram.svg",
     "images/icon-twitter.svg",
     "images/icon-pinterest.svg"
]
const iconHover = [
     "images/icon-facebook-hover.svg",
     "images/icon-instagram-hover.svg",
     "images/icon-twitter-hover.svg",
     "images/icon-pinterest-hover.svg"
]
linkImg.forEach((i,c) => {
    i.addEventListener("mouseenter", () => {
        i.src = iconHover[c]
    })
    i.addEventListener("mouseleave", () => {
        i.src = icon[c]
    })
})