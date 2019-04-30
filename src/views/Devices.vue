<template>
  <div class="devices">
    <Navbar/>
    
    <router-view></router-view>
    this is after the router {{sharedState}}
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "devices",
  components: {
    Navbar
  },
  data() {
    return {
      device1: "test"
    };
  }
};
</script>
