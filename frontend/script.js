document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userRole = document.getElementById("user-role").value;

    // Verificação simples de autenticação
    let isAuthenticated = false;
    let welcomeMessage = "";

    // Autenticação com base no tipo de usuário
    if (
      userRole === "admin-seguranca" &&
      username === "admin" &&
      password === "admin123"
    ) {
      isAuthenticated = true;
      welcomeMessage = "Bem-vindo, Administrador de Segurança!";
    } else if (
      userRole === "gerente" &&
      username === "gerente" &&
      password === "gerente123"
    ) {
      isAuthenticated = true;
      welcomeMessage = "Bem-vindo, Gerente!";
    } else if (
      userRole === "funcionario" &&
      username === "funcionario" &&
      password === "func123"
    ) {
      isAuthenticated = true;
      welcomeMessage = "Bem-vindo, Funcionário!";
    }

    // Verifica se a autenticação foi bem-sucedida
    if (isAuthenticated) {
      displayMessage(welcomeMessage);

      // Redirecionar para o dashboard
      setTimeout(() => {
        window.location.href = "dashboard2.html"; // Redireciona para o dashboard
      }, 1000);
    } else {
      displayMessage("Usuário ou senha inválidos.");
    }
  });

// Função para exibir mensagens
function displayMessage(msg) {
  const messageElement = document.getElementById("error-message");
  messageElement.textContent = msg;
  messageElement.style.color = "red"; // Define a cor da mensagem de erro
}

// Função para exibir mensagens
function displayMessage(msg) {
  const messageElement = document.getElementById("error-message");
  messageElement.textContent = msg;
  messageElement.style.color = "red"; // Define a cor da mensagem de erro
}

