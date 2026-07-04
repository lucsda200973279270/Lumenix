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

function sumarProgreso(cantidad = 4, monedasGanadas = 8) {
  progreso = Math.min(100, progreso + cantidad);
  monedas += monedasGanadas;
  actualizarEstado();
}

function mostrarLeccion() {
  alert('📚 ¡Bienvenido a Matemática 6°!');
  sumarProgreso(8, 6);
}

function correcto(id, texto) {
  const mensaje = document.getElementById(id);
  if (mensaje) {
    mensaje.textContent = texto;
    mensaje.className = 'mensaje';
  }
  sumarProgreso();
}

function incorrecto(id) {
  const mensaje = document.getElementById(id);
  if (mensaje) {
    mensaje.textContent = '❌ Respuesta incorrecta.';
    mensaje.className = 'mensaje';
  }
}

function op1() {
  const r = Number(document.getElementById('op1').value);
  if (r === 221) {
    correcto('mensajeOp1', '🎉 ¡Excelente!');
  } else {
    incorrecto('mensajeOp1');
  }
}

function op2() {
  const r = Number(document.getElementById('op2').value);
  if (r === 291) {
    correcto('mensajeOp2', '⭐ Correcto.');
  } else {
    incorrecto('mensajeOp2');
  }
}

function algebra1() {
  const r = Number(document.getElementById('algebra1').value);
  if (r === 27) {
    correcto('mensajeAlgebra1', '👏 Muy bien.');
  } else {
    incorrecto('mensajeAlgebra1');
  }
}

function algebra2() {
  const r = Number(document.getElementById('algebra2').value);
  if (r === 27) {
    correcto('mensajeAlgebra2', '🏆 Excelente.');
  } else {
    incorrecto('mensajeAlgebra2');
  }
}

function fraccion(op) {
  if (op === 1) {
    correcto('mensajeFraccion', '🍕 Correcto.');
  } else {
    incorrecto('mensajeFraccion');
  }
}

function fraccion2(op) {
  if (op === 1) {
    correcto('mensajeFraccion2', '🎉 Muy bien.');
  } else {
    incorrecto('mensajeFraccion2');
  }
}

function decimal1() {
  const r = Number(document.getElementById('decimal1').value);
  if (r === 8.25) {
    correcto('mensajeDecimal1', '⭐ Excelente.');
  } else {
    incorrecto('mensajeDecimal1');
  }
}

function decimal2() {
  const r = Number(document.getElementById('decimal2').value);
  if (r === 5.85) {
    correcto('mensajeDecimal2', '👏 Correcto.');
  } else {
    incorrecto('mensajeDecimal2');
  }
}

function porcentaje1() {
  const r = Number(document.getElementById('porcentaje1').value);
  if (r === 50) {
    correcto('mensajePorcentaje1', '💯 Muy bien.');
  } else {
    incorrecto('mensajePorcentaje1');
  }
}

function porcentaje2() {
  const r = Number(document.getElementById('porcentaje2').value);
  if (r === 108) {
    correcto('mensajePorcentaje2', '🎉 Excelente.');
  } else {
    incorrecto('mensajePorcentaje2');
  }
}

function problema1() {
  const r = Number(document.getElementById('problema1').value);
  if (r === 55) {
    correcto('mensajeProblema1', '🧠 Correcto.');
  } else {
    incorrecto('mensajeProblema1');
  }
}

function problema2() {
  const r = Number(document.getElementById('problema2').value);
  if (r === 72) {
    correcto('mensajeProblema2', '🏆 Excelente.');
  } else {
    incorrecto('mensajeProblema2');
  }
}

function perimetro() {
  const r = Number(document.getElementById('perimetro').value);
  if (r === 48) {
    correcto('mensajePerimetro', '📐 ¡Excelente!');
  } else {
    incorrecto('mensajePerimetro');
  }
}

function area() {
  const r = Number(document.getElementById('area').value);
  if (r === 120) {
    correcto('mensajeArea', '🏆 Correcto.');
  } else {
    incorrecto('mensajeArea');
  }
}

