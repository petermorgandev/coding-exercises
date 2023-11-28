<template>
  <div>
    <PageHeader>Recent Messages</PageHeader>
    <HomeMessages :messages="messages.data"/>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import PageHeader from "@/components/PageHeader";
import HomeMessages from "@/components/HomeMessages";

export default {
  components: {
    PageHeader,
    HomeMessages
  },
  data() {
    return {
      loggedIn: this.$store.state.isUserLoggedIn,
      messages: ""
    };
  },
  async created() {
    this.messages = await AuthenticationService.getAll();
  }
};
</script>