<template>
  <div class="row justify-content-center p-4">
    <div class="col">
      <h1>
        <slot></slot>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader"
};
</script>