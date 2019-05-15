<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <ul class="list-group mb-3 list-group-flush">
            <li class="list-group-item">
              <h4>Floor:</h4>
              <p class="lead">{{deviceData.floor}}</p>
            </li>
            <li class="list-group-item">
              <h4>Room:</h4>
              <p class="lead">{{deviceData.room}}</p>
            </li>
            <li class="list-group-item" style="border-bottom:none">
              <h4>Connected To:</h4>
              <p class="lead">{{deviceData.connectedTo}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceData",
  props: {
    deviceData: Object
  }
};
</script>

<style scoped>
.card {
  border: none;
}
</style>
