<template>
  <div class="devices">
    <Navbar />
    <p>This is the devices view</p>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'devices',
  components: {
    Navbar
  }
}
</script>
