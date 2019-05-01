<template>
  <div class="devices">
    <Navbar/>
    <div class="container bg-white">
      <div class="row py-4">
        <div class="col">
          <h1>Connected Devices</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mb-4" v-for="device in devices" v-bind:key="device.id">
          <div class="card shadow-sm">
            <div class="card-body">
              <ul class="list-group mb-3 list-group-flush">
                <li class="list-group-item">Floor: {{device.floor}}</li>
                <li class="list-group-item">Room: {{device.room}}</li>
                <li
                  class="list-group-item"
                  style="border-bottom:none"
                >Connected To: {{device.connectedTo}}</li>
              </ul>
              <div class="d-flex justify-content-between align-items-center">
                <a
                  :href="`#/device/${device.id}`"
                  class="card-link btn btn-sm btn-custom"
                >Device Info</a>
                <small class="text-success">Connected</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  computed: {
    devices() {
      return this.$store.state.devices;
    }
  },
  name: "devices",
  components: {
    Navbar
  }
};
</script>
