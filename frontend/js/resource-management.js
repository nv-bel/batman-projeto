let resources = [
  {
    name: "Laptop",
    quantity: 4,
    category: "Equipamento",
    status: "Disponível",
  },
  {
    name: "Câmera Infravermelho",
    category: "Dispositivo de Seguranca",
    quantity: 5,
    status: "Em Uso",
  },
  { name: "Batmovel", quantity: 3, category: "Veiculo", status: "Disponível" },
  {
    name: "Drone Master",
    quantity: 2,
    category: "Dispositivo de Seguranca",
    status: "Danificado",
  },
  {
    name: "Drone Plus",
    quantity: 3,
    category: "Dispositivo de Seguranca",
    status: "Em uso",
  },
  {
    name: "Capa",
    quantity: 2,
    category: "Vestuario",
    status: "Em Manutenção",
  },
]; // Array para armazenar os recursos já cadastrados

// Função para atualizar a lista de recursos na tela
function updateResourceList() {
  const resourceList = document.getElementById('resourceList');
  resourceList.innerHTML = ''; // Limpa a lista antes de atualizar

  resources.forEach((resource, index) => {
    const li = document.createElement('li');
    li.textContent = `${resource.name} | Categoria: ${resource.category} | Quantidade: ${resource.quantity} | Status: ${resource.status}`;

    // Obtém o papel do usuário
    const userRole = sessionStorage.getItem('userRole');

    // Adiciona botões apenas para admin e gerente
    if (userRole === 'admin-seguranca' || userRole === 'gerente') {
      // Botão para remover recurso
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.classList.add('remove-button'); // Classe para botão remover
      removeButton.onclick = () => {
        removeResource(index); // Chama a função de remoção
        updateResourceList(); // Atualiza a lista após remoção
      };

      // Botão para editar recurso
      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.classList.add('edit-button'); // Classe para botão editar
      editButton.onclick = () => editResource(index); // Chama a função de edição

      li.appendChild(removeButton);
      li.appendChild(editButton);
    }

    resourceList.appendChild(li);
  });
}


// Função para remover recurso
function removeResource(index) {
  resources.splice(index, 1); // Remove o recurso do array
  updateResourceList(); // Atualiza a lista na tela
  alert("Recurso removido com sucesso!");
}

// Função para editar recurso
function editResource(index) {
  const resource = resources[index];
  document.getElementById("resourceName").value = resource.name;
  document.getElementById("resourceQuantity").value = resource.quantity;
  document.getElementById("resourceStatus").value = resource.status;
  document.getElementById("resourceCategory").value = resource.category; // Inclui a categoria

  // Remove o recurso após edição para evitar duplicatas
  removeResource(index);
}

// Código que manipula o DOM deve estar dentro de DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  updateResourceList();
  

  // Configura o formulário para adicionar novos recursos
  document
    .getElementById("resourceForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Captura os valores do formulário
      const resourceName = document.getElementById("resourceName").value;
      const resourceQuantity =
        document.getElementById("resourceQuantity").value;
      const resourceStatus = document.getElementById("resourceStatus").value;
      const resourceCategory =
        document.getElementById("resourceCategory").value; // Captura a categoria

      // Adiciona o novo recurso ao array de recursos
      resources.push({
        name: resourceName,
        quantity: parseInt(resourceQuantity),
        status: resourceStatus,
        category: resourceCategory, // Inclui a categoria
      });

      updateResourceList();

      // Limpa o formulário
      this.reset();
    });
});

export { resources };
