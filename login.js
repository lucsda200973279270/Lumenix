const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const barra = document.getElementById("barra");
const porcentaje = document.getElementById("porcentaje");
const mensaje = document.getElementById("mensaje");
const pantallaCarga = document.getElementById("pantallaCarga");
const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");
const frase = document.getElementById("frase");

const campos = [usuario, clave];

campos.forEach(campo => {
  campo.addEventListener("input", actualizarBarra);
});

function actualizarBarra() {
  let llenos = 0;
  campos.forEach(campo => {
    if (campo.value.trim() !== "") {
      llenos++;
    }
  });
  let progreso = (llenos / campos.length) * 100;
  barra.style.width = progreso + "%";
  porcentaje.innerHTML = Math.round(progreso) + "%";
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  });
});

function mostrarPassword() {
  const tipo = clave.type === "password" ? "text" : "password";
  clave.type = tipo;
}

function ingresar() {
  mensaje.style.color = "red";

  if (usuario.value.trim() === "") {
    mensaje.innerHTML = "👦 Escribe tu usuario.";
    usuario.focus();
    return;
  }

  if (clave.value.trim() === "") {
    mensaje.innerHTML = "🔒 Escribe tu contraseña.";
    clave.focus();
    return;
  }

  const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioLumenix"));
  if (!usuarioGuardado) {
    mensaje.innerHTML = "❌ No se encontró una cuenta. Regístrate primero.";
    return;
  }

  if (usuarioGuardado.nombre !== usuario.value || usuarioGuardado.password !== clave.value) {
    mensaje.innerHTML = "❌ Usuario o contraseña incorrectos.";
    return;
  }

  mensaje.style.color = "#00C853";
  mensaje.innerHTML = "🎉 ¡Bienvenido de nuevo, " + usuarioGuardado.nombre + "!";

  if (successSound) {
    successSound.play().catch(() => {});
  }

  pantallaCarga.style.display = "flex";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
}

window.onload = () => {
  setTimeout(() => {
    frase.innerHTML = "🦉 ¡Hola! Escribe tus datos para continuar tu aventura.";
  }, 800);
};
