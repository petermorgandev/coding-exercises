<template>
  <div>
    <div class="row">
      <div class="col">
        <h3 class="mt-4">
          {{user.data[0].username}}'s Profile
          <small v-if="messages.data.length === 1">{{messages.data.length}} Message</small>
          <small v-else>{{messages.data.length}} Messages</small>
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul class="list-unstyled mt-2">
          <li class="media mb-4" v-for="message in messages.data" v-bind:key="message.index">
            <img
              :src='"avatars/" + message.user.avatar + ".svg"'
              width="64"
              height="64"
              class="mr-3"
            >
            <div class="media-body">
              <h5 class="mt-0 mb-1">{{message.message}}</h5>Posted by
              <a :href="'#/profile/' + message.user._id">@{{message.user.username}}</a>&nbsp;
              <span :title="moment(message.date).format('MMMM D, YYYY h:mma')">{{moment(message.date).fromNow()}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      loggedIn: this.$store.state.isUserLoggedIn,
      user: '',
      messages: ''
    };
  },
  async created() {
    this.messages = await AuthenticationService.getUserMessages(this.$route.params.userId);
  
    this.user = await AuthenticationService.getUserSettings(this.$route.params.userId);
    },
};
</script>
