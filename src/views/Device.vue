<template>
  <div class="device">
    <Navbar/>
    <p>Floor: {{deviceData.floor}}</p>
    <p>Room: {{deviceData.room}}</p>
    <p>Connected To: {{deviceData.connectedTo}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {
      deviceData: this.$store.state.devices[this.$route.params.id]
    };
  },
  name: "device",
  components: {
    Navbar
  }
};
</script>
