<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info">
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
          <li class="nav-item" v-for="link in navbarLinks" v-bind:key="link.index">
            <router-link :to="link.path" class="nav-link">{{link.text}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarLinks: [
        { path: "/", text: "Log In" },
        { path: "/devices", text: "Devices" },
        { path: "/add", text: "Add", icon: 'fa-plus' }
      ]
    };
  }
};
</script>