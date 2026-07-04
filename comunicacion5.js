let progreso = 0;
let monedas = 0;

function actualizarEstado() {
  const barra = document.getElementById('barra');
  const monedasTexto = document.getElementById('monedas');

  if (barra) barra.style.width = progreso + '%';
  if (monedasTexto) monedasTexto.textContent = monedas;
}

function mostrarLeccion() {
  progreso = Math.min(100, progreso + 8);
  monedas += 3;
  actualizarEstado();
}

function mostrarMensaje(id, texto, tipo) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.textContent = texto;
    elemento.className = tipo;
  }
}

function ideaPrincipal(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeIdea', '✅ Correcto. Los bosques son importantes para la vida.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeIdea', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function inferencia(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeInferencia', '✅ Correcto. Debemos cuidarlos porque benefician al planeta.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeInferencia', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function tipoTexto(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeTexto', '✅ Correcto. Es una noticia.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeTexto', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function conector(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeConector', '✅ Correcto. Se usa “por eso”.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeConector', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function analogia(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeAnalogia', '✅ Correcto. Gatito es la respuesta.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeAnalogia', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function ortografia(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeOrtografia', '✅ Correcto. La forma correcta es “Hervir”.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeOrtografia', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function completar() {
  const respuesta = document.getElementById('palabra').value.trim().toLowerCase();
  if (respuesta === 'fuimos') {
    mostrarMensaje('mensajeCompletar', '✅ Correcto. La palabra es “fuimos”.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeCompletar', '❌ Revisa la ortografía.', 'incorrecto');
  }
  actualizarEstado();
}

function redaccion() {
  const texto = document.getElementById('texto').value.trim();
  if (texto.length >= 10) {
    mostrarMensaje('mensajeRedaccion', '✅ Muy bien. Tu texto está listo.', 'correcto');
    progreso = Math.min(100, progreso + 10);
    monedas += 7;
  } else {
    mostrarMensaje('mensajeRedaccion', '✍ Escribe un poco más.', 'incorrecto');
  }
  actualizarEstado();
}

function juego(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeJuego', '✅ Correcto. “Rápidamente” es un adverbio.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeJuego', '❌ Intenta otra vez.', 'incorrecto');
  }
  actualizarEstado();
}

function memoria() {
  const palabras = ['RESPONSABILIDAD', 'CUIDADO', 'IMAGINACIÓN', 'PACIENCIA'];
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  document.getElementById('palabraMemoria').textContent = palabra;
  mostrarMensaje('mensajeMemoria', '🧠 Mira la palabra y memorízala.', 'correcto');
  progreso = Math.min(100, progreso + 6);
  monedas += 4;
  actualizarEstado();
}

function comprar(item, costo) {
  if (monedas >= costo) {
    monedas -= costo;
    mostrarMensaje('mensajeTienda', '✅ Has comprado ' + item + '.', 'correcto');
  } else {
    mostrarMensaje('mensajeTienda', '😅 No tienes suficientes monedas.', 'incorrecto');
  }
  actualizarEstado();
}

function certificado() {
  mostrarMensaje('mensajeCertificado', '🎉 ¡Felicidades! Ya puedes obtener tu certificado de Comunicación 5°.', 'correcto');
  progreso = 100;
  monedas += 20;
  actualizarEstado();
}

window.addEventListener('load', actualizarEstado);
document.addEventListener('DOMContentLoaded', actualizarEstado);
