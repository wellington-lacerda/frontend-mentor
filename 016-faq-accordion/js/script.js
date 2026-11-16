const icon = document.querySelectorAll(".box img")
const p = document.querySelectorAll("p")

icon.forEach((e,i) => {
    e.addEventListener("click", () => {
        p[i].classList.toggle("on")
        if (e.src.includes("plus")) {
            e.src = "images/icon-minus.svg"
        }else {
            e.src = "images/icon-plus.svg"
        }
    })
})