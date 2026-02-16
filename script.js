const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card-wrapper");

searchInput.addEventListener("input", () => {

  const texto = searchInput.value.toLowerCase();

  cards.forEach(card => {

    const nome = card.querySelector("h3").innerText.toLowerCase();

    if (nome.includes(texto)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }

  });

});

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

document.querySelectorAll(".favBtn").forEach(btn => {

  const card = btn.closest(".card-wrapper");
  const nome = card.querySelector("h3").innerText;

  if (favoritos.includes(nome)) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0.4";
  }

  btn.addEventListener("click", (e) => {

    e.preventDefault();
    e.stopPropagation();

    if (favoritos.includes(nome)) {

      favoritos = favoritos.filter(item => item !== nome);
      btn.style.opacity = "0.4";

    } else {

      favoritos.push(nome);
      btn.style.opacity = "1";

    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

  });

});