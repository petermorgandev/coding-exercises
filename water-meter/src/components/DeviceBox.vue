<template>
  <div class="col-sm-12 mb-4">
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
          <a :href="`#/device/${device.id}`" class="card-link btn btn-lg btn-custom">Device Info</a>
          <span class="text-success">Connected</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    device: Object
  }
};
</script>

<style>
</style>
