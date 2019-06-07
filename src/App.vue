<template>
  <div id="app" class="container">
    <div class="row mb-4 bg-dark text-white p-3 rounded-bottom">
      <div class="col-sm-12">
        <h1>Button Styler</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-5 mb-5 mb-md-0">
        <styler :styling="styling"/>
      </div>
      <div class="col-sm-12 col-md-6 offset-md-1">
        <c-s-s-output :styling="styling" class="mb-5"/>
        <visual-view :styling="styling" class="mb-5 mb-md-0"/>
      </div>
    </div>
  </div>
</template>

<script>
import CSSOutput from "./components/CSSOutput.vue";
import Styler from "./components/Styler.vue";
import VisualView from "./components/VisualView.vue";

export default {
  name: "app",
  components: {
    CSSOutput,
    Styler,
    VisualView
  },
  data() {
    return {
      styling: {
        fontColor: "#ffffff",
        borderColor: "#aaaaaa",
        bgColor: "#bbbbbb",
        className: ".btn",
        buttonText: "Submit",
        fontSize: 18,
        vPadding: 10,
        hPadding: 24,
        borderRadius: 5,
        borderSize: 5,
        borderStyle: "solid"
      }
    };
  }
};
</script>

<style>
</style>
