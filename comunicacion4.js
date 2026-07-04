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

function ideaPrincipal(opcion) {
  const mensaje = document.getElementById('mensajeIdea');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, la idea principal es que los delfines son inteligentes y viven en grupo.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function texto(opcion) {
  const mensaje = document.getElementById('mensajeTexto');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, es una noticia.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function carta(opcion) {
  const mensaje = document.getElementById('mensajeCarta');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, la despedida aparece al final.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function sujeto(opcion) {
  const mensaje = document.getElementById('mensajeSujeto');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, el sujeto es Los niños.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function predicado(opcion) {
  const mensaje = document.getElementById('mensajePredicado');
  if (opcion === 2) {
    mensaje.textContent = '✅ Correcto, el predicado es Cocina delicioso.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function sinonimo(opcion) {
  const mensaje = document.getElementById('mensajeSinonimo');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, contento es sinónimo de feliz.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function antonimo(opcion) {
  const mensaje = document.getElementById('mensajeAntonimo');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, lento es antónimo de rápido.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function prefijo(opcion) {
  const mensaje = document.getElementById('mensajePrefijo');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, deshacer tiene prefijo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function sufijo(opcion) {
  const mensaje = document.getElementById('mensajeSufijo');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, panadero tiene sufijo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function puntuacion(opcion) {
  const mensaje = document.getElementById('mensajePuntuacion');
  if (opcion === 1) {
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
  if (respuesta === 'fuimos al parque ayer' || respuesta === 'fuimos al parque ayer.') {
    mensaje.textContent = '✅ Correcto, la oración quedó bien ordenada.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Revisa el orden de las palabras.';
  }
  actualizarEstado();
}

function redaccion() {
  const texto = document.getElementById('redaccion').value.trim();
  const mensaje = document.getElementById('mensajeRedaccion');
  if (texto.length >= 4) {
    mensaje.textContent = '✅ Muy bien, escribiste una oración.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Escribe una oración un poco más larga.';
  }
  actualizarEstado();
}

function juego(opcion) {
  const mensaje = document.getElementById('mensajeJuego');
  if (opcion === 1) {
    mensaje.textContent = '✅ Correcto, hermoso es un adjetivo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
  }
  actualizarEstado();
}

function memoria() {
  const palabras = ['RESPONSABILIDAD', 'AMISTAD', 'CREATIVIDAD', 'PACIENCIA'];
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
  document.getElementById('mensajeCertificado').textContent = '🎉 ¡Felicidades! Ya puedes obtener tu certificado de Comunicación 4°.';
  progreso = 100;
  monedas += 20;
  actualizarEstado();
}

window.addEventListener('load', actualizarEstado);
document.addEventListener('DOMContentLoaded', actualizarEstado);
