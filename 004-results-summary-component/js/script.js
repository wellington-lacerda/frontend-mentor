const container = document.querySelector(".cards")

async function loadingCard(){
  try{
    const response = await fetch("data.json")
    if (!response.ok){
      throw new Error("Erro ao carregar dados")
    }
    const data = await response.json()
    const cards = data.map(({category,score,icon}) => {
      return `
        <div class="card-block">
          <div class="card-category">
            <img src="${icon}" alt="${category}">
            <span>${category}</span>
          </div>
          <div class="card-numbers">
            <span class="card-score">${score}</span>
            <span class="card-tot">/ 100</span>
          </div>
        </div>
      `
    })
    
    container.innerHTML = cards.join("")
  container.querySelectorAll(".card-block").forEach((card, index) => {
      card.style.setProperty("--card-background", data[index].backgroundColor)
      card.style.setProperty("--card-color", data[index].color)
    })
  } catch(err) {
    container.innerHTML = `
      <span class="catch-error">${err.message}</span>
    `
  }
}
await loadingCard()