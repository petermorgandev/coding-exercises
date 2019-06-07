<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-6">
        <styler :styling="styling"/>
      </div>
      <div class="col-6">
        <c-s-s-output :styling="styling"/>
        <visual-view :styling="styling"/>
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
