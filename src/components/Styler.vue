<template>
  <form>
    <div class="form-group">
      <label for="className">CSS Class Name</label>
      <input
        type="text"
        class="form-control"
        id="className"
        placeholder="Add a CSS class name"
        v-model="styling.className"
      >
    </div>
    <div class="form-group">
      <label for="buttonText">Button Text</label>
      <input
        type="text"
        class="form-control"
        id="buttonText"
        placeholder="Add button preview text"
        v-model="styling.buttonText"
      >
    </div>
    <div class="form-group">
      <label for="fontSize">Font Size:</label>
      <input
        type="range"
        class="form-control-range"
        id="fontSize"
        min="10"
        max="50"
        v-model="styling.fontSize"
      >
    </div>
    <div class="form-group">
      <label for="vPadding">Vertical Padding:</label>
      <input
        type="range"
        class="form-control-range"
        id="vPadding"
        min="0"
        max="50"
        v-model="styling.vPadding"
      >
    </div>
    <div class="form-group">
      <label for="hPadding">Horizontal Padding:</label>
      <input
        type="range"
        class="form-control-range"
        id="hPadding"
        min="0"
        max="50"
        v-model="styling.hPadding"
      >
    </div>
    <div class="form-group">
      <label for="borderRadius">Border Radius:</label>
      <input
        type="range"
        class="form-control-range"
        id="borderRadius"
        min="0"
        max="50"
        v-model="styling.borderRadius"
      >
    </div>
    <div class="form-group">
      <label for="borderSize">Border Size:</label>
      <input
        type="range"
        class="form-control-range"
        id="borderSize"
        min="0"
        max="20"
        v-model="styling.borderSize"
      >
    </div>
    <div class="form-group">
      <label for="borderStyle">Border Style</label>
      <select class="form-control" id="borderStyle" v-model="styling.borderStyle">
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
      <label for="borderColor">Border Color</label>
      <input type="color" class="form-control-range" id="borderColor" v-model="styling.borderColor">
    </div>
    <div class="form-group">
      <label for="fontColor">Font Color</label>
      <input type="color" class="form-control-range" id="fontColor" v-model="styling.fontColor">
    </div>
    <div class="form-group">
      <label for="bgColor">Background Color</label>
      <input type="color" class="form-control-range" id="bgColor" v-model="styling.bgColor">
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
