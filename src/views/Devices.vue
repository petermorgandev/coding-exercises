<template>
  <div class="devices">
    <Navbar/>

    <ul>
      <li
        v-for="device in devices"
        v-bind:key="device.id"
      >{{device.name}} - {{device.location}} - {{device.type}}</li>
    </ul>
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
