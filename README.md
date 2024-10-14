# batman-projeto

### Passos para testar o codigo:

1. Configurar o ambiente
   
    Na pasta backend:
   
        $ npm install node
        $ npm install express

3. Rodar o servidor
   
    Ainda na pasta backend:
   
        $ node server.js

5. Acessar o sistema
   
    No navegador, abrir:
   
        http://localhost:3000

### Autenticação e Permissões de Acesso:
Temos 3 tipos de acesso:

1. Administradro de Segurança: 
   
   Tem acesso completo.

   - Usuário: bruce.wayne
   
   - Senha: bruce123

2. Gerente:
   
   Acesso permitido somente a página de "Gerenciamento de Recursos". Pode Adicionar, Editar e Remover qualquer recurso.

   - Usuário: dick.grayson
   
   - Senha: dick123

  
3. Funcionario:
   
   Acesso permitido somente a página de "Gerenciamento de Recursos", sem alteracoes. Pode apenas visualizar a Lista de Recursos.

   - Usuário: alfred.pennyworth
   
   - Senha: alfred123

### Funcionalidades:  

- Login: Cadastrado apenas 3 usuarios, um para cada "role" (admin, gerente e funcionario). Usuarios e senhas descritos acima. "Esqueci a senha" nao funciona, eh apenas a nivel de interface.
  
- Gerenciamento de Recursos: Funcional, logica feita em lista. Eh possivel adicionar, editar e remover recursos.
  Foi adicionado alguns recursos por padrao para facilitar na interface do prototipo.
  
- Dashboard: Resumo dos recursos e os Graficos estao sincronizados com o Array original. Grafico de barras para visualizar a quantidade de recursos por Categoria e, um grafico de pizza voltado para a quantidade de recursos por Status. Atividade dos usuarios eh estatico e ultimo login simulando a data e hora atual.
