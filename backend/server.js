// const express = require('express');
// const { authenticateUser } = require('./auth');  // Importa a função de autenticação

// const app = express();

// app.use(express.json());

// // Rota de login
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const role = authenticateUser(username, password);
  
//   if (!role) {
//     return res.status(401).json({ message: 'Usuário ou senha inválidos' });
//   }

//   res.json({ message: `Bem-vindo, ${username}! Você é um ${role}.` });
// });

// // Rota protegida de dashboard
// app.get('/dashboard', (req, res) => {
//   const { username, role } = req.query; // Obtendo os dados do usuário da query string

//   if (!username || !role) {
//     return res.status(401).json({ message: 'Acesso negado. Faça login primeiro.' });
//   }

//   if (role === 'admin') {
//     return res.json({ message: 'Bem-vindo ao dashboard de administrador.' });
//   } else if (role === 'gerente') {
//     return res.json({ message: 'Bem-vindo ao dashboard de gerente.' });
//   } else if (role === 'funcionario') {
//     return res.json({ message: 'Bem-vindo ao dashboard de funcionário.' });
//   } else {
//     return res.status(403).json({ message: 'Sem acesso.' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });

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
