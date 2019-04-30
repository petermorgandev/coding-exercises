<template>
  <div class="device">
    <Navbar/>
    <p>This is the device view for {{ $route.params.id }}</p>
    <p>{{device1}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
export default {
  name: "device",
  components: {
    Navbar
  }
};
</script>
