const erro = {
    required: "This field is required",
    email: "Please enter a valid email address",
    queryRadio: "Please select a query type",
    checkbox: "To submit this form, please consent to being contacted"
}
const {
    required,
    email,
    queryRadio,
    checkbox
} = erro 

const form = document.querySelector(".register")
const boxFocus = form.querySelectorAll(".box-normal")
const boxLabel = form.querySelectorAll(".box-label")

boxFocus.forEach(value => {
    const input = value.querySelector("input")
    input.addEventListener("focus", () => {
        if (!value.classList.contains("box-erro")) {
            value.classList.add("box-focus")
            value.classList.remove("box-normal")
        }
    })
    input.addEventListener("blur", () => {
        if (!value.classList.contains("box-erro")) {
            value.classList.remove("box-focus")
            value.classList.add("box-normal")
        }
    })
})
let checkRadio
const queryInput = form.querySelectorAll(".query-radio input")
const queryRadios = form.querySelectorAll(".query-box .input-box") 
const circle = form.querySelectorAll(".radio-circle")
queryInput.forEach((input,i) => {
    input.addEventListener("change", () => {
       queryRadios.forEach((radio,i) => {
           radio.classList.remove("radio-focus")
           
           circle[i].classList.remove("radio-active")
       })
       if (input.checked) {
           queryRadios[i].classList.add("radio-focus")
           circle[i].classList.add("radio-active")
           checkRadio = input.value 
       } 
    })
})

const checkSquare = form.querySelector(".check-flex .check-square")
const customCheckbox = form.querySelector(".custom-checkbox")

customCheckbox.addEventListener("input", () => {
    if (customCheckbox.checked) {
        checkSquare.classList.add("checkbox-active")
    }else {
    checkSquare.classList.remove("checkbox-active")
    }
})
const aviseErro = form.querySelectorAll(".avise-erro")
const inputs = form.querySelectorAll(".input")

const addBoxErro = value => {
    value.classList.remove("box-normal")
    value.classList.add("box-erro")
}
const removeBoxErro = value => {
    value.classList.add("box-normal")
    value.classList.remove("box-erro")
}
const textArea = form.querySelector("textarea.message")
const rollScroll = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let isActive = true
    let index = 0
    for (const items of inputs) {
        if (items.value.trim() === "") {
            aviseErro[index].innerText = required
            isActive = false
            addBoxErro(boxFocus[index])
        }else {
            removeBoxErro(boxFocus[index])
            aviseErro[index].innerText = ""
            if (items.name === "email") {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!regex.test(items.value)) {
                    addBoxErro(boxFocus[index])
                    isActive = false
                    aviseErro[index].innerText = email
                }
            }
        }
        index++
    }
    if (queryInput[0].checked || queryInput[1].checked) {
        aviseErro[index].innerText = ""
    }else {
        aviseErro[index].innerText = queryRadio
        isActive = false
    }
    
    if (textArea.value === "") {
        aviseErro[index + 1].innerText = required
        textArea.classList.add("box-erro")
        isActive = false
    }else {
        aviseErro[index + 1].innerText = ""
        textArea.classList.remove("box-erro")
    }
    
    if (customCheckbox.checked) {
        aviseErro[index + 2].innerText = ""
    }else {
        aviseErro[index + 2].innerText = checkbox
        isActive = false
    }
    
    if (!isActive) return
    else {
        // tudo ok
        rollScroll()
        const checkMsg = document.querySelector(".message-sent")
        checkMsg.classList.add("check-on")
        checkMsg.classList.remove("check-off")
        setTimeout(() => {
            checkMsg.classList.add("check-off")
            checkMsg.classList.remove("check-on")
        },3000)
    }
})