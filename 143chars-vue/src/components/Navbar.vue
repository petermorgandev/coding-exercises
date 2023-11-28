<template>
  <div class="bg-dark">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/" v-if="!$store.state.isUserLoggedIn">143chars</router-link>
        <router-link class="navbar-brand" to="/home" v-if="$store.state.isUserLoggedIn">143chars</router-link>
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
            <li class="nav-item" v-if="!$store.state.isUserLoggedIn">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item" v-if="$store.state.isUserLoggedIn">
              <router-link :to='`/profile/${$store.state.user}`' class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item" v-if="$store.state.isUserLoggedIn">
              <router-link to="/new" class="nav-link">New Msg</router-link>
            </li>
            <li class="nav-item" v-if="$store.state.isUserLoggedIn">
              <router-link to="/settings" class="nav-link">Settings</router-link>
            </li>
            <li class="nav-item" v-if="$store.state.isUserLoggedIn">
              <a href="#" @click.prevent="logOut" class="nav-link">Log Out</a>
            </li>
            <li class="nav-item" v-if="!$store.state.isUserLoggedIn">
              <router-link to="/login" class="nav-link">Log In</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Navbar",

  methods: {
    logOut: async function() {
      this.$store.state.user = "";
      this.$store.state.isUserLoggedIn = false;
      await AuthenticationService.logOut();
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style>
.navbar-dark .navbar-nav > .router-link-active {
  color: white;
}
</style>