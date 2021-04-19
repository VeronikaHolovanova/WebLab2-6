//-----------------------PIECHART-------------------------

var options = {
  chart: {
      height: 205,
      type: "radialBar"
  },
  
  series: [50],
  colors: ["#ffb35e", "#58deb6"],
  plotOptions: {
      radialBar: {
          startAngle: -90,
          hollow: {
              margin: 60,
              size: "63%"
          },
          track: {
              startAngle: -90,
          },
          dataLabels: {
              showOn: "always",
              name: {
                  offsetY: -100,
                  show: false,
                  color: "#888",
                  fontSize: "0px",
                  height: "0px",

              },
              value: {
                  fontSize: "24px",
                  offsetY: 7,
                  show: true,
                  formatter: function(val) {
                      return val + 25 + '%'
                  },
                  fontFamily: 'Poppins', 
                  fontWeight: "600",
                  color : " #404447",
              },


          }
      }
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          type: "diagonal1",
          opacityTo: 0.9,
          colorStops: [{
              offset: 0,
              color: "#ffb35e",
              opacity: 1
          }, {
              offset: 40,
              color: "#FAD375",
              opacity: 1
          }, {
              offset: 60,
              color: "#61DBC3",
              opacity: 1
          }, {
              offset: 100,
              color: "#62a7ff",
              opacity: 1
          }]
      }
  },
  stroke: {
      lineCap: "round",
  },
  label: false
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();