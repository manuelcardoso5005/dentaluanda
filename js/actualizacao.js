// Adiciona um ouvinte de eventos para o evento beforeunload
window.addEventListener('beforeunload', (event) => {
    const mensagem = 'Você pode perder os dados ao atualizar a página. Tem certeza?';
    event.returnValue = mensagem; // Padrão para navegadores mais antigos
    return mensagem; // Padrão para navegadores modernos
});