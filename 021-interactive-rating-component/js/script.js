const form = document.querySelector("form")
const input = document.querySelectorAll("form input")
const section = document.querySelectorAll("section")
const label = document.querySelectorAll(".form-label")
const res = document.querySelector("span.res")

form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let isValid = false
    input.forEach((e,i) => {
       if (e.checked) {
           isValid = true
       }else {
           isValid = false
       }
       if (!isValid) {
       // nada acontece se n selecionar o botão
       }else {
           section[0].classList.remove("section-active")
           section[0].classList.add("section-disabled")
           section[1].classList.add("section-active")
           section[1].classList.remove("section-disabled")
           res.innerText = e.value
       }
    })
})
//label ativado
input.forEach((e,i) => {
    if (e.checked) {
        label[i].classList.remove("label-normal")
        label[i].classList.add("label-active")
    }
    e.addEventListener("change", () => {
        label.forEach(index => {
        index.classList.add("label-normal")
        index.classList.remove("label-active")
        index.classList.remove("hover-off")
        index.classList.add("hover-on")
        })
        if (e.checked) {
        label[i].classList.remove("label-normal")
        label[i].classList.add("label-active")
        label[i].classList.add("hover-off")
        label[i].classList.remove("hover-on")
        }        
    })
})
