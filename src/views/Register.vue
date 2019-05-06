<template>
  <div>
    <div class="row">
      <div class="col">
        <h3 class="mt-4">Register</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your desired username"
              v-model="usernameInput"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your desired password"
              v-model="passwordInput"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="avatar">Avatar</label>
            <select name="avatarInput" v-model="avatarInput" id="avatar" class="form-control">
              <option v-for="avatar in avatarOptions" v-bind:key="avatar.index">{{avatar}}</option>
            </select>
          </div>
          <button class="btn btn-primary" @click.prevent="register">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      avatarOptions: [
        "coolshades",
        "donut",
        "drums",
        "gnome",
        "plumber",
        "robot",
        "rugby",
        "sailboat",
        "skier",
        "superhero"
      ],
      usernameInput: "",
      passwordInput: "",
      avatarInput: "coolshades"
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          usernameInput: this.usernameInput,
          passwordInput: this.passwordInput,
          avatarInput: this.avatarInput
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style>
</style>
