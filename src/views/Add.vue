<template>
  <div class="add">
    <Navbar/>
    <p>This is the add view</p>
    <form>
      <label for>Device Name</label>

      <input type="text">

      <button v-on:click="addDevice">Submit</button>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "add",
  components: {
    Navbar
  },
  methods: {
    addDevice: function() {
      this.$store.dispatch("addDevice");
    }
  }
};
</script>
