//Validacion de Formulario
const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  const fnreceta = form.elements["nombrereceta"].value;
  const fningredientes = form.elements["ingredientes"].value;
  const fnpreparacion = form.elements["preparacion"].value;
  const fnusuario = form.elements["usuario"].value;
  const fncorreo = form.elements["correo"].value;

  if (
    !fnreceta ||
    !fningredientes ||
    !fnpreparacion ||
    !fnusuario ||
    !fncorreo
  ) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateCorreo(fncorreo)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else {
    const confirmation = confirm(
      "Esta a punto de enviar el formulario, ¿Desea Continuar?"
    );
    if (!confirmation) {
      event.preventDefault();
    }
  }
});

//CREAR FUNCION validateCorreo (fcorreo)
function validateCorreo(fncorreo) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(fncorreo).toLowerCase());
}

//Evento al enviar formulario
document.getElementById("formReceta").addEventListener("submit", function (e) {
  e.preventDefault(); //Evita el envío real

  //Muestra mensaje de confirmación
  const mensaje = document.getElementById("mensajeEnviado");
  mensaje.style.display = "block";

  //Limpiar formulario
  this.reset();

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 5000);
});
