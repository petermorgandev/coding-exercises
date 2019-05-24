<template>
  <div class="devices">
    <Navbar/>
    <div class="container bg-white">
      <PageHeader>Connected Devices</PageHeader>
      <div class="row">
        <div v-if="count === 0" id="count0">
          <div class="col-sm-12">
            <h3>You have not added any devices.</h3>
          </div>
        </div>
        <lazyAddDeviceBox v-for="device in devices" v-bind:key="device.id" :device="device"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
const lazyAddDeviceBox = () => import("@/components/DeviceBox");

export default {
  computed: {
    devices() {
      return this.$store.state.devices;
    },
    count() {
      return this.$store.state.deviceCount;
    }
  },
  name: "devices",
  components: {
    Navbar,
    PageHeader,
    lazyAddDeviceBox
  }
};
</script>
