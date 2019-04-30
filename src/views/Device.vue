<template>
  <div class="device">
    <Navbar/>
    <p>Floor: {{deviceData.floor}}</p>
    <p>Location: {{deviceData.location}}</p>
    <p>Type: {{deviceData.type}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
export default {
  computed: {
    deviceData() {
      return this.$store.state.devices[this.$route.params.id - 1];
    }
  },
  name: "device",
  components: {
    Navbar
  }
};
</script>
