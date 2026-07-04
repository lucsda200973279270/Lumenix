let progreso = 0;
let monedas = 0;

function actualizarEstado() {
  const barra = document.getElementById('barra');
  const monedasTexto = document.getElementById('monedas');

  if (barra) {
    barra.style.width = progreso + '%';
  }

  if (monedasTexto) {
    monedasTexto.textContent = monedas;
  }
}

function accionBoton(mensaje) {
  alert(mensaje);
  progreso = Math.min(100, progreso + 8);
  monedas += 3;
  actualizarEstado();
}

function mostrarLeccion() {
  accionBoton('📚 ¡Vamos a aprender con alegría!');
}

window.addEventListener('load', actualizarEstado);
document.addEventListener('DOMContentLoaded', actualizarEstado);