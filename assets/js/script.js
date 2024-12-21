let cantidad = 1;
const precio = 400000;

const cantidadElement = document.querySelector("#cantidad");
const totalElement = document.querySelector("#total");
const botonSumar = document.querySelector("#sumar");
const botonRestar = document.querySelector("#restar");

function actualizarResultados() {
  const total = cantidad * precio;
  cantidadElement.innerHTML = `Unidades: ${cantidad}`;
  totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
}

botonSumar.addEventListener("click", () => {
  cantidad++;
  actualizarResultados();
});

botonRestar.addEventListener("click", () => {
  if (cantidad > 1) {
    cantidad--;
    actualizarResultados();
  } else {
    alert("La compra mínima es de 1 unidad.");
  }
});

actualizarResultados();
