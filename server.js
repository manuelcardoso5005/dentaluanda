const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const formAgenda = require('./models/formAgenda'); 
const formContacto = require('./models/formContcto'); 
const nodemailer = require('nodemailer');


const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Rota para lidar com o envio do formulário
app.post('/agendar', formAgenda.handleFormSubmission);
app.post('/contacto', formContacto.handleFormContact);

// Rota para lidar com o envio do formulário
app.post('/enviar-email', (req, res) => {
    // Extrair o email do corpo da solicitação
    const email = req.body.consultaEmail;

    // Gerar um número aleatório de 6 algarismos
    const codigoAleatorio = Math.floor(100000 + Math.random() * 900000);

    // Enviar o código aleatório para o frontend
    res.json({ codigo: codigoAleatorio });
});

app.use(express.static(path.join(__dirname, 'public')));
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
