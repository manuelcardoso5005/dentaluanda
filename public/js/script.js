const selectID = (idName) => document.querySelector(`#${idName}`);
const selectClass = (className) => document.querySelector(`.${className}`);

// Função para adicionar ou remover class
function addClass(element, className){
    element.classList.add(className)
}

function removeClass(element, className){
    element.classList.remove(className)
}

// SOBE NÓS
const btnAbout = document.querySelectorAll('.btn-about')

btnAbout.forEach(item=>{
    item.addEventListener('click', ()=> {
        item.classList.add('about-active')
    })
})

// MENU PRINCIPAL
const menuPanel = 'menu';
const classMenuOpen = 'open-menu-panel';
const btnNavMenu = 'btn-menu';
const classBtnNavMenu = 'open-menu';
let state = true

selectID(btnNavMenu).addEventListener('click', ()=>{
    state2 = true
    if(state){
        addClass(selectID(btnNavMenu), classBtnNavMenu)
        addClass(selectClass(menuPanel), classMenuOpen)
        removeClass(selectID(btnMenuContact), classBtnMenuContact)
        removeClass(selectClass(menuContact), classMenuContact)
        state = false
    } else {
        removeClass(selectID(btnNavMenu), classBtnNavMenu)
        removeClass(selectClass(menuPanel), classMenuOpen)
        state = true
    }
})

// MENU CONTACO
const menuContact = 'header-contact'
const classMenuContact = 'open-contact-menu'
const btnMenuContact = 'btn-contact-menu'
const classBtnMenuContact = 'open-menu-contact'
const mainArea = 'main-area'
let state2 = true

selectID(btnMenuContact).addEventListener('click', ()=>{
    state = true
    if(state2){
        addClass(selectID(btnMenuContact), classBtnMenuContact)
        addClass(selectClass(menuContact), classMenuContact)
        removeClass(selectID(btnNavMenu), classBtnNavMenu)
        removeClass(selectClass(menuPanel), classMenuOpen)
        state2 = false
    } else {
        removeClass(selectID(btnMenuContact), classBtnMenuContact)
        removeClass(selectClass(menuContact), classMenuContact)
        state2 = true
    }
})

selectID(mainArea).addEventListener('click', ()=>{
    state = true
    state2 = true
    removeClass(selectID(btnNavMenu), classBtnNavMenu)
    removeClass(selectClass(menuPanel), classMenuOpen)
    removeClass(selectID(btnMenuContact), classBtnMenuContact)
    removeClass(selectClass(menuContact), classMenuContact)
})










// MANTER SELEÇÃO DOS MENUS
const todosItensMenu = document.querySelectorAll('nav .nav-area ul li a');

todosItensMenu.forEach(item=>{
    const li = item.parentElement;
    item.addEventListener('click', ()=>{
        todosItensMenu.forEach(i=>{
            i.parentElement.classList.remove('active-menu')
        })
        li.classList.add('active-menu')
    })
})
function removerActiveMenuDeTodos() {
    todosItensMenu.forEach(item => {
        item.parentElement.classList.remove('active-menu');
    });
}

function actualizarPage (btn){
    removerActiveMenuDeTodos()
    selectID(btn).classList.add('active-menu')
}

// MENU AGENDAMENTO VALIDAÇÃO 
const inpScheduleName = 'inpScheduleName';
const showScheduleName = 'showScheduleName';

const inpScheduleEmail = 'inpScheduleEmail';
const showScheduleEmail = 'showScheduleEmail';

const inpScheduleNumber = 'inpScheduleNumber';
const showSchedulePhone = 'showSchedulePhone';

const inpScheduleDate = 'inpScheduleDate';
const showScheduleDate = 'showScheduleDate';

const slcScheduleEspeciality = 'slcScheduleEspeciality';
const showScheduleEspeciality = 'showScheduleEspeciality';
const showScheduleEspecialityText = 'showScheduleEspecialityText'

