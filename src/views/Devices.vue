<template>
  <div class="devices">
    <Navbar/>
    <div class="container bg-white">
      <PageHeader>Connected Devices</PageHeader>
      <div class="row">
        <div v-if="count === 0">
          <div class="col-sm-12">
            <h3>You have not added any devices.</h3>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4"
          v-for="device in devices"
          v-bind:key="device.id"
        >
          <div class="card shadow-sm">
            <div class="card-body">
              <ul class="list-group mb-3 list-group-flush">
                <li class="list-group-item">
                  <h4>Floor:</h4>
                  <p class="lead">{{device.floor}}</p>
                </li>
                <li class="list-group-item">
                  <h4>Room:</h4>
                  <p class="lead">{{device.room}}</p>
                </li>
                <li class="list-group-item" style="border-bottom:none">
                  <h4>Connected To:</h4>
                  <p class="lead">{{device.connectedTo}}</p>
                </li>
              </ul>
              <div class="d-flex justify-content-between align-items-center">
                <a
                  :href="`#/device/${device.id}`"
                  class="card-link btn btn-lg btn-custom"
                >Device Info</a>
                <span class="text-success">Connected</span>
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
import PageHeader from "@/components/PageHeader";
export default {
  computed: {
    devices() {
      return this.$store.state.devices;
    },
    count() {
      return this.$store.state.deviceCount;
    }
  },
  name: "devices",
  components: {
    Navbar,
    PageHeader
  }
};
</script>
