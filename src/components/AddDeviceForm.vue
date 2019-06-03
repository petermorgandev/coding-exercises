<template>
  <div class="row px-4">
    <form class="col">
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
      <div v-if="count < 6">
        <button v-on:click.prevent="addDeviceMethod" class="btn btn-custom mt-2 mb-4">Submit</button>
      </div>
      <div v-else>
        <button class="btn btn-danger mt-2 mb-4" disabled>Device Limit Reached</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddDeviceForm",
  data() {
    return {
      floor: "Basement",
      room: "Bathroom",
      connectedTo: "Shower"
    };
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
  },
  computed: {
    count() {
      return this.$store.state.deviceCount;
    }
  }
};
</script>

<style scoped>
form {
  height: 100%;
}
</style>