function obterInformacao(texto) {
    const todosTextos = [
        'Prevenção, diagnóstico e tratamento de alterações, lesões e patologias da cavidade oral ( Extrações simples ou de dentes inclusos, tratamento de infeções, remoções de quistos e tumores, tratamento da disfunção da articulação temporo-mandibular).',
        'Diagnóstico e tratamento de doenças do periodonto responsável por manter a firmeza dos dentes nos maxilares ( tratamento de gengivite e periodontite).',
        'Reconstrução e reparação de dentes danificados e colocação de próteses fixas sobre implantes ( Coroas unitárias e pontes parciais e totais)',
        'Prevenção e correção do mau posicionamento dentário e do crescimento incorreto dos maxilares ( Colocação de aparelho fixo em metal ou cerâmica).',
        'Diagnóstico, prevenção e terapeutica de doenças orais, acompanhados pelo ensino e demonstração de uma boa prática de saúde oral ( Destartarização, aplicação de flúor, aplicação de selantes).',
        'Manutenção da Saúde Oral das crianças, adolescentes e pacientes com necessidades especiais ( Tratamento de cáries, aplicação de flúor, aplicação de selantes). A Clínica Dentaluanda dispõe ainda de alguns serviços complementares que prestam apoio às diversas especialidades dentárias, permitindo que todos os procedimentos relacionados com a prática das mesmas, possam ser realizados num mesmo local e com o máximo de conforto e segurança para os pacientes.',
        'Importante no diagnóstico de tratamentos e no seu controlo. Avaliação de dentes ausentes, nível de erupção dentária ( Exames disponioveis: Ortopantomografia, Radiografia, Teleradiografia).',
        'A Clinica Dentaluanda terá um laboratório especializado em próteses fixas sobre implantes e sobre dentes naturais.',
        ''
    ];
    return todosTextos[texto];
}

selectID(inpScheduleName).addEventListener('input', ()=>{
    selectID(showScheduleName).textContent = selectID(inpScheduleName).value;
})

selectID(inpScheduleEmail).addEventListener('input', ()=>{
    selectID(showScheduleEmail).textContent = selectID(inpScheduleEmail).value;
})

selectID(inpScheduleNumber).addEventListener('input', ()=>{
    selectID(showSchedulePhone).textContent = formatarNumero(selectID(inpScheduleNumber).value);
})

selectID(inpScheduleDate).addEventListener('input', ()=>{
    selectID(showScheduleDate).textContent = selectID(inpScheduleDate).value;
})

selectID(slcScheduleEspeciality).addEventListener('change', ()=>{
    let especiality = selectID(slcScheduleEspeciality).value
    let showEspeciality = selectID(showScheduleEspecialityText)
    selectID(showScheduleEspeciality).textContent = especiality;
    if(especiality == ''){
        showEspeciality.textContent = obterInformacao(8)
    } else if (especiality == 'Cirurgia Oral'){
        showEspeciality.textContent = obterInformacao(0)
    } else if (especiality == 'Periodontologia'){
        showEspeciality.textContent = obterInformacao(1)
    } else if (especiality == 'Prostodontia'){
        showEspeciality.textContent = obterInformacao(2)
    } else if (especiality == 'Ortodontia'){
        showEspeciality.textContent = obterInformacao(3)
    } else if (especiality == 'Higiene oral'){
        showEspeciality.textContent = obterInformacao(4)
    } else if (especiality == 'Odontopediatria'){
        showEspeciality.textContent = obterInformacao(5)
    } else if (especiality == 'Imagiologia'){
        showEspeciality.textContent = obterInformacao(6)
    } else if (especiality == 'Próteses dentárias'){
        showEspeciality.textContent = obterInformacao(7)
    }
})


// TROCA DE MENU 

const mainInicio = 'section-inicio';
const btnInicio = 'btn-nav-inicio';
const logoImg = 'logo-img';

const mainServicos = 'section-servicos';
const btnServicos = 'btn-nav-servico';

const mainAgendar = 'section-schedule';
const btnAgendar = 'btn-nav-agendamento';
const btnAgendarBanner = 'btn-banner-agendar';
const btnAgendarService = 'btn-services-agendar'

