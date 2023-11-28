<template>
  <div class="row">
    <div class="col">
      <ul class="list-unstyled mt-2">
        <li class="media mb-4" v-for="message in messages" v-bind:key="message.index">
          <img :src="`avatars/${message.user.avatar}.svg`" width="64" height="64" class="mr-3">
          <div class="media-body">
            <h5 class="mt-0 mb-1">{{message.message}}</h5>Posted by
            <a :href="'#/profile/' + message.user._id">@{{message.user.username}}</a>&nbsp;
            <span
              :title="moment(message.date).format('MMMM D, YYYY h:mma')"
            >{{moment(message.date).fromNow()}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    messages: Array
  }
};
</script>