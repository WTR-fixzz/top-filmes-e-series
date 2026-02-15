const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const darkBtn = document.getElementById("darkModeBtn");


search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️ Modo Claro";
    } else {
        darkBtn.textContent = "🌙 Modo Escuro";
    }

});


let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];


function salvarFavoritos() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}


cards.forEach((card, index) => {

    const titulo = card.querySelector("h3").textContent;

    const favBtn = document.createElement("button");
    favBtn.classList.add("favBtn");

    if (favoritos.includes(titulo)) {
        favBtn.textContent = "❤️";
    }else {
        favBtn.textContent = "🤍";
}


favBtn.addEventListener("click", () => {

    if (favoritos.includes(titulo)) {
        favoritos = favoritos.filter(f => f !== titulo);
        favBtn.textContent = "🤍";
    } else {
        favoritos.push(titulo);
        favBtn.textContent = "❤️";
    }


    salvarFavoritos();


});


card.appendChild(favBtn);


});