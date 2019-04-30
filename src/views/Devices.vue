<template>
  <div class="devices">
    <Navbar/>
    
    <router-view></router-view>
    <ul>
      <li v-for='device in devices' v-bind:key='device.id'>{{device.name}} - {{device.location}} - {{device.type}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  computed: {
    devices(){
      return this.$store.state.devices;
    }
  },
  name: "devices",
  components: {
    Navbar
  }
};
</script>
