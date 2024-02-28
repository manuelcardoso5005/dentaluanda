const inpNome = document.querySelector('#agenda-nome');
const inpNumero = document.querySelector('#agenda-number');
const inpData = document.querySelector('#agenda-data');
const inpPeriodo = document.querySelector('#agenda-periodo');
const inpEspecialidade = document.querySelector('#agenEspe');

const img = document.querySelector('#img-especialidade');

const spnNome = document.querySelector('#nome-agendar');
const spnNumero = document.querySelector('#agenda-telefone');
const spnData = document.querySelector('#data-agendar');
const spnPeriodo = document.querySelector('#data-periodo');
const spnEspecialidade = document.querySelector('#agenda-especialidade');

const especialidadeText = document.querySelector('.resumo-espec-Texto p')

function formatarNumero(numero) {
    // Remove caracteres não numéricos e limita a 12 dígitos
    const numeroLimpo = limitarNumeros(numero);

    // Separa a string em grupos de três dígitos usando expressões regulares
    const grupos = numeroLimpo.match(/\d{1,3}/g);

    // Junta os grupos usando espaços como separadores
    const numeroFormatado = grupos ? grupos.join(' ') : '';

    return numeroFormatado;
}

function limitarNumeros(numero){
    // Remove caracteres não numéricos e limita a 12 dígitos
    return numero.replace(/\D/g, '').substring(0, 9);

}

function obterNomeMes(mes) {
    const nomesMeses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return nomesMeses[mes];
}

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

function obterCaminhoImg(caminho) {
    const todosCaminhos = [
        'img/especialidades/00cirurgiaoral.png',
        'img/especialidades/01periodontologia.png',
        'img/especialidades/02prostodontia.png', 
        'img/especialidades/03aparelhoortodontico.png',
        'img/especialidades/04higieneoral.png',
        'img/especialidades/05bacteriana.png',
        'img/especialidades/06dente.png', 
        'img/especialidades/07higieneoral.png',
        ''
    ];
    return todosCaminhos[caminho];
}

function trocaImagem(caminho){
    img.src = obterCaminhoImg(caminho);
}

function trocaTexto(texto, indice){
    texto.textContent = obterInformacao(indice)
}

inpNome.addEventListener('input', () => {
    spnNome.textContent = inpNome.value;
});

inpNumero.addEventListener('input', () => {
    const numeroLimpo = limitarNumeros(inpNumero.value);
    spnNumero.textContent = formatarNumero(numeroLimpo);
    inpNumero.value = numeroLimpo; 
    spnNumero.textContent = inpNumero.value;
});

inpData.addEventListener('input', () => {
    const dataSelecionada = new Date(inpData.value);
    const dia = dataSelecionada.getDate();
    const mes = obterNomeMes(dataSelecionada.getMonth());
    const ano = dataSelecionada.getFullYear();

    const dataFormatoCustomizado = `${dia} de ${mes} de ${ano}`;
    spnData.textContent = dataFormatoCustomizado;
});

inpPeriodo.addEventListener('change', () => {
    spnPeriodo.textContent = inpPeriodo.value;
});

inpEspecialidade.addEventListener('change', () => {
    if (inpEspecialidade.value == "Cirurgia Oral"){
        trocaTexto(especialidadeText, 0);
        trocaImagem(0)
    } else if (inpEspecialidade.value == "Periodontologia"){
        trocaTexto(especialidadeText, 1);
        trocaImagem(1)
    } else if (inpEspecialidade.value == "Prostodontia"){
        trocaTexto(especialidadeText, 2);
        trocaImagem(2)
    } else if (inpEspecialidade.value == "Ortodontia"){
        trocaTexto(especialidadeText, 3);
        trocaImagem(3)
    } else if (inpEspecialidade.value == "Higiene oral"){
        trocaTexto(especialidadeText, 4);
        trocaImagem(4)
    }  else if (inpEspecialidade.value == "Odontopediatria"){
        trocaTexto(especialidadeText, 5);
        trocaImagem(5)
    } else if (inpEspecialidade.value == "Imagiologia"){
        trocaTexto(especialidadeText, 6);
        trocaImagem(6)
    } else if (inpEspecialidade.value == "Próteses dentárias"){
        trocaTexto(especialidadeText, 7);
        trocaImagem(7)
    } else if (inpEspecialidade.value == ""){
        trocaTexto(especialidadeText, 8);
        trocaImagem(8)
    }
    spnEspecialidade.textContent = inpEspecialidade.value;
});