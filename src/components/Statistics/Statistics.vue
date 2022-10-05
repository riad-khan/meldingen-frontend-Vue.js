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
                <select name="datatablesSimple_length" id="meldingen" @change="(e)=>changeMeldingenTime(e)">
                  <option v-for="i in 24" selected :key="i" v-bind:value="i">{{i}} uur</option>
                </select>
              </p>
              <span id="mel_count">0</span> <span id="meldingen_parcentage">0%</span>

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
import axios from 'axios';




export default {
  name: "Statistics.vue",
  components: {},
  data() {
    return {
      myChart1: null,
      config1: {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Totaal Meldingen',
            data: [],
            backgroundColor: [
              'rgba(43,88,130,0.4)',
            ],

            pointRadius: 1,
            pointHoverRadius: 1,
            fill: true,
            redraw:true,
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
      }
    }
  },


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


  },
  methods: {
    RegioChange(e) {
      let regio;
      if (e === 'all') {
        regio = 'all'
      } else {
        regio = e.target.value;
      }
      const defaultMeldingenTime = document.getElementById('meldingen').value;
      this.fetchMeldingenChartData(defaultMeldingenTime, regio)

      console.log(regio)


    },
    //meldingen Chart

    meldingenChartRender() {
      if (this.myChart1 != null) {
        this.myChart1.destroy();
      }
      this.myChart1 = new Chart(
        document.getElementById('myChart1'),
        this.config1
      );

    },

    changeMeldingenTime(e) {
      const regio = document.getElementById('regio').value;
      const hour = e.target.value;
      this.fetchMeldingenChartData(hour, regio);
    },

    fetchMeldingenChartData(hour, regio) {
      document.getElementById("all_meldingen").classList.add("spin");
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/charts/meldingen/${hour}/${regio}`)
        .then((response) => {
          this.config1.data.labels = [];
          this.config1.data.datasets[0].data = [];

          for (let i = 0; i < response.data.charts.length; i++) {
            this.config1.data.labels.push((response.data.charts[i].time.length == 1 ? '0' : '') + response.data.charts[i].time);
            this.config1.data.datasets[0].data.push(response.data.charts[i].calculated);
          }

          this.meldingenChartRender();

          document.getElementById("all_meldingen").classList.remove("spin");
          document.getElementById('mel_count').innerText = response.data.count;
          document.getElementById('meldingen_parcentage').innerHTML = response.data.parcent + '%';
        })
    }

  }
}
</script>

<style scoped>

</style>