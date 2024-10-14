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
      username === "bruce.wayne" &&
      password === "bruce123"
    ) {
      isAuthenticated = true;
      welcomeMessage = "Bem-vindo, Administrador de Segurança!";
    } else if (
      userRole === "gerente" &&
      username === "dick.grayson" &&
      password === "dick123"
    ) {
      isAuthenticated = true;
      welcomeMessage = "Bem-vindo, Gerente!";
    } else if (
      userRole === "funcionario" &&
      username === "alfred.pennyworth" &&
      password === "alfred123"
    ) {
      isAuthenticated = true;
      welcomeMessage = "Bem-vindo, Funcionário!";
    }

    // Verifica se a autenticação foi bem-sucedida
    if (isAuthenticated) {
      sessionStorage.setItem("userRole", userRole);
      displayMessage(welcomeMessage);

      // Redirecionar para o gerenciamente de recursos.
      setTimeout(() => {
        window.location.href = "resource-management.html"; // Redireciona para o gerenciamente de recursos.
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
