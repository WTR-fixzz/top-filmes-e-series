const body = document.body;
const darkBtn = document.getElementById("darkModeBtn");

function atualizarTexto() {
  if (darkBtn) {
    if (body.classList.contains("dark")) {
      darkBtn.innerText = "☀️ Modo Claro";
    } else {
      darkBtn.innerText = "🌙 Modo Escuro";
    }
  }
}

if (localStorage.getItem("darkMode") === "on") {
  body.classList.add("dark");
}

atualizarTexto();

if (darkBtn) {
  darkBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "on");
    } else {
      localStorage.setItem("darkMode", "off");
    }

    atualizarTexto();
  });
}