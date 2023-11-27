<template>
  <lazyLoginBox/>
</template>

<script>
const lazyLoginBox = () => import("@/components/LoginBox");

export default {
  name: "login",
  components: {
    lazyLoginBox
  }
};
</script>