const btnInicio = document.querySelector(".btnInicio");
const btnServicos = document.querySelector(".btnServico");
const btnAgendamento = document.querySelector(".btnAgendamento");
const btnSobreNos = document.querySelector(".btnSobreNos");
const btnContacto = document.querySelector(".btnContacto");
const btnEntrar = document.querySelector(".btnEntrar");
const btnCadastrar = document.querySelector(".btnCadastrar");
const btnAgendarBanner = document.querySelector("#btnAgendarBanner");

const sectionInicio = document.querySelector(".sectionInicio");
const sectionServicos = document.querySelector(".sectionServico");
const sectionAgendamentos = document.querySelector(".sectionAgendamento");
const sectionSobreNos = document.querySelector(".sectionSobreNos");
const sectionContactos = document.querySelector(".sectionContacto");
const sectionLogin = document.querySelector("#sectionLogin");

const sectionLoginContainer = document.querySelector(".sectionLogin-container");

const btnCadastrar2 = document.querySelector("#cadastrar");
const btnEntrar2 = document.querySelector("#login");



btnCadastrar2.addEventListener("click", ()=> {
    if(!(sectionLoginContainer.classList.add("active"))){
        sectionLoginContainer.classList.add("active")
    }
})

btnEntrar2.addEventListener("click", ()=>{
    if((sectionLoginContainer.classList.contains("active"))){
        sectionLoginContainer.classList.remove("active")
    } else {
        console.log("nao possui a classe")
    }
})







btnInicio.addEventListener("click", ()=> {
    mostrarJanela(sectionInicio)
    ocultarJanela(sectionServicos, sectionAgendamentos, sectionSobreNos, sectionContactos, sectionLogin)
})

btnServicos.addEventListener("click", ()=> {
    mostrarJanela(sectionServicos)
    ocultarJanela(sectionInicio, sectionAgendamentos, sectionSobreNos, sectionContactos, sectionLogin)
})

btnAgendamento.addEventListener("click", ()=> {
    mostrarJanela(sectionAgendamentos)
    ocultarJanela(sectionInicio, sectionServicos, sectionSobreNos, sectionContactos, sectionLogin)
})

btnAgendarBanner.addEventListener("click", ()=> {
    mostrarJanela(sectionAgendamentos)
    ocultarJanela(sectionInicio, sectionServicos, sectionSobreNos, sectionContactos, sectionLogin)
})

btnSobreNos.addEventListener("click", ()=> {
    mostrarJanela(sectionSobreNos)
    ocultarJanela(sectionInicio, sectionServicos, sectionAgendamentos, sectionContactos, sectionLogin)
})

btnContacto.addEventListener("click", ()=> {
    mostrarJanela(sectionContactos)
    ocultarJanela(sectionInicio, sectionServicos, sectionAgendamentos, sectionSobreNos, sectionLogin)
})

btnEntrar.addEventListener("click", ()=> {
    mostrarJanela(sectionLogin)
    ocultarJanela(sectionInicio, sectionServicos, sectionAgendamentos, sectionSobreNos, sectionContactos)
    sectionLoginContainer.classList.add("active")
})

btnCadastrar.addEventListener("click", ()=> {
    mostrarJanela(sectionLogin)
    ocultarJanela(sectionInicio, sectionServicos, sectionAgendamentos, sectionSobreNos, sectionContactos)
    sectionLoginContainer.classList.remove("active")
})

function mostrarJanela(janela){
    if(janela.classList.contains("none")){
        janela.classList.remove("none")
        janela.classList.add("block")
    }
}

function ocultarJanela(janela1, janela2, janela3, janela4, janela5){
    janela1.classList.add("none")
    janela2.classList.add("none")
    janela3.classList.add("none")
    janela4.classList.add("none")
    janela5.classList.add("none")
}