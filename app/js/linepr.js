const weight = [200, 127, 130, 215, 255, 240, 195, 155, 150, 165, 215, 310];

const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#ff3a4c');

gradientStroke.addColorStop(1, '#ffb35e');

var Gradient = ctx.createLinearGradient(500, 0, 100, 0);
Gradient.addColorStop(0, 'rgba(255,  58,  76, 0.3)');

Gradient.addColorStop(1, 'rgba(255, 179, 94, 0.3)');
ctx.canvas.height = 100;


const options1 = {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            fill: true,
            backgroundColor: Gradient,
            pointBackgroundColor: gradientStroke,
            borderColor: gradientStroke,
            data: weight,
            lineTension: 0.4,
            borderWidth: 3,
            pointRadius: 0
        }]
    },
    options: {
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            layout: {
                padding: 10
            },
            responsive: true,
            legend: {
                display: false
            },
            tooltip: {
                position: "average",
                titleAlign: "center",
                bodyColor: "#b1b5b8",
                backgroundColor: "white",
                callbacks: {
                    labels: function(context) {
                        return context.parsed.y;
                    }
                }
            }
        },

        scales: {
            x: {
                offset: false,
                grid: {
                    display: false,
                    tickBorderDashOffset: 0,
                    color: "#fceddd"
                },
                ticks: {
                    padding: 10,
                    autoSkip: false,

                }
            },
            y: {
                offset: false,
                scaleLabel: {
                    display: false,
                    labelString: "Weight in KG",
                    padding: 10
                },
                grid: {
                    display: true,
                    type: "dot",
                    color: "#e4d6d5",
                    offset: false,
                    tickWidth: 0,
                    tickLength: 20,
                    borderColor: "#fceddd",
                    color: "#fceddd",
                    borderDash: [8, 4]
                },
                ticks: {
                    beginAtZero: false,
                    autoSkip: false,
                    padding: 10,
                    stepSize: 100
                },
                max: 500,
                min: 0,
            }
        }
    }
};

window.onload = function() {
    window.myLine = new Chart(ctx, options1);
    Chart.defaults.global.defaultFontColor = "#b1b5b8";
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
};