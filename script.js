/* ==========================================
   ENGENHO MACHADO
   SCRIPT.JS
========================================== */

// MENU COM FUNDO AO ROLAR

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// ANIMAÇÃO DAS SEÇÕES

const elementos = document.querySelectorAll(".fade");

function aparecer(){

    elementos.forEach(item=>{

        const topo=item.getBoundingClientRect().top;

        if(topo < window.innerHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", aparecer);

aparecer();


// ROLAGEM SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// BOTÃO VOLTAR AO TOPO

const topo=document.createElement("button");

topo.innerHTML="▲";

topo.id="topo";

document.body.appendChild(topo);

topo.style.cssText=`

position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#B89048;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.25);
z-index:9999;
transition:.3s;

`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        topo.style.display="block";

    }else{

        topo.style.display="none";

    }

});

topo.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ANO AUTOMÁTICO NO RODAPÉ

const ano=document.querySelector("#ano");

if(ano){

    ano.textContent=new Date().getFullYear();

}
