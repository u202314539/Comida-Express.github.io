//Lista global
let valoraciones = [];

document.getElementById("frmValor").addEventListener("submit", function (e) {
  e.preventDefault();
  //Obtener Datos
  const nombre = document.getElementById("name").value.trim();
  const nomreceta = document.getElementById("nomreceta").value.trim();
  const valorStr = document.getElementById("valor").value;
  const valor = Number(valorStr);

  //Validacion
  if (
    nombre === "" ||
    nomreceta === "" ||
    valorStr === "" ||
    isNaN(valor) ||
    valor < 0 ||
    valor > 5
  ) {
    alert("Por favor, completar todos los datos correctamente");
    return;
  }

  //Agregar valoración
  const nueva = { nombre, nomreceta, valor };
  valoraciones.push(nueva);

  //Orden descendente
  valoraciones.sort((a, b) => b.valor - a - valor);

  //Mostrar resultado
  mostrarLista();

  //Limpiar formulario
  this.reset();
});

//Mostrar lista ordenada con barra
function mostrarLista() {
  const lista = document.getElementById("listaValoraciones");
  lista.innerHTML = "";

  valoraciones.forEach((est) => {
    const li = document.createElement("li");
    li.className = "barra";

    const barra = document.createElement("div");
    barra.className = "valor";
    barra.style.width = `${est.valor}`;

    const texto = document.createElement("span");
    texto.textContent = `${est.nombre} ${est.nomreceta} – Valor: ${est.valor}`;

    li.appendChild(barra);
    li.appendChild(texto);
    lista.appendChild(li);
  });
}
