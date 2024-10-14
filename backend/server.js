 // Importando o Express
const express = require('express');
const path = require('path');

// Criando a instância do app
const app = express();

// Definindo a pasta onde estão os arquivos estáticos (frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota principal para a página de login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

// Rota para o dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dashboard2.html'));
  });
  
  // Rota para a página de gerenciamento de recursos
  app.get('/resource-management', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/resource-management.html'));
  });
  

// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
