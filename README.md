# batman-projeto

Passos para testar o codigo:

1. Configurar o ambiente
    Na pasta backend:
        $ npm install node
        $ npm install express

2. Rodar o servidor
    Ainda na pasta backend:
        $ node server.js

3. Acessar o sistema
    No navegador, abrir:
        http://localhost:3000

### Autenticação e Permissões de Acesso:
Temos 3 tipos de acesso:

1. Administradro de Segurança:
   Tem acesso completo.

   Usuário:
   Senha:

2. Gerente
   Acesso permitido somente a página de "Gerenciamento de Recursos". Pode Adicionar, Editar e Remover qualquer recurso.

   Usuário:
   Senha:

4. Funcionario
   Acesso permitido somente a página de "Gerenciamento de Recursos". Pode visualizar a Lista de Recursos.

   Usuário:
   Senha
