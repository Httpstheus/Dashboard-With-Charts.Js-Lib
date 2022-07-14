 
let chartOne = document.getElementById('chart').getContext('2d');
let chart = new Chart(chartOne, {
    type: 'doughnut',
    data: {
        // Frist Chart (Payment Method) - Atualy Month
        labels: ['Cartão Padrão', 'Cartão Recorrente', 'Pix', 'Boleto'],
        datasets: [{
 
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#F4A460',
                '#1E90FF',
                '#3CB371',
                '#6959CD',


            ],

            borderWidth: 0
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

 //Second  Chart, is the credit card comparation with jan, fev, march, april, may, june
let creditCardChart = document.getElementById('SecondChart').getContext('2d');
let SecondChart = new Chart(creditCardChart, {
    type: 'polarArea',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Cartão Recebido por Setor',
            data: [12, 19, 3, 5,20,35],
            backgroundColor: [
                '#F4A460',
                '#1E90FF',
                '#3CB371',
                '#6959CD',
                '#2bc8b8',
                '#a4bae2', 

            ],

            borderWidth: 0
        }]
    },
    options: {
            y: {
                beginAtZero: true
            }

    }
});

 //Chart of Pix Comparative months
 let ChartPix = document.getElementById('pixChart').getContext('2d');
 let pixChart = new Chart(ChartPix, {
     type: 'line',
     data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
         datasets: [{
            label: "Pix Mensal",
             data: [12,3,14,5,16,20],
             borderWidth: 3,
             borderColor: '#1E90FF',
             backgroundColor: '#1E90FF', 
 
         }]
     },

 });
 
 

