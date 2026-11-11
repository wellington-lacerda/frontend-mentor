const share = document.querySelectorAll(".icon img")
const box_share = document.querySelectorAll(".icon")
const containerFluid = document.querySelector(".container-none")
box_share[1].style.background = "var(--Desaturated-Dark-Blue)"
share.forEach((e,ind) => {
    e.addEventListener("click", () => {
        if (containerFluid.className === "container-none") {
            containerFluid.classList.add("container-fluid")
            containerFluid.classList.remove("container-none")
            share[0].src = "images/icon-share2.svg"
            box_share[0].style.background = "var(--Desaturated-Dark-Blue)"
        }else {
            containerFluid.classList.remove("container-fluid")
            containerFluid.classList.add("container-none")
            share[0].src = "images/icon-share.svg"
            box_share[0].style.background = "var(--Light-Grayish-Blue)"
        }
    })
})