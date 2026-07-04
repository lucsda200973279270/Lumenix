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
  monedas += 4;
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
    mostrarMensaje('mensajeIdea', '✅ Correcto. El texto informa sobre la importancia de cuidar el ambiente.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeIdea', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function inferencia(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeInferencia', '✅ Correcto. La calidad de vida se deterioraría.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeInferencia', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function tipoTexto(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeTexto', '✅ Correcto. Es una noticia.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeTexto', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function sinonimo(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeSinonimo', '✅ Correcto. Proteger es cuidar.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeSinonimo', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function antonimo(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeAntonimo', '✅ Correcto. Perjuicio es el antónimo.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeAntonimo', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function conector(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeConector', '✅ Correcto. Se usa “sin embargo”.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeConector', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function analogia(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeAnalogia', '✅ Correcto. Farmacia es la relación adecuada.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeAnalogia', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function ortografia(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeOrtografia', '✅ Correcto. La palabra correcta es “Excepción”.', 'correcto');
    progreso = Math.min(100, progreso + 7);
    monedas += 4;
  } else {
    mostrarMensaje('mensajeOrtografia', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function completar() {
  const respuesta = document.getElementById('palabra').value.trim().toLowerCase();
  if (respuesta === 'hicieron') {
    mostrarMensaje('mensajeCompletar', '✅ Correcto. La forma correcta es “hicieron”.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeCompletar', '❌ Revisa la conjugación.', 'error');
  }
  actualizarEstado();
}

function figura(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeFigura', '✅ Correcto. Es personificación.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeFigura', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function redaccion() {
  const texto = document.getElementById('texto').value.trim();
  if (texto.length >= 20) {
    mostrarMensaje('mensajeRedaccion', '✅ Muy bien. Tu texto está completo.', 'correcto');
    progreso = Math.min(100, progreso + 10);
    monedas += 7;
  } else {
    mostrarMensaje('mensajeRedaccion', '✍ Escribe un poco más.', 'error');
  }
  actualizarEstado();
}

function juego(opcion) {
  if (opcion === 1) {
    mostrarMensaje('mensajeJuego', '✅ Correcto. “Cuidadosamente” es un adverbio de modo.', 'correcto');
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mostrarMensaje('mensajeJuego', '❌ Intenta otra vez.', 'error');
  }
  actualizarEstado();
}

function memoria() {
  const palabras = ['RESPONSABILIDAD', 'ANÁLISIS', 'PERSISTENCIA', 'CURIOSIDAD'];
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
    mostrarMensaje('mensajeTienda', '😅 No tienes suficientes monedas.', 'error');
  }
  actualizarEstado();
}

function certificado() {
  mostrarMensaje('mensajeCertificado', '🎉 ¡Felicidades! Ya puedes obtener tu certificado de preparación para secundaria.', 'correcto');
  progreso = 100;
  monedas += 25;
  actualizarEstado();
}

window.addEventListener('load', actualizarEstado);
document.addEventListener('DOMContentLoaded', actualizarEstado);
