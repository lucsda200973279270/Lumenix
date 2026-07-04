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

function sumarProgreso(cantidad = 6, monedasGanadas = 4) {
  progreso = Math.min(100, progreso + cantidad);
  monedas += monedasGanadas;
  actualizarEstado();
}

function mostrarLeccion() {
  alert('📚 ¡Comencemos la lección de Matemática 5°!');
  sumarProgreso(10, 8);
}

function correcto(id, texto) {
  const mensaje = document.getElementById(id);
  if (mensaje) {
    mensaje.textContent = texto;
  }
  sumarProgreso();
}

function incorrecto(id) {
  const mensaje = document.getElementById(id);
  if (mensaje) {
    mensaje.textContent = '❌ Respuesta incorrecta.';
  }
}

function suma1() {
  const r = Number(document.getElementById('suma1').value);
  if (r === 44200) {
    correcto('mensajeSuma1', '🎉 ¡Muy bien!');
  } else {
    incorrecto('mensajeSuma1');
  }
}

function resta1() {
  const r = Number(document.getElementById('resta1').value);
  if (r === 65325) {
    correcto('mensajeResta1', '🎉 Correcto.');
  } else {
    incorrecto('mensajeResta1');
  }
}

function fraccion(op) {
  if (op === 1) {
    correcto('mensajeFraccion', '🍕 Correcto.');
  } else {
    incorrecto('mensajeFraccion');
  }
}

document.addEventListener('DOMContentLoaded', actualizarEstado);
window.addEventListener('load', actualizarEstado);