const mainSobre = 'section-about';
const btnSobre = 'btn-nav-sobre';
const btnSobre2 = 'btn-home-about';

const mainContacto = 'section-contact';
const btnContacto = 'btn-nav-contacto';

const mainLogin = 'section-login';
const btnLogin = 'btn-nav-login';

const btnProfile = '';

const confirmacao = 'section-sucess'

function trocaMenu (btn, main1, main2, main3, main4, main5, main6, main7) {
    if(selectID(btn).classList.contains('active-menu')){
        selectID(main1).classList.remove('none')
        selectID(main2).classList.add('none')
        selectID(main3).classList.add('none')
        selectID(main4).classList.add('none')
        selectID(main5).classList.add('none')
        selectID(main6).classList.add('none')
        selectID(main7).classList.add('none')
    }
}

function trocaMenu2 (main1, main2, main3, main4, main5, main6, main7) {
    selectID(main1).classList.remove('none')
    selectID(main2).classList.add('none')
    selectID(main3).classList.add('none')
    selectID(main4).classList.add('none')
    selectID(main5).classList.add('none')
    selectID(main6).classList.add('none')
    selectID(main7).classList.add('none')
}

selectID(btnInicio).addEventListener('click', ()=> {
    trocaMenu(btnInicio, mainInicio, mainServicos, mainAgendar, mainSobre, mainContacto, mainLogin)
});

selectID(logoImg).addEventListener('click', ()=> {
    trocaMenu2(mainInicio, mainAgendar, mainLogin, mainContacto, mainServicos, mainSobre, confirmacao)
    actualizarPage(btnInicio)
});

selectID(btnServicos).addEventListener('click', ()=> {
    trocaMenu(btnServicos, mainServicos, mainInicio, mainAgendar, mainSobre, mainContacto, mainLogin)
});

selectID(btnAgendar).addEventListener('click', ()=> {
    trocaMenu(btnAgendar, mainAgendar, mainServicos, mainInicio, mainSobre, mainContacto, mainLogin)
});

selectID(btnAgendarBanner).addEventListener('click', ()=> {
    trocaMenu2(mainAgendar, mainLogin, mainContacto, mainServicos, mainInicio, mainSobre, confirmacao)
    actualizarPage(btnAgendar)
});

selectID(btnAgendarService).addEventListener('click', ()=> {
    trocaMenu2(mainAgendar, mainLogin, mainContacto, mainServicos, mainInicio, mainSobre, confirmacao)
    actualizarPage(btnAgendar)
});

selectID(btnSobre).addEventListener('click', ()=> {
    trocaMenu(btnSobre, mainSobre, mainInicio, mainAgendar, mainServicos, mainContacto, mainLogin)
});

selectID(btnSobre2).addEventListener('click', ()=> {
    trocaMenu2(mainSobre, mainAgendar, mainLogin, mainContacto, mainServicos, mainInicio, confirmacao)
    actualizarPage(btnSobre)
});

selectID(btnContacto).addEventListener('click', ()=> {
    trocaMenu(btnContacto, mainContacto, mainServicos, mainAgendar, mainInicio, mainSobre, mainLogin)
});

selectID(btnLogin).addEventListener('click', ()=> {
    trocaMenu2(mainLogin, mainContacto, mainServicos, mainAgendar, mainInicio, mainSobre, confirmacao)
    formContainer.classList.remove('none')
});



// QUEM SOMOS

const btnQuemSomos = 'sobre-quemSomos';
const btnMissao = 'sobre-missao';
const btnVisao = 'sobre-visao';

const txtAboutText1 = 'about-text-1';
const txtAboutText2 = 'about-text-2';
const txtAboutText3 = 'about-text-3';

function trocaTexto(text1, text2, text3){
    selectClass(text1).classList.remove('none')
    selectClass(text2).classList.add('none')
    selectClass(text3).classList.add('none')
}

