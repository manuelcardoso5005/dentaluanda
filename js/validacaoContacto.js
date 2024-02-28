const contactoNome = document.querySelector("#contactoNome");
const contactoAssunto = document.querySelector("#contactoAssunto");
const contactoEmail = document.querySelector("#contactoEmail");
const contactoMsg = document.querySelector("#txtMsg");

const erroNome = document.querySelector(".erroNome");
const erroEmail = document.querySelector(".erroEmail");
const erroMensagem = document.querySelector(".erroMensagem");

const btnEnviarMsg = document.querySelector(".btnEnviarMsg");

const fundo = document.querySelector(".fundo")

const abrirDialogBtn = document.getElementById('abrirDialog');
const meuDialog = document.getElementById('meuDialog');
const modelbox = document.querySelector('.modelbox');

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

function verificarNome(nome, erroMsg){
    if(!validarNome(nome)){
        mostrarMsgErro(erroMsg, contactoNome);
        return false;
    } else {
        ocultarMsgErro(erroMsg, contactoNome);
        return true;
    }
}

function verificarEmail(email, erroMsg){
    if(!validarEmail(email)){
        mostrarMsgErro(erroMsg, contactoEmail);
        return false;
    } else {
        ocultarMsgErro(erroMsg, contactoEmail);
        return true;
    }
}

function verificarMensagem(msg, erroMsg){
    if(!validarMensagem (msg)){
        mostrarMsgErro(erroMsg, contactoMsg);
        return false;
    } else {
        ocultarMsgErro(erroMsg, contactoMsg);
        return true;
    }
}

function mostrarMsgErro(erro, elemento){
    erro.classList.remove("none");
    elemento.style.borderBottom = "1px solid var(--clr-2)";
}

function ocultarMsgErro(erro, elemento){
    if(!(erro.classList.contains("none"))){
        erro.classList.add("none");
        elemento.style.borderBottom = "1px solid transparent";
    }
}

function confirmaçãoEnvio () {
    document.body.classList.add('hidden')
    fundo.style.position = "absolute"
    fundo.style.height = "200%";
    meuDialog.showModal();
    modelbox.classList.remove("none")
    setTimeout(function(){
        fundo.style.position = "relative";
        fundo.style.height = "0px";
        document.body.classList.remove('hidden');
        modelbox.classList.add("none")
        meuDialog.close();
    }, 3000); 
}

function limparCampo (nome, assunto, msg, email){
    nome.value = "";
    assunto.value = "";
    msg.value = "";
    email.value = "";
}

contactoNome.addEventListener("input", () => {
    const nomeUsuario = contactoNome.value;
    verificarNome(nomeUsuario, erroNome);
});

contactoEmail.addEventListener("input", () => {
    const emailUsuario = contactoEmail.value;
    verificarEmail(emailUsuario, erroEmail);
});

contactoMsg.addEventListener("input", () => {
    const msgUsuario = contactoMsg.value;
    verificarMensagem(msgUsuario, erroMensagem);
});


btnEnviarMsg.addEventListener("click", async (event) => {
    const nomeUsuario = contactoNome.value;
    const emailUsuario = contactoEmail.value;
    const msg = contactoMsg.value;

    const nomeValido = verificarNome(nomeUsuario, erroNome);
    const emailValido = verificarEmail(emailUsuario, erroEmail);
    const msgValida = verificarMensagem(msg, erroMensagem);

    if (!(nomeValido && emailValido && msgValida)) {
        console.log("Há algum erro no formulário.");
    } else {
        // Crie um objeto com os dados do formulário
        const dadosFormulario = {
            nome: nomeUsuario,
            email: emailUsuario,
            mensagem: msg
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            });

            if (response.ok) {
                limparCampo (contactoNome, contactoAssunto, contactoMsg, contactoEmail)
                confirmaçãoEnvio ();              
                console.log('Dados enviados com sucesso.');
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        } catch (error) {
            console.error('Erro durante a solicitação:', error);
        }
    }
});

