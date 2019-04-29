<template>
  <div class="home">
    <Navbar />
    <p>This is the login page</p>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'login',
  components: {
    Navbar
  }
}
</script>