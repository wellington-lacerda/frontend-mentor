const formulario = document.querySelector(".form-check")
const inputs = document.querySelectorAll(".input:not([type='submit'])")
const div = document.querySelectorAll(".div_input")
const label = document.querySelectorAll(".error")
// validar envio de dados
inputs.forEach((e,i) => {
    const img = document.createElement("img")
    img.src = "images/icon-error.svg"
    img.classList.add("icon-normal")
    img.setAttribute("alt","Icone de erro")
    div[i].appendChild(img)
})
const img = document.querySelectorAll(".icon-normal")
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault()
    inputs.forEach((e,i) => {

    let isValid = true

    // campo vazio
    if (e.value.length === 0) {
        isValid = false
    }

    // valida email
    if (i === 2) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(e.value)) {
            isValid = false
        }
    }

    if (!isValid) {
        img[i].classList.remove("icon-normal")
        img[i].classList.add("icon-error")
        label[i].classList.remove("label-normal")
        label[i].classList.add("label-error")
        div[i].classList.add("input-error")
        div[i].classList.remove("input-normal")

        if (i === 2) {
            e.value = ""
            e.placeholder = "email@example.com"
            e.classList.add("place-error")
        }
    } else {
        img[i].classList.add("icon-normal")
        img[i].classList.remove("icon-error")
        label[i].classList.add("label-normal")
        label[i].classList.remove("label-error")
        div[i].classList.remove("input-error")
        div[i].classList.add("input-normal")
        e.classList.remove("place-error")
    }
})
})
inputs.forEach((e,i) => {
    e.addEventListener("focus", () => {
        div[i].classList.add("div-focus")
        div[i].classList.remove("input-normal")
    })

    e.addEventListener("blur", () => {
        div[i].classList.remove("div-focus")
        div[i].classList.add("input-normal")
    })
})
