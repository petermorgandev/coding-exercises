<template>
  <div class="bg-dark">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">143chars</a>
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
            <li
              class="nav-item"
              v-for="link in navbarLinks"
              :to="link.path"
              v-bind:key="link.index"
            >
              <router-link :to="link.path" class="nav-link">{{link.text}}</router-link>
            </li>
          </ul>
        </div>
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
        { path: "/register", text: "Register" },
        { path: "/profile", text: "Profile" },
        { path: "/new", text: "New Msg" },
        { path: "settings", text: "Settings" },
        { path: "logout", text: "Log Out" },
        { path: "login", text: "Log In" }
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