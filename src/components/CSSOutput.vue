<template>
  <div>
    <pre>
      <code>{{styling.className}} {
        font-size: {{styling.fontSize}} px
        padding: {{styling.vPadding}}px {{styling.hPadding}}px,
        border-radius: {{styling.borderRadius}}%,
        border-width: {{styling.borderSize}}px
        border-style: {{styling.borderStyle}},
        border-color: {{styling.borderColor}},
        background-color: {{styling.bgColor}},
        color: {{styling.fontColor}},
      }</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "CSSOutput",
  props: ["styling"]
};
</script>

<style>
</style>
