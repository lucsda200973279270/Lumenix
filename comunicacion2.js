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

function cuento(respuesta) {
  const mensaje = document.getElementById('mensajeCuento');
  if (respuesta === 'Luna') {
    mensaje.textContent = '✅ Correcto, la mascota se llamaba Luna.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Intenta otra vez.';
    progreso = Math.min(100, progreso + 2);
  }
  actualizarEstado();
}

function oracion1() {
  const respuesta = document.getElementById('oracion1').value.trim().toLowerCase();
  const mensaje = document.getElementById('mensajeOracion1');
  if (respuesta === 'ana come pan' || respuesta === 'ana come pan.') {
    mensaje.textContent = '✅ Muy bien, formaste la oración correctamente.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Revisa el orden de las palabras.';
    progreso = Math.min(100, progreso + 2);
  }
  actualizarEstado();
}

function oracion2() {
  const respuesta = document.getElementById('oracion2').value.trim().toLowerCase();
  const mensaje = document.getElementById('mensajeOracion2');
  if (respuesta === 'baila' || respuesta === 'corre' || respuesta === 'duerme') {
    mensaje.textContent = '✅ Excelente, completaste la oración.';
    progreso = Math.min(100, progreso + 8);
    monedas += 5;
  } else {
    mensaje.textContent = '😅 Prueba con un verbo.';
    progreso = Math.min(100, progreso + 2);
  }
  actualizarEstado();
}

function sustantivo(opcion) {
  const mensaje = document.getElementById('mensajeSustantivo');
  if (opcion === 'Mesa') {
    mensaje.textContent = '✅ Correcto, mesa es un sustantivo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra opción.';
  }
  actualizarEstado();
}

function verbo(opcion) {
  const mensaje = document.getElementById('mensajeVerbo');
  if (opcion === 'Corre') {
    mensaje.textContent = '✅ Correcto, corre es un verbo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra opción.';
  }
  actualizarEstado();
}

function adjetivo(opcion) {
  const mensaje = document.getElementById('mensajeAdjetivo');
  if (opcion === 'Grande') {
    mensaje.textContent = '✅ Correcto, grande describe al perro.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra opción.';
  }
  actualizarEstado();
}

function sinonimo(opcion) {
  const mensaje = document.getElementById('mensajeSinonimo');
  if (opcion === 'Contento') {
    mensaje.textContent = '✅ Correcto, contento es sinónimo de feliz.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra opción.';
  }
  actualizarEstado();
}

function antonimo(opcion) {
  const mensaje = document.getElementById('mensajeAntonimo');
  if (opcion === 'Pequeño') {
    mensaje.textContent = '✅ Correcto, pequeño es antónimo de grande.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Intenta otra opción.';
  }
  actualizarEstado();
}

function juego(opcion) {
  const mensaje = document.getElementById('mensajeJuego');
  if (opcion === 'Corre') {
    mensaje.textContent = '✅ Correcto, elegiste un verbo.';
    progreso = Math.min(100, progreso + 6);
    monedas += 4;
  } else {
    mensaje.textContent = '😅 Esa palabra no es un verbo.';
  }
  actualizarEstado();
}

function memoria() {
  const palabras = ['MARIPOSA', 'SOL', 'CIELO', 'PERRO'];
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  const elemento = document.getElementById('palabraMemoria');
  const mensaje = document.getElementById('mensajeMemoria');
  elemento.textContent = palabra;
  mensaje.textContent = '🧠 Mira la palabra y memorízala.';
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
  const mensaje = document.getElementById('mensajeCertificado');
  mensaje.textContent = '🎉 ¡Felicidades! Ya puedes obtener tu certificado de Comunicación 2°.';
  progreso = 100;
  monedas += 20;
  actualizarEstado();
}

window.addEventListener('load', actualizarEstado);
document.addEventListener('DOMContentLoaded', actualizarEstado);
