// Selecciona el botón hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-hori");

//Al hacer click en el botón de hamburguesa
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
