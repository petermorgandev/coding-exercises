<template>
  <div class="add">
    <Navbar />
    <p>This is the add view</p>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'add',
  components: {
    Navbar
  }
}
</script>
