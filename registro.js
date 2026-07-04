// Elementos

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const grado = document.getElementById("grado");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");

const barra = document.getElementById("barra");
const porcentaje = document.getElementById("porcentaje");
const mensaje = document.getElementById("mensaje");

const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");

//======================================
// BARRA DE PROGRESO
//======================================

const campos = [nombre, edad, grado, password, confirmar];

campos.forEach(campo => {

campo.addEventListener("input", actualizarBarra);

campo.addEventListener("change", actualizarBarra);

});

function actualizarBarra(){

let llenos = 0;

campos.forEach(campo=>{

if(campo.value.trim()!=""){

llenos++;

}

});

let progreso = (llenos/campos.length)*100;

barra.style.width = progreso+"%";

porcentaje.innerHTML = Math.round(progreso)+"%";

}

//======================================
// SONIDO BOTONES
//======================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

if(clickSound){

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

}

});

});

//======================================
// REGISTRAR
//======================================

function registrar(){

mensaje.style.color="red";

if(nombre.value.trim()==""){

mensaje.innerHTML="👦 Escribe tu nombre.";

nombre.focus();

return;

}

if(edad.value==""){

mensaje.innerHTML="🎂 Escribe tu edad.";

edad.focus();

return;

}

if(grado.value==""){

mensaje.innerHTML="🎒 Selecciona tu grado.";

grado.focus();

return;

}

if(password.value.length<6){

mensaje.innerHTML="🔒 La contraseña debe tener al menos 6 caracteres.";

password.focus();

return;

}

if(password.value!=confirmar.value){

mensaje.innerHTML="❌ Las contraseñas no coinciden.";

confirmar.focus();

return;

}

//======================================
// GUARDAR DATOS
//======================================

const usuario={

nombre:nombre.value,

edad:edad.value,

grado:grado.value,

password:password.value

};

localStorage.setItem("usuarioLumenix",JSON.stringify(usuario));

//======================================
// MENSAJE
//======================================

mensaje.style.color="#00C853";

mensaje.innerHTML="🎉 ¡Bienvenido "+nombre.value+" a LUMENIX!";

//======================================
// SONIDO
//======================================

if(successSound){

successSound.play().catch(()=>{});

}

//======================================
// CONFETI
//======================================

confeti();

//======================================
// ESPERA
//======================================

setTimeout(()=>{

window.location.href="login.html";

},3500);

}

//======================================
// CONFETI
//======================================

function confeti(){

for(let i=0;i<180;i++){

crearConfeti();

}

}

function crearConfeti(){

let conf=document.createElement("div");

conf.innerHTML=["🎉","✨","⭐","💜","💙","💖","🎈"][Math.floor(Math.random()*7)];

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-40px";

conf.style.fontSize=(18+Math.random()*20)+"px";

conf.style.zIndex="9999";

document.body.appendChild(conf);

let y=-40;

let velocidad=2+Math.random()*4;

let mover=setInterval(()=>{

y+=velocidad;

conf.style.top=y+"px";

conf.style.transform=`rotate(${y*3}deg)`;

if(y>window.innerHeight){

clearInterval(mover);

conf.remove();

}

},15);

}

//======================================
// EFECTO INPUT
//======================================

campos.forEach(campo=>{

campo.addEventListener("focus",()=>{

campo.style.transform="scale(1.03)";

});

campo.addEventListener("blur",()=>{

campo.style.transform="scale(1)";

});

});

//======================================
// SALUDO
//======================================

window.onload=()=>{

setTimeout(()=>{

mensaje.style.color="#7E57C2";

mensaje.innerHTML="🦉 ¡Hola! Completa tus datos para comenzar tu aventura.";

},800);

};
