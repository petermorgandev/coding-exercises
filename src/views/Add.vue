<template>
  <div class="add">
    <p>This is the add view</p>
    <form>
      <label for="">Device Name</label>

      <input type="text">

      <button v-on:click='addDevice'>Submit</button>
    </form>
  </div>
</template>

<script>


export default {
  name: 'add',
  components: {
    
  
  },
  methods: {
    addDevice: function(){
      this.$store.dispatch('addDevice');
    }

  }
}
</script>
