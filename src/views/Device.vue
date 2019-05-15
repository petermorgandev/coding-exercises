<template>
  <div class="device">
    <Navbar/>
    <div class="container bg-white">
      <PageHeader>Device Info</PageHeader>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <ul class="list-group mb-3 list-group-flush">
                <li class="list-group-item">
                  <h4>Floor:</h4>
                  <p class="lead">{{deviceData.floor}}</p>
                </li>
                <li class="list-group-item">
                  <h4>Room:</h4>
                  <p class="lead">{{deviceData.room}}</p>
                </li>
                <li class="list-group-item" style="border-bottom:none">
                  <h4>Connected To:</h4>
                  <p class="lead">{{deviceData.connectedTo}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <h2 class>Weekly Usage</h2>
          <chartist
            type="Line"
            ratio="ct-major-twelfth"
            :data="chartData"
            :options="chartOptions"
            class="my-4"
          ></chartist>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
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
import PageHeader from "@/components/PageHeader";
export default {
  data() {
    return {
      deviceData: null,
      fakeData: null,
      chartData: {
        labels: ["A", "B", "C", "d", "e", "f"],
        series: null
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
    Navbar,
    PageHeader
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.deviceData = this.$store.state.devices[this.$route.params.id];
      this.fakeData = this.$store.state.fakeData[this.$route.params.id];
      this.chartData.series = [
        this.$store.state.fakeData[this.$route.params.id].chartData
      ];
    }
  }
};
</script>

<style scoped>
.bg-boxes {
  background-color: #0f434f;
}

.card {
  border: none;
}
</style>