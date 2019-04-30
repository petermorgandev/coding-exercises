<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar';
  export default {
    components: {
      Navbar
    }
  }
</script>


<style>

</style>
