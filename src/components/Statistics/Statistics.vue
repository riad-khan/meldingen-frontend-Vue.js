<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Statistieken
          <select @change="(e)=>RegioChange(e)" name="datatablesSimple_length" placeholder="Nederland" id="regio"
            class="sources">
            <option value="all" selected>Nederland</option>
            <option v-for="(item, i) in regios" v-bind:value="item.regio">{{item.regio}}</option>

          </select>
        </h1>
        <!-- Chart 1 -->
        <div class="col-lg-4">
          <div class="card other-news box-shadow border-radius-8">
            <div class="card-content">
              <strong>
                <h4>Meldingen</h4>
              </strong>
              <p>Total of meldingen
                <select name="datatablesSimple_length" id="meldingen">
                  <option value="1">1 uur</option>
                </select>
              </p>
              <span id="mel_count">2689</span> <span id="meldingen_parcentage">-2%</span>

              <div id="all_meldingen" class="">
                <canvas id="myChart1" width="400" height="400"></canvas>
              </div>

            </div>

          </div>
        </div>
        <!--  Chart 2-->
        <div class="col-lg-4">
          <div class="card other-news box-shadow border-radius-8">
            <div class="card-content">
              <strong>
                <h4>Ambulance Meldingen</h4>
              </strong>
              <p>Total of meldingen
                <select name="datatablesSimple_length" id="meldingen">
                  <option value="1">1 uur</option>
                </select>
              </p>
              <span id="mel_count">2689</span> <span id="meldingen_parcentage">-2%</span>

              <div id="all_meldingen" class="">

              </div>

            </div>

          </div>
        </div>

        <!--  Chart 3-->
        <div class="col-lg-4">
          <div class="card other-news box-shadow border-radius-8">
            <div class="card-content">
              <strong>
                <h4>Brandweer Meldingen</h4>
              </strong>
              <p>Total of meldingen
                <select name="datatablesSimple_length" id="meldingen">
                  <option value="1">1 uur</option>
                </select>
              </p>
              <span id="mel_count">2689</span> <span id="meldingen_parcentage">-2%</span>

              <div id="all_meldingen" class="">

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Chart from 'chart.js/auto';

export default {
  name: "Statistics.vue",
  components: {},


  created() {
    const store = useStore();
    store.dispatch('newsStores/fetchRegios');
   

  },
  computed: {
    regios() {
      const store = useStore();
      return store.state.newsStores.regios
    }
  },
  mounted() {
    this.RegioChange('all');
    this.meldingenChartRender()
  },
  methods: {
    RegioChange(e) {
      let regio;
      if (e === 'all') {
        regio = 'all'
      } else {
        regio = e.target.value;
      }
      
    },
    //meldingen Chart

    meldingenChartRender() {
      let myChart1 = null;
      if (myChart1 != null) {
        myChart1.destroy()
      }
      const ctx = document.getElementById('myChart1');
      myChart1 = new Chart(ctx, {
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
            fill: true,
            borderColor: [
              'rgba(31,65,96)',

            ],
            borderWidth: 3
          }]
        },
        options: {
          scales: {
            y: {
              display: false
            },
            ticks: {
              display: false
            }
          },

          elements: {
            point: {
              radius: 0
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              position: 'nearest',
              padding: 10,
              cornerRadius: 10,
              backgroundColor: 'rgba(43,88,133)',
              callbacks: {
                label: function (context) {
                  return context.parsed.y;
                },
                title: () => null
              },

              yAlign: 'bottom',
              displayColors: false,

            }
          }
        }
      });

    }

  }
}
</script>

<style scoped>

</style>