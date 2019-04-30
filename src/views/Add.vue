<template>
  <div class="add">
    <Navbar/>
    <form>
      <div class="form-group">
        <label for="floorInput">Floor:</label>
        <select name="" id="floorInput" class="custom-select">
          <option value="Basement">Basement</option>
          <option value="Ground Floor">Ground Floor</option>
          <option value="Second Floor">Second Floor</option>
          <option value="Attic">Attic</option>
          <option value="Outside">Outside</option>
        </select>
      </div>
      <div class="form-group">
        <label for="roomInput">Room:</label>
        <select name="" id="roomInput" class="custom-select">
          <option value="Bathroom">Bathroom</option>
          <option value="Garage">Garage</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Laundry Room">Laundry Room</option>
        </select>
      </div>
      <div class="form-group">
        <label for="connectedToInput">Connected to:</label>
        <select name="" id="connectedToInput" class="custom-select">
          <option value="Shower">Shower</option>
          <option value="Sink">Sink</option>
          <option value="Toilet">Toilet</option>
          <option value="Washing Machine">Washing Machine</option>
        </select>
      </div>

      <button v-on:click="addDevice" class="btn btn-primary">Submit</button>
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
