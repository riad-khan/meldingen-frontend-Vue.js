<template>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Statistieken</h1>
        <!-- Chart 1 -->
            <div class="col-lg-4">
              <div class="card other-news box-shadow border-radius-8">
                <div class="card-content">
                  <strong><h4>Meldingen</h4></strong>
                  <p>Total of meldingen
                    <select  name="datatablesSimple_length" id="meldingen">
                      <option value="1">1 uur</option>
                    </select>
                  </p>
                  <span id="mel_count">2689</span> <span id="meldingen_parcentage">-2%</span>

                  <div  id="all_meldingen" class="">
                   <Chart1 />
                  </div>

                </div>

              </div>
            </div>
        <!--  Chart 2-->
            <div class="col-lg-4">
              <div class="card other-news box-shadow border-radius-8">
                <div class="card-content">
                  <strong><h4>Ambulance Meldingen</h4></strong>
                  <p>Total of meldingen
                    <select  name="datatablesSimple_length" id="meldingen">
                      <option value="1">1 uur</option>
                    </select>
                  </p>
                  <span id="mel_count">2689</span> <span id="meldingen_parcentage">-2%</span>

                  <div  id="all_meldingen" class="">
                    <Chart2 />
                  </div>

                </div>

              </div>
            </div>

            <!--  Chart 3-->
            <div class="col-lg-4">
              <div class="card other-news box-shadow border-radius-8">
                <div class="card-content">
                  <strong><h4>Brandweer Meldingen</h4></strong>
                  <p>Total of meldingen
                    <select  name="datatablesSimple_length" id="meldingen">
                      <option value="1">1 uur</option>
                    </select>
                  </p>
                  <span id="mel_count">2689</span> <span id="meldingen_parcentage">-2%</span>

                  <div  id="all_meldingen" class="">
                   <chart3 />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import Chart1 from "@/components/Statistics/Charts/Chart1";
import Chart2 from "@/components/Statistics/Charts/Chart2";
import Chart3 from "@/components/Statistics/Charts/Chart3";
export default {
  name: "Statistics.vue",
  components: {Chart3, Chart2, Chart1},
}
</script>

<style scoped>

</style>