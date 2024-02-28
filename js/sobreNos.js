const txtQuemSomos = document.querySelector(".sobre-quem-somos-text");
const txtMissao = document.querySelector(".sobre-missao-text");
const txtVisao = document.querySelector(".sobre-visao-text");

const btnQuemSomos = document.querySelector(".sobre-quemSomos");
const btnMissao = document.querySelector(".sobre-missao");
const btnVisao = document.querySelector(".sobre-visao");

btnQuemSomos.addEventListener('click', ()=> {
    if((txtQuemSomos.classList.contains('none'))){
        mostrarTexto(txtQuemSomos, btnQuemSomos, btnMissao, btnVisao)
        ocultarTexto(txtMissao, txtVisao)
    }
})

btnMissao.addEventListener('click', ()=> {
    if((txtMissao.classList.contains('none'))){
        mostrarTexto(txtMissao, btnMissao, btnQuemSomos, btnVisao)
        ocultarTexto(txtQuemSomos, txtVisao)
    }
})

btnVisao.addEventListener('click', ()=> {
    if((txtVisao.classList.contains('none'))){
        mostrarTexto(txtVisao, btnVisao, btnMissao, btnQuemSomos)
        ocultarTexto(txtQuemSomos, txtMissao)
    }
})

function mostrarTexto(text, botao1, botao2, botao3){
    text.classList.remove('none')
    text.classList.add('block')
    adicionarBackground (botao1, botao2, botao3)
}

function ocultarTexto(texto1, texto2){
    texto1.classList.add('none')
    texto2.classList.add('none')
}

function adicionarBackground (botao1, botao2, botao3){
    if(!botao1.classList.contains('sobreActive')){
        botao1.classList.add('sobreActive')
        botao2.classList.remove('sobreActive')
        botao3.classList.remove('sobreActive')
    }
}