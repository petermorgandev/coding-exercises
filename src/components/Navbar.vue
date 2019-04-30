<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">Water Meter</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Log In</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/devices" class="nav-link">Devices</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/devices/add" class="nav-link">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link to="devices/device/1" class="nav-link">Device 1</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>