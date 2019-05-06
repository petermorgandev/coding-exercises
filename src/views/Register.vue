<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="username" placeholder v-model="usernameInput">
    <br>
    <input type="password" name="password" id v-model="passwordInput">
    <br>
    <input type="text" name id v-model="avatarInput">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
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
        })
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
}
</script>

<style scoped>
</style>
