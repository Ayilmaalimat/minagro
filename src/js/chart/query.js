var ctx = document.getElementById('queryChart');
        var queryChart = new Chart(ctx, {  
        type: 'line',
        data: {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
            'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [{
            label: 'Министерство сельского хозяйства',
            
            data: [56,23,78,67,43,90,12,65,43,22,23,18],
            backgroundColor: [
                'rgba(52, 73, 94,0.2)',
            ],
            borderColor: [
                'rgba(52, 73, 94,1.0)',
            ],
            borderWidth: 1,
        }, {
            label: 'Департамент карантина рестений',
            data: [67,93,54,12,96,12,65,23,65,23,45,42],
            backgroundColor: [
                'rgba(231, 76, 60,0.2)',
            ],
            borderColor: [
                'rgba(231, 76, 60,1.0)',
            ],
            borderWidth: 1,
        }, {
            label: 'Центр сертификации лекарственных средств',
            data: [38,97,65,64,32,25,67,89,12,45,21,67],
            backgroundColor: [
                'rgba(52, 152, 219,0.2)',
            ],
            borderColor: [
                'rgba(52, 152, 219,1.0)',
            ],
            borderWidth: 1,
        },{
                label: 'Общие запросы',
                data: [98,58,35,76,81,23,67,80,23,41,65,89],
                backgroundColor: [
                    'rgba(26, 188, 156,0.2)',
                ],
                borderColor: [
                    'rgba(26, 188, 156,1.0)',
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