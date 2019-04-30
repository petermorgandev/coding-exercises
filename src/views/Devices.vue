<template>
  <div class="devices">
    
    <router-view></router-view>
    <ul>
      <li v-for='device in devices' v-bind:key='device.id'>{{device.name}} - {{device.location}} - {{device.type}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    devices(){
      return this.$store.state.devices;
    }
  },
  name: "devices",
  components: {
   
  }
};
</script>
