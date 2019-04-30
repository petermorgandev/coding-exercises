<template>
  <div class="login text-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="../assets/pipe.svg" class="mt-5 mb-5">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <form>
            <input type="text" name="" id="" placeholder="Username" class="form-control">
            <input type="password" name="" id="" placeholder="Password" class="form-control mb-3">
            <a href="#/devices" class="btn btn-lg btn-primary btn-block">Log In</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style scoped>
  form {
    width: 100%;
    max-width: 350px;
    margin: auto;
    padding: 20px;
  }

  img {
    width: 200px;
    height: 200px;
  }
</style>