<template>
  <div class="add">
    <Navbar/>
    <form>
      <div class="form-group">
        <label for="floor">Floor:</label>
        <select v-model="floor" id="floor" class="custom-select">
          <option value="Basement" selected>Basement</option>
          <option value="Ground Floor">Ground Floor</option>
          <option value="Second Floor">Second Floor</option>
          <option value="Attic">Attic</option>
        </select>
      </div>
      <div class="form-group">
        <label for="room">Room:</label>
        <select v-model="room" id="room" class="custom-select">
          <option value="Bathroom" selected>Bathroom</option>
          <option value="Garage">Garage</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Laundry Room">Laundry Room</option>
        </select>
      </div>
      <div class="form-group">
        <label for="connectedTo">Connected to:</label>
        <select v-model="connectedTo" id="connectedTo" class="custom-select">
          <option value="Shower" selected>Shower</option>
          <option value="Sink">Sink</option>
          <option value="Toilet">Toilet</option>
          <option value="Washing Machine">Washing Machine</option>
        </select>
      </div>
      <div v-if='count < 5' >
        <button v-on:click="addDeviceMethod" class="btn btn-primary">Submit</button>
      </div>
      <div v-else><button class="btn btn-danger" disabled>Device Limit Reached</button></div>
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
  data() {
    return {
      floor: "Basement",
      room: "Bathroom",
      connectedTo: "Shower"
    };
  },
  computed: {
    count() {
      return this.$store.state.deviceCount;
    }
  },
  methods: {
    addDeviceMethod: function() {
      this.$store.dispatch("addDeviceAction", {
        id: this.count,
        floor: this.floor,
        room: this.room,
        connectedTo: this.connectedTo
      });
    }
  }
};
</script>
