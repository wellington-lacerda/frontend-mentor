const form = document.querySelector("form")
const email = document.querySelector("#Iemail")
const label = document.querySelector(".error")

form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let isValid = true
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(email.value)) {
        isValid = false
    }
    if (!isValid) {
        email.classList.remove("input-normal")
        email.classList.add("input-error")
        email.placeholder = "example@email.com"
        label.classList.remove("label-desativado")
    }else {
        email.classList.add("input-normal")
        email.classList.remove("input-error")
        email.placeholder = "Your email address"
        label.classList.add("label-desativado")
    }
})