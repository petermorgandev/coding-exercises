<template>
  <div class="device">
    <Navbar/>
    <div class="container bg-white">
      <PageHeader>Device Info</PageHeader>
      <div v-if="!deviceData">
        <div class="row px-4">
          <div class="col">
            <h3>You have not added any devices.</h3>
          </div>
        </div>
      </div>
      <div v-else>
        <lazyDeviceData :deviceData="deviceData"/>
        <div class="row px-4">
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
        <lazyMonthlyUsage :data="fakeData.tableData"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const lazyDeviceData = () => import("@/components/DeviceData");
const lazyMonthlyUsage = () => import("@/components/MonthlyUsage");
export default {
  data() {
    return {
      deviceData: null,
      fakeData: null,
      chartData: {
        labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
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
    lazyDeviceData,
    lazyMonthlyUsage
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