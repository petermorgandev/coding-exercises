<template>
  <div>
    <PageHeader>
      <h3 class="mt-4">New Message</h3>
    </PageHeader>
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
          <button class="btn btn-primary" @click.prevent="newMsg">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import PageHeader from "@/components/PageHeader";

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      messageInput: ""
    };
  },
  methods: {
    async newMsg() {
      try {
        await AuthenticationService.newMsg({
          messageInput: this.messageInput,
          user: this.$store.state.user,
          userId: this.$store.state.user
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
