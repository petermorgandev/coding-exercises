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
      <MonthlyUsage :data='fakeData.tableData' />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import MonthlyUsage from "@/components/MonthlyUsage";
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
    PageHeader,
    MonthlyUsage
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