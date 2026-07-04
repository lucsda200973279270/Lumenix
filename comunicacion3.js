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

function mostrarLeccion() {
  alert('📚 ¡Vamos a aprender con alegría!');
  progreso = Math.min(100, progreso + 8);
  monedas += 3;
  actualizarEstado();
}

function lectura(respuesta) {
  const mensaje = document.getElementById('mensajeLectura');
  if (respuesta === 'Regó la planta') {
    mensaje.textContent = '✅ Correcto, María regó la planta.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function sujeto(opcion) {
  const mensaje = document.getElementById('mensajeSujeto');
  if (opcion === 'El perro') {
    mensaje.textContent = '✅ Correcto, el sujeto es El perro.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function predicado(opcion) {
  const mensaje = document.getElementById('mensajePredicado');
  if (opcion === 'canta bonito') {
    mensaje.textContent = '✅ Correcto, el predicado es canta bonito.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function sinonimo(opcion) {
  const mensaje = document.getElementById('mensajeSinonimo');
  if (opcion === 'Veloz') {
    mensaje.textContent = '✅ Correcto, veloz es sinónimo de rápido.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function antonimo(opcion) {
  const mensaje = document.getElementById('mensajeAntonimo');
  if (opcion === 'Bajo') {
    mensaje.textContent = '✅ Correcto, bajo es antónimo de alto.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function sustantivo(opcion) {
  const mensaje = document.getElementById('mensajeSustantivo');
  if (opcion === 'Casa') {
    mensaje.textContent = '✅ Correcto, casa es un sustantivo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function verbo(opcion) {
  const mensaje = document.getElementById('mensajeVerbo');
  if (opcion === 'Escribe') {
    mensaje.textContent = '✅ Correcto, escribe es un verbo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function puntuacion(opcion) {
  const mensaje = document.getElementById('mensajePuntuacion');
  if (opcion === '!') {
    mensaje.textContent = '✅ Correcto, se usa el signo de exclamación.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function ordenarOracion() {
  const respuesta = document.getElementById('ordenar').value.trim().toLowerCase();
  const mensaje = document.getElementById('mensajeOrdenar');
  if (respuesta === 'yo voy a la escuela' || respuesta === 'yo voy a la escuela.') {
    mensaje.textContent = '✅ Correcto, la oración quedó bien ordenada.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Revisa el orden de las palabras.';
  }
  actualizarEstado();
}

function juego(opcion) {
  const mensaje = document.getElementById('mensajeJuego');
  if (opcion === 'Hermoso') {
    mensaje.textContent = '✅ Correcto, hermoso es un adjetivo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function memoria() {
  const palabras = ['BIBLIOTECA', 'COLEGIO', 'LUNA', 'SOL'];
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  document.getElementById('palabraMemoria').textContent = palabra;
  document.getElementById('mensajeMemoria').textContent = '🧠 Mira la palabra y memorízala.';
  progreso = Math.min(100, progreso + 5);
  monedas += 3;
  actualizarEstado();
}

function comprar(item, costo) {
  const mensaje = document.getElementById('mensajeTienda');
  if (monedas >= costo) {
    monedas -= costo;
    mensaje.textContent = `✅ Has comprado ${item}.`;
  } else {
    mensaje.textContent = '😅 No tienes suficientes monedas.';
  }
  actualizarEstado();
}

function certificado() {
  document.getElementById('mensajeCertificado').textContent = '🎉 ¡Felicidades! Ya puedes obtener tu certificado de Comunicación 3°.';
  progreso = 100;
  monedas += 20;
  actualizarEstado();
}

window.addEventListener('load', actualizarEstado);
document.addEventListener('DOMContentLoaded', actualizarEstado);
