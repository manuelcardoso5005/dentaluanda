const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const btnEntrar = document.querySelector('#btnEntrar');
const erroLogin = document.querySelector('.msg-erro-login');

const apiUser = 'http://localhost:8000/user.json';

// Função para verificar o login
function fazerLogin(emailDigitado, senhaDigitada) {
    fetch(apiUser)
        .then((resp) => resp.json())
        .then((data) => {
            // Verificar se existe um usuário com o email e senha fornecidos
            const usuario = data.find((user) => user.email === emailDigitado && user.senha === senhaDigitada);
            console.log(usuario.email); // Use 'usuario', não 'user'
            console.log(usuario.senha); // Use 'usuario', não 'user'
            if (usuario) {
                // Usuário autenticado, definir variáveis de sessão
                localStorage.setItem('usuarioLogado', JSON.stringify({
                    nome: usuario.nome,
                    previlegio: usuario.previlegio
                }));
                // Redirecionar para a página "admin.html"
                window.location.href = 'admin.html';
            } else {
                // Usuário não encontrado ou senha incorreta
                erroLogin.textContent = 'Credenciais inválidas. Por favor, tente novamente.';
            }
        })
        .catch((error) => {
            console.error('Erro ao buscar os dados de usuário:', error);
        });
}


btnEntrar.addEventListener('click', () => {
	if(email.value=='' || senha.value==''){
		erroLogin.textContent='Preencha os campos vazios'
	}
    const emailDigitado = email.value;
    const senhaDigitada = senha.value;
    fazerLogin(emailDigitado, senhaDigitada);
});
