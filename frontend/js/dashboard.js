document.addEventListener('DOMContentLoaded', () => {
    const ctxActivity = document.getElementById('activity-chart').getContext('2d');
    const activityChart = new Chart(ctxActivity, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
          label: 'Atividade Mensal',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    const ctxResources = document.getElementById('resources-chart').getContext('2d');
    const resourcesChart = new Chart(ctxResources, {
      type: 'pie',
      data: {
        labels: ['Disponível', 'Em Uso', 'Manutenção'],
        datasets: [{
          data: [10, 5, 2],
          backgroundColor: ['#28a745', '#ffc107', '#dc3545']
        }]
      }
    });
  });
  