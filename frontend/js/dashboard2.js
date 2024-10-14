import { resources } from "./resource-management.js"; // Caminho relativo do arquivo

// Função para atualizar o resumo dos recursos no dashboard
function updateResourceSummary() {
  const totalResources = resources.length;
  document.getElementById(
    "total-resources"
  ).textContent = `Total de Recursos: ${totalResources}`;

  // Contabiliza a distribuição por categoria
  const categoryCount = {};
  resources.forEach((resource) => {
    categoryCount[resource.category] =
      (categoryCount[resource.category] || 0) + 1;
  });

  let breakdownHTML = `Distribuição por Categoria: `;
  for (const [category, count] of Object.entries(categoryCount)) {
    breakdownHTML += `<div><br> - ${category}: ${count}</div>`;
  }
  document.getElementById("resource-breakdown").innerHTML = breakdownHTML;
}

function updateActiveUsers() {
  // Simulando os usuários autenticados como exemplo de protótipo
  const activeUsers = [
    { username: "admin", role: "A", lastLogin: "14/10/2024 08:00" },
    { username: "gerente", role: "G", lastLogin: "14/10/2024 09:00" },
    { username: "funcionario", role: "F", lastLogin: "14/10/2024 10:00" },
  ];

  const activeUsersElement = document.getElementById("active-users");
  const lastLoginElement = document.getElementById("last-login");

  activeUsersElement.textContent = `Usuários Ativos: ${activeUsers.length}`;

  let lastLoginInfo = "";
  activeUsers.forEach((user) => {
    lastLoginInfo += `<div><br> - ${user.username} (${user.role}) | Último login: ${user.lastLogin}</div>`;
  });

  lastLoginElement.innerHTML = lastLoginInfo;
}

function generateResourceChart() {
 // Obtém o canvas do gráfico de status
const ctx = document.getElementById("statusChart");

// Verifica se o canvas existe
if (!ctx) {
    console.error('Canvas com ID "statusChart" não encontrado.');
    return;
}

// Define os possíveis status com a capitalização correta
const statusLabels = ['Disponível', 'Em uso', 'Em Manutenção', 'Danificado'];

// Reduz a lista de recursos para contar a quantidade em cada status, ignorando diferenças de caso
const statusData = resources.reduce((acc, resource) => {
    const status = resource.status.trim().toLowerCase(); // Normaliza o status (sem espaços e em letras minúsculas)
    
    // Mapeia os status normalizados de volta para o formato correto dos rótulos
    const statusMapping = {
        'disponível': 'Disponível',
        'em uso': 'Em uso',
        'em manutenção': 'Em Manutenção',
        'danificado': 'Danificado'
    };
    
    const mappedStatus = statusMapping[status];

    if (mappedStatus) {
        acc[mappedStatus] = (acc[mappedStatus] || 0) + resource.quantity;
    }
    
    return acc;
}, {});

// Geração do gráfico de Pizza (Status dos Recursos)
new Chart(ctx.getContext("2d"), {
    type: "pie",
    data: {
        labels: statusLabels, // Rótulos para os status
        datasets: [
            {
                data: statusLabels.map(status => statusData[status] || 0), // Valores dos status
                backgroundColor: ["#40801CFF", "#178ACCFF", "#FFCE56", "#C91515FF"], // Cores correspondentes aos status
            },
        ],
    },
});

  const ctxCategory = document.getElementById("categoryChart");
  const categories = resources.reduce((acc, resource) => {
    acc[resource.category] = (acc[resource.category] || 0) + resource.quantity;
    return acc;
  }, {});
  if (!ctxCategory) {
    console.error('Canvas com ID "categoryChart" não encontrado.');
    return;
  }

  // Geração do gráfico de Barras (Categorias)
  new Chart(ctxCategory.getContext("2d"), {
    type: "bar",
    data: {
      labels: Object.keys(categories),
      datasets: [
        {
          label: "Recursos por Categoria",
          data: Object.values(categories),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          borderWidth: 1,
        },
      ],
    },
  });
}


// Função principal para atualizar o dashboard
function initializeDashboard() {
  updateResourceSummary();
  generateResourceChart();
  updateActiveUsers();
  generateCategoryChart();
  generateStatusChart();
}

// Inicializa o dashboard ao carregar a página
document.addEventListener("DOMContentLoaded", initializeDashboard);