function trocaBtn(btn1, btn2){
    selectClass(btn1).classList.remove('about-active')
    selectClass(btn2).classList.remove('about-active')
}

selectClass(btnQuemSomos).addEventListener('click', ()=>{
    if(selectClass(btnQuemSomos).classList.contains('about-active')){
        trocaBtn(btnMissao, btnVisao)
        trocaTexto(txtAboutText1, txtAboutText2, txtAboutText3)
    }
})

selectClass(btnMissao).addEventListener('click', ()=>{
    if(selectClass(btnMissao).classList.contains('about-active')){
        trocaBtn(btnQuemSomos, btnVisao)
        trocaTexto(txtAboutText2, txtAboutText1, txtAboutText3)
    }
})

selectClass(btnVisao).addEventListener('click', ()=>{
    if(selectClass(btnVisao).classList.contains('about-active')){
        trocaBtn(btnQuemSomos, btnMissao)
        trocaTexto(txtAboutText3, txtAboutText2, txtAboutText1)
    }
})


// ANIMAÇÃO DO SCROLL 
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show'); 
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const animacaoHidden = document.querySelectorAll('.hidden');
animacaoHidden.forEach((el) =>{
    observer.observe(el)
})

//////////

function validarDataSelecionada(dataSelecionada) {
    const hoje = new Date();
    const dataSelecionadaFormatada = new Date(dataSelecionada);
    if (dataSelecionadaFormatada < hoje) {
        return false;
    } else {
        return true;
    }
}

const mgsErro = 'mgsErro';

function activeErro(elemento) {
    elemento.classList.add('error');
    selectClass(mgsErro).style.display = 'block';
}

function retireErro(elemento) {
    elemento.classList.remove('error');
    selectClass(mgsErro).style.display = 'none';
}

function formatarNumero(numero) {
    const numeroFormatado = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return numeroFormatado;
}

const formAgendar = selectID('schedule-container');
const formAgendarNome = selectID('inpScheduleName');
const formAgendarEmail = selectID('inpScheduleEmail');
const formAgendarNumber = 'inpScheduleNumber';
const formAgendarData = selectID('inpScheduleDate');

formAgendarNome.addEventListener('input', () => {
    if (!validarNome(formAgendarNome.value)) {
        activeErro(formAgendarNome);
    } else {
        retireErro(formAgendarNome);
    }
});

formAgendarEmail.addEventListener('input', () => {
    if (!validarEmail(formAgendarEmail.value)) {
        activeErro(formAgendarEmail);
    } else {
        retireErro(formAgendarEmail);
    }
});

selectID(formAgendarNumber).addEventListener('input', () => {
    const valor = selectID(formAgendarNumber).value.replace(/[^0-9]/g, '');
    if (valor.length > 9) {
        selectID(formAgendarNumber).value = valor.slice(0, 9);
    } else {
        selectID(formAgendarNumber).value = valor;
    }
});

formAgendarData.addEventListener('input', () => {
    if (!validarDataSelecionada(formAgendarData.value)) {
        activeErro(formAgendarData);
    } else {
        retireErro(formAgendarData);
    }
});


formAgendar.addEventListener('submit', (e) => {
    // Impede o envio padrão do formulário
    var formData = new FormData(e.currentTarget);

    const isValidNome = validarNome(formAgendarNome.value);
    const isValidEmail = validarEmail(formAgendarEmail.value);
    const isValidData = validarDataSelecionada(formAgendarData.value);

    if (!isValidNome || !isValidEmail || !isValidData) {
        e.preventDefault(); 
        console.log("Há algo errado com os dados do formulário");
        return;
    }

    fetch('http://localhost:8000/agendar', {
        method: 'POST',
        body: formData
    }).then(function(response) {
        console.log('Dados enviados com sucesso.');
        // Faça algo com a resposta, se necessário
    }).catch(function(error) {
        console.error('Erro ao enviar os dados:', error);
    });

    trocaMenu2(confirmacao, mainInicio, mainContacto, mainServicos, mainAgendar, mainInicio, mainSobre, mainLogin);
});


