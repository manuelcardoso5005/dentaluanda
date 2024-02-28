const btnMenu = document.querySelector(".btnMenu");
const btnBarra1 = document.querySelector(".barra1");
const btnBarra2 = document.querySelector(".barra2");
const btnBarra3 = document.querySelector(".barra3");

const btnContactoMenu = document.querySelector(".btnContactoMenu");
const btnPonto1 = document.querySelector(".circulo1");
const btnPonto2 = document.querySelector(".circulo2");
const btnPonto3 = document.querySelector(".circulo3");

const contactoMenu = document.querySelector(".infor-sobre");

const menuPrincipal = document.querySelector(".menu");

let estado = true;
let estado2 = true;

btnMenu.addEventListener("click", ()=> {
    if(estado){
        mostrarMenuPrincipal(menuPrincipal)
        adicionarBarra (btnBarra1, btnBarra3);
        aumentarPonto (btnPonto1, btnPonto2, btnPonto3)
        ocultarMenuContacto (contactoMenu)
        estado = false;
    } else {
        ocultarMenuPrincipal(menuPrincipal)
        retirarBarra (btnBarra1, btnBarra3)
        estado = true;
    }
});

btnContactoMenu.addEventListener("click", ()=> {
    if(estado2){
        mostrarMenuContacto (contactoMenu)
        diminuirPonto (btnPonto1, btnPonto2, btnPonto3)
        ocultarMenuPrincipal(menuPrincipal)
        retirarBarra (btnBarra1, btnBarra3)
        estado2=false;
    } else {
        ocultarMenuContacto (contactoMenu)
        aumentarPonto (btnPonto1, btnPonto2, btnPonto3)
        estado2=true;
    }
});

function adicionarBarra (barra1, barra2){
    MudarMenu (barra1)
    MudarMenu (barra2)
    rotacao (barra1, "-45deg")
    rotacao (barra2, "45deg")
    marginTop (barra1, "6px")
    marginTop (barra2, "18px")
}

function retirarBarra (barra1,barra2){
    voltarNormal (barra1);
    marginTop (barra1, "0px")
    voltarNormal (barra2);
    marginTop (barra2, "24px");
}

function MudarMenu (barra){
    marginLeft (barra, "-2px")
    width (barra, "20px")
}

/* Função para diminuir os pontos do botao do menu contacto */
function diminuirPonto (ponto1, ponto2, ponto3){
    diminuirTamanho(ponto1)
    diminuirTamanho(ponto2)
    diminuirTamanho(ponto3)
    marginTop (ponto1, "24px")
    marginTop (ponto3, "-24px")
}

/* Aumentar o tamanho dos Pontos */
function aumentarPonto (ponto1, ponto2, ponto3){
    aumentarTamanho(ponto1)
    aumentarTamanho(ponto2)
    aumentarTamanho(ponto3)
    marginTop (ponto1, "0px")
    marginTop (ponto3, "0px")
}

function diminuirTamanho(ponto){
    width (ponto, "5px")
    heigth (ponto,  "5px")
}

function aumentarTamanho(ponto){
    width (ponto, "10px")
    heigth (ponto,  "10px")
}

function voltarNormal (barra){
    width (barra, "30px")
    rotacao (barra, "0deg")
    marginLeft (barra, "0px")
}

/* Mostrar o menu de contacto */
function mostrarMenuContacto (menu) {
    right (menu, "0px")
}

/* Ocultar o menu de contacto */
function ocultarMenuContacto (menu) {
    right (menu, "-300px")
}

/* Função para mostrar o menu Principal */
function mostrarMenuPrincipal(menu){
    left (menu, "0px")
}

/* Função para ocultar o menu Principal */
function ocultarMenuPrincipal(menu){
    left (menu, "-300px")
}

function marginTop (elemento, tamanho){
    elemento.style.marginTop = tamanho
}

function marginLeft (elemento, tamanho){
    elemento.style.marginLeft = tamanho
}

function width (elemento, tamanho){
    elemento.style.width = tamanho
}

function heigth (elemento, tamanho){
    elemento.style.height = tamanho
}

function rotacao (elemento, graus) {
    elemento.style.rotate = graus;
}

function right (elemento, tamanho) {
    elemento.style.right = tamanho
}

function left (elemento, tamanho) {
    elemento.style.left = tamanho
}