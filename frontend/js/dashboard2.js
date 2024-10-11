import { resources } from './resource-management.js'; // Caminho relativo do arquivo
import { authenticatedUsers } from './login.js'; // Importe o array

// Função para exibir os usuários autenticados no dashboard
function displayAuthenticatedUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpa a lista antes de exibir

    authenticatedUsers.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.username} - Role: ${user.role}`;
        userList.appendChild(li);
    });
}
// import { authenticatedUsers } from './login.js'; // Importe o array

// Função para exibir os usuários autenticados no dashboard
// function displayAuthenticatedUsers() {
//     const userList = document.getElementById('userList');
//     userList.innerHTML = ''; // Limpa a lista antes de exibir

//     authenticatedUsers.forEach(user => {
//         const li = document.createElement('li');
//         li.textContent = `${user.username} - Role: ${user.role}`;
//         userList.appendChild(li);
//     });
// }


// Função para atualizar o resumo dos recursos no dashboard
function updateResourceSummary() {
    const totalResources = resources.length;
    document.getElementById('total-resources').textContent = `Total de Recursos: ${totalResources}`;
    
    const categories = resources.reduce((acc, resource) => {
        acc[resource.category] = (acc[resource.category] || 0) + resource.quantity;
        return acc;
    }, {});
    
    const resourceBreakdown = Object.keys(categories)
        .map(category => `${category}: ${categories[category]}`)
        .join(', ');
    
    document.getElementById('resource-breakdown').textContent = `Distribuição por Categoria: ${resourceBreakdown}`;
}

// Atualizando os gráficos
function generateResourceChart() {
    const ctx = document.getElementById('resourceChart').getContext('2d');
    const categories = resources.reduce((acc, resource) => {
        acc[resource.category] = (acc[resource.category] || 0) + resource.quantity;
        return acc;
    }, {});

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(categories),
            datasets: [{
                label: 'Recursos por Categoria',
                data: Object.values(categories),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                borderWidth: 1
            }]
        }
    });
}

// Chama as funções
updateResourceSummary();
generateResourceChart();
// displayAuthenticatedUsers();

