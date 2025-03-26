const padlOrel = Math.random() < 0.5;
let vysledek = document.querySelector(".vysledek")


if (padlOrel) {
  vysledek.textContent = "Padl Orel"
} else vysledek.textContent = "Padla pana"

