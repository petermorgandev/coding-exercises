<template>
  <div class="container">
    <div class="bg-custom row">
      <div class="col">
        <nav class="navbar navbar-expand navbar-dark">
          <div class="container">
            <span class="navbar-brand">
              <img src="../assets/pipe.svg" width="30" height="30" alt="logo"> Water Meter
            </span>
            <div class="navbar-nav mr-auto">
              <router-link
                v-for="link in navbarLinks"
                :to="link.path"
                v-bind:key="link.index"
                class="nav-link nav-item"
              >{{link.text}}</router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarLinks: [
        { path: "/devices", text: "Devices" },
        { path: "/add", text: "Add", icon: "fa-plus" }
      ]
    };
  }
};
</script>

<style>
.navbar-dark .navbar-nav > .router-link-active {
  color: white;
}
</style>
