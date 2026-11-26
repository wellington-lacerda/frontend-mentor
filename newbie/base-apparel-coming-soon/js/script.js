const email = document.querySelector("#mail")
const res = document.querySelector(".res")
const erro = document.querySelector(".icon")
const form = document.querySelector("form")
const campo = document.querySelector(".campo_email")

form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let isValid = true
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.value.length === 0 || !regexEmail.test(email.value)) {
        isValid = false
        email.value = ""
        email.placeholder = "Please provid a valid email"
    }
    if (!isValid) {
        res.innerHTML = "Fill in the data"
        erro.classList.remove("icon-error-off")
        erro.classList.add("icon-error-on")
        campo.classList.add("campo_error")
        campo.classList.remove("campo_normal")
        email.classList.remove("placeholder_normal")
        email.classList.add("placeholder_error")
    }else {
        res.innerHTML = ""
        erro.classList.add("icon-error-off")
        erro.classList.remove("icon-error-on")
        email.placeholder = "Email address"
        campo.classList.remove("campo_error")
        campo.classList.add("campo_normal")
        email.classList.add("placeholder_normal")
        email.classList.remove("placeholder_error")
    
    }
})
//foco no campo de email
email.addEventListener("focus", () => {
    campo.classList.add("campo_focus")
    campo.classList.remove("campo_normal")
})
email.addEventListener("blur", () => {
    campo.classList.remove("campo_focus")
    campo.classList.add("campo_normal")
})