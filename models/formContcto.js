const fs = require('fs');
const path = require('path');

// Função para salvar os dados em um arquivo JSON
function saveFormData(formData, callback) {
    const jsonFilePath = path.join(__dirname, '..', 'API', 'contacto.json');

    fs.readFile(jsonFilePath, (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return callback(err);
        }

        let dataArray = [];
        if (!err) {
            dataArray = JSON.parse(data);
        }

        dataArray.push(formData);

        fs.writeFile(jsonFilePath, JSON.stringify(dataArray, null, 2), callback);
    });
}

// Função para lidar com o envio do formulário
function handleFormContact(req, res) {
    const formData = req.body;

    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

    formData.dataAgendamento = `${dia}-${mes}-${ano} : ${horas}:${minutos}:${segundos}`;

    saveFormData(formData, (err) => {
        if (err) {
            console.error('Erro ao salvar os dados:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }

        setTimeout(() => {
            res.redirect('/public/index.html');
        }, 3000);
    });
}

module.exports = { handleFormContact };
