const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bi.bi-list');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

// FECHAR E ABRIR O BOTAO DE PESQUISA
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bi');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bi-search', 'bi-x-circle-fill');
		} else {
			searchButtonIcon.classList.replace('bi-x-circle-fill', 'bi-search');
		}
	}
})


if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})


// ALTERAR A COR DA PAGINA
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

// TROCA DE MENU 
const btn = (btnId) => {
    return document.getElementById(btnId);
}

const btnDashboard = 'btn-dashboard';
const mainDashboard = 'dashboard';

const btnQuery = 'btn-query';
const mainQuery = 'query';

const btnStatistic = 'btn-statistic';
const mainStatistic = 'statistic';

const btnMessage = 'btn-message';
const mainMessage = 'message';

const btnConfig = 'btn-config';
const mainConfig = 'config';

const btnProfile = 'btn-profile';
const mainProfile = 'profile';

btn(btnDashboard).addEventListener('click', () => {
    if (btn(btnDashboard).classList.contains('active')) {
        showMain(
            btn(mainDashboard),
            btn(mainQuery),
            btn(mainStatistic),
			btn(mainMessage),
			btn(mainConfig),
			btn(mainProfile)
        );
    }
});

btn(btnQuery).addEventListener('click', () => {
    if (btn(btnQuery).classList.contains('active')) {
        showMain(
            btn(mainQuery),
            btn(mainDashboard),
            btn(mainStatistic),
			btn(mainMessage),
			btn(mainConfig),
			btn(mainProfile)
        );
    }
});

btn(btnStatistic).addEventListener('click', () => {
    if (btn(btnStatistic).classList.contains('active')) {
        showMain(
            btn(mainStatistic),
            btn(mainQuery),
            btn(mainDashboard),
			btn(mainMessage),
			btn(mainConfig),
			btn(mainProfile)
        );
    }
});

btn(btnMessage).addEventListener('click', () => {
    if (btn(btnMessage).classList.contains('active')) {
        showMain(
            btn(mainMessage),
            btn(mainQuery),
            btn(mainDashboard),
            btn(mainStatistic),
			btn(mainConfig),
			btn(mainProfile)
        );
    }
});

btn(btnMessage).addEventListener('click', () => {
    if (btn(btnMessage).classList.contains('active')) {
        showMain(
            btn(mainMessage),
            btn(mainQuery),
            btn(mainDashboard),
            btn(mainStatistic),
			btn(mainConfig),
			btn(mainProfile)
        );
    }
});

btn(btnConfig).addEventListener('click', () => {
	showMain(
		btn(mainConfig),
		btn(mainMessage),
		btn(mainQuery),
		btn(mainDashboard),
		btn(mainStatistic),
		btn(mainProfile)
	);
});

btn(btnProfile).addEventListener('click', () => {
	showMain(
		btn(mainProfile),
		btn(mainMessage),
		btn(mainQuery),
		btn(mainDashboard),
		btn(mainStatistic),
		btn(mainConfig)
	);
});

function showMain(main1, main2, main3, main4, main5, main6) {
    main1.classList.remove('none');
    main2.classList.add('none');
    main3.classList.add('none');
	main4.classList.add('none');
	main5.classList.add('none');
	main6.classList.add('none');
}


const marcadas = document.querySelector('.consults');
const pendentes = document.querySelector('.solicitadas');
const terminada = document.querySelector('.done');
const consultasRecentes = document.querySelector('.all-consults');

const api = 'http://localhost:8000/agenda.json';
fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
        const agendamentosMarcados = data.filter((agendamento) => agendamento.status === 'marcado');
        marcadas.innerHTML = `${agendamentosMarcados.length}`
    });


fetch(api)
.then((resp) => resp.json())
.then((data) => {
	const agendamentosPendentes = data.filter((agendamento) => agendamento.status === 'pendente');
	pendentes.innerHTML = `${agendamentosPendentes.length}`
});


fetch(api)
.then((resp) => resp.json())
.then((data) => {
	const agendamentosTerminados = data.filter((agendamento) => agendamento.status === 'terminada');
	terminada.innerHTML = `${agendamentosTerminados.length}`
});

fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
        // Array de meses abreviados
        const mesesAbreviados = [
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ];

        // Ordenar os dados com base na data de agendamento (do mais recente para o mais antigo)
        data.sort((a, b) => new Date(b.dataAgendamento) - new Date(a.dataAgendamento));

        // Pegar apenas os cinco últimos registros
        const ultimasConsultas = data.slice(0, 5);

        // Exibir os cinco últimos registros
        ultimasConsultas.forEach((consulta) => {
            // Formatar a data para o formato dd-Mmm-yyyy
            const dataFormatada = new Date(consulta.dataAgendamento);
            const dia = String(dataFormatada.getDate()).padStart(2, '0');
            const mesAbreviado = mesesAbreviados[dataFormatada.getMonth()];
            const ano = dataFormatada.getFullYear();
            const dataFormatadaString = `${dia}-${mesAbreviado}-${ano}`;

            // Inserir a linha na tabela HTML
            consultasRecentes.innerHTML += `
                <tr>
                    <td>
                        <img src="img/user/user.png">
                        <p>${consulta.agendarNome}</p>
                    </td>
                    <td>${dataFormatadaString}</td>
                    <td><span class="status completed">${consulta.status}</span></td>
                </tr>
            `;
        });
    });
/*
const msg = document.querySelector('.todo-list');
const apiContacto = 'http://localhost:8000/contacto.json';
fetch(apiContacto)
.then((resp) => resp.json())
.then((data) => {
	msg =
})*/
/*
	const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
	if (usuarioLogado) {
		console.log('Nome do usuário:', usuarioLogado.nome);
		console.log('Privilégio do usuário:', usuarioLogado.previlegio);
	} else {
		console.log('Nenhum usuário logado.');
	}*/

const sair = document.querySelector("#btnLogout");

sair.addEventListener('click', ()=> {
	   // Remover os dados do localStorage
	   localStorage.removeItem('usuarioLogado');
	   // Redirecionar para a página de login (ou outra página de sua escolha)
	   window.location.href = 'login.html';
})