/* ANALISAR ESSA AREA */
function validarNome(nome) {
    var regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
    if (nome.length > 0 && regex.test(nome)) {
        return true;
    }
    return false;
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length > 0 && regex.test(email)) {
        return true;
    }
    return false;
}

function validarMensagem (msg){
    if(msg.length > 0){
        return true
    }
    return false
}

const formContact = 'form-contacto';
const contactNome = selectID('inp-contacto-nome');
const contactEmail = selectID('inpContactoEmail');
const contactMensagem = 'txt-contacto-msg';

contactNome.addEventListener('input', () => {
    if (!validarNome(contactNome.value)) {
        activeErro(contactNome);
    } else {
        retireErro(contactNome);
    }
});

contactEmail.addEventListener('input', () => {
    if (!validarEmail(contactEmail.value)) {
        activeErro(contactEmail);
    } else {
        retireErro(contactEmail);
    }
});

selectID(formContact).addEventListener('submit', (e)=>{
    const nameValid = validarNome(contactNome.value);
    const emailValid = validarEmail(contactEmail.value);

    if(!nameValid || !emailValid) {
        e.preventDefault()
        console.log("temm erro")
    } else {
        console.log("Nao tem erro")
        trocaMenu2(confirmacao, mainInicio, mainContacto, mainServicos, mainAgendar, mainInicio, mainSobre, mainLogin);
        setTimeout(() => {
            trocaMenu2(mainInicio, mainAgendar, mainLogin, mainContacto, mainServicos, mainSobre, confirmacao)
        }, 3000);
        actualizarPage(btnInicio)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Adiciona um evento de rolagem à janela
    window.addEventListener('scroll', function() {
        // Verifica se a posição de rolagem é superior a 500 pixels
        if (window.scrollY > 500) {
            // Se verdadeiro, mostra o botão de rolar para o topo
            document.querySelector('.scroll-to-top').style.display = 'block';
        } else {
            // Se falso, esconde o botão de rolar para o topo
            document.querySelector('.scroll-to-top').style.display = 'none';
        }
    });

    // Adiciona um manipulador de clique ao botão de rolar para o topo
    document.querySelector('.scroll-to-top').addEventListener('click', function() {
        // Anima a rolagem do corpo e da página HTML para o topo em 500 milissegundos
        scrollToTop(500);
        // Impede o comportamento padrão do link, que é seguir o href="#"
        return false;
    });

    // Função para animar a rolagem para o topo
    function scrollToTop(duration) {
        const startingY = window.scrollY;
        const startTime = performance.now();

        function easeInOutQuad(time, start, change, duration) {
            time /= duration / 2;
            if (time < 1) return change / 2 * time * time + start;
            time--;
            return -change / 2 * (time * (time - 2) - 1) + start;
        }

        function animation() {
            const timeElapsed = performance.now() - startTime;
            window.scrollTo(0, easeInOutQuad(timeElapsed, startingY, -startingY, duration));
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);
    }
});

const emailForm = selectID('emailForm');
const formContainer = selectClass('form-container');
const enviarCod = selectID('envioCod');
const recCod = selectID('resCod')
const dados = selectClass('dados');
const codConfirmacao = selectID('cod-confirmacao');
const btnConfirmacao = selectID('codConfirmacao');
const errConfirmacao = selectClass('msgErro');
const errenvio = selectClass('msgErroEnvio');
const outroEnvio = selectID('outroEnvio');
const emailInput = selectID('consult-email');
const profile = selectID('profile');

// Declarar uma variável global para armazenar o código
let codigoAleatorio;

// Função para formatar a data no formato desejado
const formatarData = (data) => {
    const mesesAbreviados = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const date = new Date(data);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = mesesAbreviados[date.getMonth()];
    const ano = date.getFullYear();

    return `${dia}-${mes}-${ano}`;
};

// Adicionar um evento de escuta para o envio do formulário
emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;

    const isValidEmail = validarEmail(email);
    
    if (isValidEmail) {
        fetch('http://localhost:8000/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ consultaEmail: email })
        })
        .then(response => response.json())
        .then(data => {
            codigoAleatorio = data.codigo;
            console.log('Código aleatório:', codigoAleatorio);
            errConfirmacao.classList.add('none');
            enviarCod.classList.add('none');
            recCod.classList.remove('none');
            btnConfirmacao.addEventListener('click', () => {
                if (codConfirmacao.value == codigoAleatorio) {
                    recCod.classList.add('none');
                    errenvio.classList.add('none');
                    fetch('http://localhost:8000/agenda.json')
    .then((resp) => resp.json())
    .then((data) => {
        const foundItem = data.find(item => item.agendarEmail === emailInput.value);
        if (foundItem) {
            const nome = foundItem.agendarNome;
            const email = foundItem.agendarEmail;

            // Filtrar consultas relacionadas ao email do usuário
            const consultasRelacionadas = data.filter(item => item.agendarEmail === emailInput.value);

            // Contar consultas por status
            const consultasPendentes = consultasRelacionadas.filter(item => item.status === 'pendente').length;
            const consultasMarcadas = consultasRelacionadas.filter(item => item.status === 'marcado').length;
            const consultasTerminadas = consultasRelacionadas.filter(item => item.status === 'terminado').length;

            // Montar HTML para exibir informações das consultas
            let consultasHTML = '';
            consultasRelacionadas.forEach(consulta => {
                const dataAgendamentoFormatada = formatarData(consulta.dataAgendamento);
                consultasHTML += `
                    <div class="card">
                        <p><span>Período: </span>${consulta.agendarPeriodo}</p>
                        <p><span>Data da Consulta: </span>${consulta.agendarData}</p>
                        <p><span>Especialidade: </span>${consulta.agendarEspecialidade}</p>
                        <p><span>Observação: </span>${consulta.agendarObs}</p>
                        <p><span>Data de Agendamento: </span>${dataAgendamentoFormatada}</p>
                        <p><span>Situaçõa: </span>${consulta.status}</p>
                    </div>
                `;
                console.log(consulta)
            });

            // Exibir informações das consultas e do perfil do usuário
            profile.innerHTML = `
                <div class="profile-container">
                    <p>Nome: <span>${nome}</span></p>
                    <p>Email: <span>${email}</span></p>
                </div>
                <div class="status">
                    <p>
                        <span>Consultas Realizadas</span>
                        <span>${consultasTerminadas}</span>
                        <i class="bi bi-check-circle-fill"></i>
                    </p>
                    <p>
                        <span>Consultas Agendadas</span>
                        <span>${consultasMarcadas}</span>
                        <i class="bi bi-calendar-event"></i>
                    </p>
                    <p>
                        <span>Consultas Pendentes</span>
                        <span>${consultasPendentes}</span>
                        <i class="bi bi-hourglass-split"></i>
                    </p>
                </div>
                <div class="consultas-container">
                    ${consultasHTML}
                </div>
            `;
        } else {
            profile.innerHTML = `
                <h3 class="msgRegister">Nenhum registro de consulta encontrado.</h3>
                <a href="#" class="btn btnOutro">Inserir outro email</a>  
            `;
            const btnOutro = selectClass('btnOutro');
            const msgRegister = selectClass('msgRegister');

            btnOutro.addEventListener('click', () => {
                enviarCod.classList.remove('none');
                recCod.classList.add('none');
                btnOutro.classList.add('none');
                msgRegister.classList.add('none');
                emailInput.value = '';
            });
        }
    })
    .catch(error => console.error('Erro:', error));

                } else {
                    errenvio.classList.remove('none');
                }
            });
        })
        .catch(error => console.error('Erro:', error));
    } else {
        errConfirmacao.classList.remove('none');
    }
});

outroEnvio.addEventListener('click', () => {
    enviarCod.classList.remove('none');
    recCod.classList.add('none');
    emailInput.value = '';
    codConfirmacao.value = '';
});
