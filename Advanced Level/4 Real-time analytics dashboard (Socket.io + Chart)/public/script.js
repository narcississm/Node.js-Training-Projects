const socket = io();

const maxDataPoints = 20;

const usersCtx = document.getElementById('usersChart').getContext('2d');
const pageViewsCtx = document.getElementById('pageViewsChart').getContext('2d');
const clicksCtx = document.getElementById('clicksChart').getContext('2d');

const createChart = (ctx, label, borderColor) => new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label,
            data: [],
            borderColor,
            fill: false,
            tension: 0.25,
            pointRadius: 3,
            borderWidth: 2,
        }]
    },
    options: {
        animation: false,
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Zaman'
                }
            },
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: label
                }
            }
        }
    }
});

const usersChart = createChart(usersCtx, 'Aktif Kullanıcılar', '#00ffcc');
const pageViewsChart = createChart(pageViewsCtx, 'Sayfa Görüntüleme', '#ffcc00');
const clicksChart = createChart(clicksCtx, 'Tıklamalar', '#ff3300');

function addData(chart, label, data) {
    if (chart.data.labels.length >= maxDataPoints) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);
    chart.update();
}

socket.on('analytics-update', data => {
    const now = new Date().toLocaleTimeString();

    addData(usersChart, now, data.usersOnline);
    addData(pageViewsChart, now, data.pageViews);
    addData(clicksChart, now, data.clicks);
});