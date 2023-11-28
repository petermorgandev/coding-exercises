<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  
  // @ is an alias to /src
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
</style>
