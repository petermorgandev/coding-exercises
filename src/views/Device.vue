<template>
  <div class="device">
    <Navbar/>
    <div class="container bg-white">
      <PageHeader>Device Info</PageHeader>
      <div v-if="!deviceData">
        <div class="row">
          <div class="col-sm-12">
            <h3>You have not added any devices.</h3>
          </div>
        </div>
      </div>
      <div v-else>
        <DeviceData :deviceData="deviceData"/>
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
        <MonthlyUsage :data="fakeData.tableData"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import DeviceData from "@/components/DeviceData";
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
    DeviceData,
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
</style>