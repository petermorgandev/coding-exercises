<template>
  <div class="device">
    <Navbar />
    <p>This is the device view</p>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'device',
  components: {
    Navbar
  }
}
</script>