function volumen() {
  const r = Number(document.getElementById('volumen').value);
  if (r === 216) {
    correcto('mensajeVolumen', '⭐ Muy bien.');
  } else {
    incorrecto('mensajeVolumen');
  }
}

function promedio() {
  const r = Number(document.getElementById('promedio').value);
  if (r === 11) {
    correcto('mensajePromedio', '📊 Excelente.');
  } else {
    incorrecto('mensajePromedio');
  }
}

function moda() {
  const r = Number(document.getElementById('moda').value);
  if (r === 5) {
    correcto('mensajeModa', '🎉 Correcto.');
  } else {
    incorrecto('mensajeModa');
  }
}

function mediana() {
  const r = Number(document.getElementById('mediana').value);
  if (r === 6) {
    correcto('mensajeMediana', '👏 Muy bien.');
  } else {
    incorrecto('mensajeMediana');
  }
}

function probabilidad(op) {
  if (op === 1) {
    correcto('mensajeProbabilidad', '🎲 ¡Excelente!');
  } else {
    incorrecto('mensajeProbabilidad');
  }
}

function razon(op) {
  if (op === 1) {
    correcto('mensajeRazon', '📈 Correcto.');
  } else {
    incorrecto('mensajeRazon');
  }
}

function proporcion() {
  const r = Number(document.getElementById('proporcion').value);
  if (r === 40) {
    correcto('mensajeProporcion', '🏆 Muy bien.');
  } else {
    incorrecto('mensajeProporcion');
  }
}

function desafio() {
  const r = Number(document.getElementById('desafio').value);
  if (r === 520) {
    correcto('mensajeDesafio', '🥇 ¡Superaste el desafío!');
  } else {
    incorrecto('mensajeDesafio');
  }
}

function memoria() {
  const numero = document.getElementById('numeroMemoria').textContent;
  setTimeout(() => {
    document.getElementById('numeroMemoria').textContent = '??????';
    const r = prompt('¿Cuál era el número?');
    if (r === numero) {
      correcto('mensajeMemoria', '🧠 ¡Memoria perfecta!');
    } else {
      document.getElementById('mensajeMemoria').textContent = '❌ Era ' + numero;
    }
    document.getElementById('numeroMemoria').textContent = numero;
  }, 5000);
}

function comprar(personaje, costo) {
  if (monedas >= costo) {
    monedas -= costo;
    actualizarEstado();
    alert('🎉 Compraste el personaje ' + personaje);
    guardar();
  } else {
    alert('❌ No tienes suficientes monedas.');
  }
}

function revisarLogros() {
  if (monedas >= 100) {
    document.getElementById('logros').innerHTML = `
      <li>✅ Resolver 5 ejercicios.</li>
      <li>✅ Resolver Álgebra.</li>
      <li>✅ Resolver Geometría.</li>
      <li>✅ Conseguir 100 monedas.</li>
      <li>🏆 Matemática 6° completada.</li>
    `;
  }
}

function certificado() {
  if (progreso >= 100) {
    const nombre = prompt('Escribe tu nombre');
    alert('🏅 CERTIFICADO LUMENIX\n\nSe certifica que\n\n' + nombre + '\n\nha completado satisfactoriamente el curso de Matemática de 6° de Primaria.\n\n¡Felicitaciones!');
  } else {
    alert('⚠ Completa todas las actividades para obtener el certificado.');
  }
}

function guardar() {
  localStorage.setItem('monedas6', monedas);
  localStorage.setItem('progreso6', progreso);
}

function cargar() {
  const m = localStorage.getItem('monedas6');
  const p = localStorage.getItem('progreso6');

  if (m !== null) {
    monedas = parseInt(m, 10);
  }

  if (p !== null) {
    progreso = parseInt(p, 10);
  }

  actualizarEstado();
}

cargar();

setInterval(() => {
  const personaje = document.querySelector('.personaje');
  if (personaje) {
    personaje.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)';
  }
}, 1500);

setInterval(() => {
  guardar();
  revisarLogros();
}, 3000);

document.addEventListener('DOMContentLoaded', actualizarEstado);
window.addEventListener('load', actualizarEstado);