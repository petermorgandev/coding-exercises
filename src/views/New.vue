<template>
  <div>
    <div class="row">
      <div class="col">
        <h3 class="mt-4">New Message</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form>
          <div class="form-group">
            <textarea
              class="form-control"
              name="messageInput"
              id="messageInput"
              v-model="messageInput"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div class="form-group">
            <input type="text" class="form-control"
              name="userId"
              id="userId"
              v-model="userId"
              placeholder="Enter your userId">
          </div>

          <button class="btn btn-primary" @click.prevent="newMsg">Send Message</button>
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
      messageInput: "",
      userId: ''
    };
  },
  methods: {
    async newMsg() {
      try {
        await AuthenticationService.newMsg({
          messageInput: this.messageInput,
          userId: this.userId,
          user: this.userId
        });
        this.$router.push({ name: "home" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style>
</style>
