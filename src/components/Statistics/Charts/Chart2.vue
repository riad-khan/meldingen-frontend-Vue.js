<template>
  <canvas id="myChart2" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: "Chart2",

  mounted() {
    const ctx = document.getElementById('myChart2');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [8, 19, 7, 5, 2, 3],
          backgroundColor: [
            'rgba(43,88,130,0.4)',

          ],
          fill:true,
          borderColor: [
            'rgba(31,65,96)',

          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          y: {
            display:false
          },
        },
        hover: {mode: null},
        elements: {
          point:{
            radius: 0
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip:{
            enable: true,
            usePointStyle : false,
            backgroundColor : 'rgba(43,88,133)',
            usePointStyleL: true,
            callbacks: {
              label: function (tooltipItems, data) {
                return 140 ;
              },
              title:function (tooltipItems, data){
                return ''
              }
            },

            yAlign : 'bottom',
            displayColors : false,

          }
        }
      }
    });
    myChart;
  }
}
</script>

<style scoped>

</style>