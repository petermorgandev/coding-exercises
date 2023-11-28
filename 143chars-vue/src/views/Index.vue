<template>
  <div>
    <PageHeader>What is 143chars?</PageHeader>
    <div class="row">
      <div class="col">
        <p>
          143chars-vue is a Vue.js client for the
          <a href="https://github.com/PeterMorganGH/143chars#api">143chars REST API</a>. It has the same functionality as the 143chars front end. However, it uses the REST API for database communication and Vue.js instead of vanilla JavaScript.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";

export default {
  components: {
    PageHeader
  }
};
</script>
