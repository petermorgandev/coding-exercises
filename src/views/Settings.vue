<template>
  <div>
    <div class="row">
      <div class="col">
        <h3 class="my-4">Settings</h3>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col border border-success rounded-lg py-3">
        <h4 class="mb-3">User Options</h4>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="usernameInput" class="form-control">
          </div>
          <div class="form-group">
            <label for="avatar">Avatar</label>
            <select name="avatarInput" v-model="avatarInput" id="avatar" class="form-control">
              <option v-for="avatar in avatarOptions" v-bind:key="avatar.index">{{avatar}}</option>
            </select>
          </div>
          <button class="btn btn-primary" @click.prevent="updateUserSettings">Update</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col border border-danger rounded-lg py-3">
        <h4 class="mb-3">Danger Zone</h4>
        <p>These options are irreversible!</p>
        <a :href="`/api/delete/messages/${$store.state.user}`" class="btn btn-danger">Delete ALL Messages</a> &nbsp;
        <a :href="`/api/delete/user/${$store.state.user}`" class="btn btn-danger">Delete Acount</a>
      </div>
    </div>
    {{user}}
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
      avatarInput: "",
      user: ''
    };
  },
  methods: {
    async updateUserSettings() {
      try {
        let data = {
          usernameInput: this.usernameInput,
          avatarInput: this.avatarInput
        };
        await AuthenticationService.updateUserSettings(this.$store.state.user, data);
        this.$router.push({ name: "home" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  created() {
    this.usernameInput = this.$store.state.user.username;
    this.avatarInput = this.$store.state.user.avatar;
    },
};
</script>