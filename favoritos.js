const container = document.getElementById("favCards");
const msg = document.getElementById("msg");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

if (favoritos.length === 0) {
  msg.innerText = "Você ainda não favoritou nenhum filme 😢";
} else {
  msg.innerText = "";
}

const filmes = [
  {
    nome: "Deadpool",
    img: "imagens/deadpool.jfif",
    link: "filme.html?nome=Deadpool",
    estrelas: "⭐⭐⭐⭐⭐"
  },
  {
    nome: "Vingadores",
    img: "imagens/vingadores.jfif",
    link: "filme.html?nome=Vingadores%20Ultimato",
    estrelas: "⭐⭐⭐⭐⭐"
  },
  {
    nome: "Harry Potter",
    img: "imagens/harrypotter.jpg",
    link: "filme.html?nome=Harry%20Potter",
    estrelas: "⭐⭐⭐⭐"
  },
  {
    nome: "Dexter",
    img: "imagens/dexter.jpg",
    link: "filme.html?nome=Dexter",
    estrelas: "⭐⭐⭐⭐⭐"
  },
  {
    nome: "Breaking Bad",
    img: "imagens/breakingbad.jpg",
    link: "filme.html?nome=Breaking%20Bad",
    estrelas: "⭐⭐⭐⭐⭐"
  },
  {
    nome: "Better Call Saul",
    img: "imagens/bettercallsoul.jpg",
    link: "filme.html?nome=Better%20Call%20Saul",
    estrelas: "⭐⭐⭐⭐"
  }
];

filmes.forEach(filme => {

  if (favoritos.includes(filme.nome)) {

    const card = document.createElement("div");
    card.classList.add("card-wrapper");

    card.innerHTML = `
      <a href="${filme.link}" class="card-link">
        <img src="${filme.img}">
        <h3>${filme.nome}</h3>
      </a>

      <div class="card-info">
        <p>${filme.estrelas}</p>
        <button class="favBtn">🗑️</button>
      </div>
    `;

    container.appendChild(card);

    const btn = card.querySelector(".favBtn");

    btn.addEventListener("click", () => {

      favoritos = favoritos.filter(f => f !== filme.nome);

      localStorage.setItem("favoritos", JSON.stringify(favoritos));

      card.remove();

      if (favoritos.length === 0) {
        msg.innerText = "Você ainda não favoritou nenhum filme 😢";
      }

    });

  }

});