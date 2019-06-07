<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">class name</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="styling.className"
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">button text</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="styling.buttonText"
      >
    </div>
    <div class="form-group">
      <label for="formControlRange">Font Size:</label>
      <input
        type="range"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.fontSize"
      >
    </div>
    <div class="form-group">
      <label for="formControlRange">vertical padding:</label>
      <input
        type="range"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.vPadding"
      >
    </div>
    <div class="form-group">
      <label for="formControlRange">horizontal padding:</label>
      <input
        type="range"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.hPadding"
      >
    </div>
    <div class="form-group">
      <label for="formControlRange">border radius:</label>
      <input
        type="range"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.borderRadius"
      >
    </div>
    <div class="form-group">
      <label for="formControlRange">border size:</label>
      <input
        type="range"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.borderSize"
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">border style</label>
      <select class="form-control" id="exampleFormControlSelect1" v-model="styling.borderStyle">
        <option>none</option>
        <option>hidden</option>
        <option>dotted</option>
        <option>dashed</option>
        <option>solid</option>
        <option>double</option>
        <option>groove</option>
        <option>ridge</option>
        <option>inset</option>
        <option>outset</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">border color</label>
      <input
        type="color"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.borderColor"
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">font color</label>
      <input
        type="color"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.fontColor"
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">background color</label>
      <input
        type="color"
        class="form-control-range"
        id="formControlRange"
        v-model="styling.bgColor"
      >
    </div>
  </form>
</template>

<script>
export default {
  name: "Styler",
  props: ["styling"]
};
</script>

<style>
</style>
