const form = document.querySelector("form")
const labelError = form.querySelector(".box-input label")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let isValid = true
    
    const formData = new FormData(form)
    for (let [key, value] of formData) {
        if (value.trim() === "") {
            isValid = false
            console.log("caixa vazia")
            labelError.classList.add("error")
        }else {
            labelError.classList.remove("error")
            if (key === "email") {
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!regexEmail.test(value)) {
                  labelError.classList.add("error")
                    console.log("email ivalido")
                    isValid = false   
                }else {
                   labelError.classList.remove("error")
           
                }
            }
        }
    }
    if (!isValid) return
    else {
        console.log("tudo ok")
        form.reset()
    }
})