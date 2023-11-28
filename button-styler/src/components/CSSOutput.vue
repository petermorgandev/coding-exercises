<template>
  <div class="p-4 rounded-lg bg-light">
    <pre class><code><span class="cssSelector">{{styling.className}}</span> {
  <span class="cssProperty">font-size</span>: <span class="cssPropertyValue">{{styling.fontSize}}px</span>;
  <span class="cssProperty">padding</span>: <span class="cssPropertyValue">{{styling.vPadding}}px {{styling.hPadding}}px</span>;
  <span class="cssProperty">border-radius</span>: <span class="cssPropertyValue">{{styling.borderRadius}}%</span>;
  <span class="cssProperty">border-width</span>: <span class="cssPropertyValue">{{styling.borderSize}}px</span>;
  <span class="cssProperty">border-style</span>: <span class="cssPropertyValue">{{styling.borderStyle}}</span>;
  <span class="cssProperty">border-color</span>: <span class="cssPropertyValue">{{styling.borderColor}}</span>;
  <span class="cssProperty">color</span>: <span class="cssPropertyValue">{{styling.fontColor}}</span>;
  <span class="cssProperty">background-color</span>: <span class="cssPropertyValue">{{styling.bgColor}}</span>;
}</code></pre>
  </div>
</template>

<script>
export default {
  name: "CSSOutput",
  props: ["styling"]
};
</script>

<style scoped>
.cssSelector {
  color: rgb(14, 111, 175);
}
.cssProperty {
  color: rgb(75, 27, 250);
}
.cssPropertyValue {
  color: rgb(210, 97, 238);
}
</style>
