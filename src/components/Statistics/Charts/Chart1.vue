<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: "Chart1",

  mounted() {
    const ctx = document.getElementById('myChart');
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

          pointRadius: 1,
          pointHoverRadius: 1,
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
          ticks: {
            display: false
          }
        },

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
            position: 'nearest',
            padding: 10,
            cornerRadius: 10,
            backgroundColor : 'rgba(43,88,133)',
            callbacks: {
              label: function(context) {
                return context.parsed.y;
              },
              title: () => null
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