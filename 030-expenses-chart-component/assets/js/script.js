const spendTable = document.querySelector(".spend-table")

const main = async () => {
  try {
   const response = await fetch("data.json")
   const data = await response.json()
   const totSum = data.reduce((acc, value) => acc + value.amount, 0)
   data.forEach(table => {
     const box = document.createElement("div")
     const amount = document.createElement("div")
     const day = document.createElement("span")
     box.classList.add("box")
     amount.classList.add("amount")
     day.innerText = table.day 
     
     if (table.amount > 50) {
       amount.classList.add("amount-porcent")
     }
     amount.style.setProperty(
        "--porcent",
        `${table.amount}%`
     )
     amount.style.setProperty(
        "--money",
        `"$${table.amount}"`
     )
     
     spendTable.appendChild(box)
     box.append(amount, day)
   })
  }catch (err) {
    console.log("Erro:",err)
  }
}
main()