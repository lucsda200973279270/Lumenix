/*======================================
        LUMENIX - OBJETIVOS
======================================*/

// =============================
// BOTONES
// =============================

const btnPrincipal = document.querySelector(".btnPrincipal");
const btnSecundario = document.querySelector(".btnSecundario");

const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");

// =============================
// SONIDOS
// =============================

function reproducirClick(){

    if(clickSound){

        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{});

    }

}

function reproducirSuccess(){

    if(successSound){

        successSound.currentTime = 0;
        successSound.play().catch(()=>{});

    }

}

// =============================
// BOTÓN COMENZAR
// =============================

if(btnPrincipal){

    btnPrincipal.addEventListener("click",()=>{

        reproducirClick();

        lanzarConfeti();

        setTimeout(()=>{

            reproducirSuccess();

        },300);

        alert("🎉 ¡Bienvenido a LUMENIX!\n\n¡Ahora comienza tu aventura de aprendizaje!");

    });

}

// =============================
// BOTÓN VOLVER
// =============================

if(btnSecundario){

    btnSecundario.addEventListener("click",()=>{

        reproducirClick();

    });

}

// =============================
// EFECTO TARJETAS
// =============================

document.querySelectorAll(".objetivo").forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// =============================
// ANIMACIÓN ENTRADA
// =============================

window.addEventListener("load",()=>{

    document.querySelectorAll(".objetivo").forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s ease";

            card.style.opacity="1";
            card.style.transform="translateY(0px)";

        },index*120);

    });

});

// =============================
// CONFETI
// =============================

function lanzarConfeti(){

    const canvas=document.getElementById("confetti");

    if(!canvas) return;

    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

    const piezas=[];

    for(let i=0;i<180;i++){

        piezas.push({

            x:Math.random()*canvas.width,

            y:-20,

            r:Math.random()*7+3,

            dx:(Math.random()-0.5)*5,

            dy:Math.random()*4+3,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

    function animar(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        piezas.forEach(p=>{

            ctx.beginPath();

            ctx.fillStyle=p.color;

            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

            ctx.fill();

            p.x+=p.dx;

            p.y+=p.dy;

        });

        while(piezas.length && piezas[0].y>canvas.height+50){

            piezas.shift();

        }

        if(piezas.length){

            requestAnimationFrame(animar);

        }else{

            ctx.clearRect(0,0,canvas.width,canvas.height);

        }

    }

    animar();

}

// =============================
// REDIMENSIONAR CANVAS
// =============================

window.addEventListener("resize",()=>{

    const canvas=document.getElementById("confetti");

    if(canvas){

        canvas.width=window.innerWidth;

        canvas.height=window.innerHeight;

    }

});