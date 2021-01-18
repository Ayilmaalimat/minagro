var ctx = document.getElementById('polarChart');
        var polarChart = new Chart(ctx, {  
        type: 'polarArea',
        data: {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
            'Август'],
            datasets: [{
            label: 'Министерство сельского хозяйства',
            
            data: [56,23,78,67,43,90,12,65],
            backgroundColor: [
                'rgba(26, 188, 156,1.0)',
                'rgba(46, 204, 113,1.0)',
                'rgba(231, 76, 60,1.0)',
                'rgba(142, 68, 173,1.0)',
                'rgba(241, 196, 15,1.0)',
                'rgba(52, 73, 94,1.0)',
                'rgba(19, 15, 64,1.0)',
                'rgba(34, 166, 179,1.0)',
            ],
            borderColor: [
                'rgba(26, 188, 156,0.2)',
                'rgba(46, 204, 113,0.2)',
                'rgba(231, 76, 60,0.2)',
                'rgba(142, 68, 173,0.2)',
                'rgba(241, 196, 15,0.2)',
                'rgba(52, 73, 94,0.2)',
                'rgba(19, 15, 64,0.2)',
                'rgba(34, 166, 179,0.2)',
            ],
            borderWidth: 1,
        }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
});