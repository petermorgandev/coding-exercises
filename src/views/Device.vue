<template>
  <div class="device">
    <Navbar/>
    <div class="container bg-white">
      <div class="row py-4">
        <div class="col">
          <h1>Device Info</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>Floor: {{deviceData.floor}}</p>
          <p>Room: {{deviceData.room}}</p>
          <p>Connected To: {{deviceData.connectedTo}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2>Weekly Usage</h2>
          <chartist type="Line" ratio="ct-major-twelfth" :data="chartData" :options="chartOptions"></chartist>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Monthly Usage</h2>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Water Used (Gallons)</th>
                <th scope="col">Monthly Comparison</th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row" v-for="tableRow in fakeData.tableData" v-bind:key="tableRow.id">
                <td>{{tableRow.month}} 2019</td>
                <td>{{tableRow.usage}}</td>
                <td>{{tableRow.change}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {
      deviceData: this.$store.state.devices[this.$route.params.id],
      fakeData: this.$store.state.fakeData[this.$route.params.id],
      chartData: {
        labels: ["A", "B", "C", "d", "e", "f"],
        series: [[5, 4, 5, 1, 3, 2]]
      },
      chartOptions: {
        lineSmooth: true,
        fullWidth: true,
        axisY: {
          onlyInteger: true,
          offset: 20
        }
      }
    };
  },
  name: "device",
  components: {
    Navbar
  }
};
</script>
