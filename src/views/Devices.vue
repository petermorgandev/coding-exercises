<template>
  <div class="devices">
    <Navbar/>
    <div class="card" v-for="device in devices" v-bind:key="device.id">
      <div class="card-body">
        <h5 class="card-title">{{device.floor}} {{device.room}} {{device.connectedTo}}</h5>
        <a :href="`#/device/${device.id}`" class="card-link btn btn-primary">Device Info</a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  computed: {
    devices() {
      return this.$store.state.devices;
    }
  },
  name: "devices",
  components: {
    Navbar
  }
};
</script>
