window.onload = function onLoad() {

//----------------PROGRES-LINE-----------------

  var bar = new ProgressBar.Line('#progress', {
      color: '#18bb4b',
      duration: 3000,
      easing: 'easeInOut',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: { width: '100%', height: '100%' },
      text: {
          style: {
              color: '#18bb4b',
              position: 'absolute',
              right: '0',
              padding: 0,
              margin: 0,
              transform: null
          },
          autoStyleContainer: false
      },
      from: { color: '#18bb4b' },
      to: { color: '#18bb4b' },
      step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + ' %');
      }
  });
  bar.animate(0.75);
  var barline = new ProgressBar.Line('#progress1', {
      color: '#ffb767',
      duration: 3000,
      easing: 'easeInOut',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: { width: '100%', height: '100%' },
      text: {
          style: {
              color: '#ffb767',
              position: 'absolute',
              right: '0',
              padding: 0,
              margin: 0,
              transform: null
          },
          autoStyleContainer: false
      },
      from: { color: '#ffb767' },
      to: { color: '#ffb767' },
      step: (state, barline) => {
          barline.setText(Math.round(barline.value() * 100) + ' %');
      }
  });
  barline.animate(0.65);
  
//----------------PLOT------------------

const weight = [200, 127, 130, 215, 255, 240, 195, 155, 150, 165, 215, 310];

const labels = [
    "Jan  ", "Feb  ", "Mar  ", "Apr  ", "May  ", "Jun  ", "Jul  ", "Aug  ", "Sep  ", "Oct  ", "Nov  ", "Dec  "
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
            pointRadius: 0,
            pointHollowRadius: 10
        }]
    },
    options: {
        interaction: {
            intersect: false,
            mode: 'index',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: "500",
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
                fontFamily: 'Poppins, sans-serif',
                fontWeight: "500",
                title:{
                    display:false,
                    fontSize:0
                },
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
                    fontSize: "13px",
                    lineHeight: "40px",
                    color: "#b1b5b8",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "right",
                }
            },
            y: {
                offset: false,
                scaleLabel: {
                    display: false,


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
                    borderDash: [12, 4]
                },
                ticks: {
                    beginAtZero: false,
                    autoSkip: false,
                    padding: 10,
                    stepSize: 100,
                    fontSize: "13px",
                    lineHeight: "40px",
                    color: "#404447",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                    textAlign: "right"
                },
                max: 500,
                min: 0,
                
            }
        }
    }


};
    window.myLine = new Chart(ctx, options1);
};