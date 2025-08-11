window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/stats');
        if (!response.ok) {
            throw new Error('Erreur lors de la r\u00e9cup\u00e9ration des statistiques.');
        }
        const data = await response.json();
        // TODO: utiliser les donn\u00e9es pour g\u00e9n\u00e9rer des graphiques
        const container = document.getElementById('stats-container');
        const chartDiv = document.createElement('div');
        chartDiv.id = 'chart';
        container.innerHTML = '';
        container.appendChild(chartDiv);
        // Exemple d'utilisation de Plotly avec des donn\u00e9es factices
        const sampleData = [{
            x: [1, 2, 3],
            y: [10, 15, 7],
            type: 'bar'
        }];
        Plotly.newPlot('chart', sampleData);
    } catch (error) {
        console.error(error);
        const container = document.getElementById('stats-container');
        container.textContent = 'Impossible de charger les statistiques.';
    }
});
