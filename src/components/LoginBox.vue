<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <div class="loginBox mt-5 pt-5 px-3">
          <img alt="logo" src="../assets/pipe.svg" class="mb-5">
          <h1 class="h3 mb-4 font-weight-normal">Please sign in</h1>
          <form class="p-3">
            <input type="text" placeholder="Username" class="form-control">
            <input type="password" placeholder="Password" class="form-control mb-4">
            <a href="#/add" class="btn btn-lg btn-custom btn-block">Log In</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox"
};
</script>

<style scoped>
form {
  width: 100%;
}

img {
  width: 200px;
  height: 200px;
}

.loginBox {
  background-color: white;
  max-width: 350px;
  margin: auto;
}
</style>
