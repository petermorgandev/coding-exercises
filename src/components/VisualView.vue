<template>
  <div>
    <button
      :style="{
        color: styling.fontColor, 
        fontSize: styling.fontSize + 'px', 
        paddingRight: styling.hPadding + 'px', 
        paddingLeft: styling.hPadding + 'px', 
        paddingTop: styling.vPadding + 'px', 
        paddingBottom: styling.vPadding + 'px',
        borderRadius: styling.borderRadius + '%',
        borderColor: styling.borderColor,
        borderStyle: styling.borderStyle,
        borderWidth: styling.borderSize + 'px',
        backgroundColor: styling.bgColor
        }"
    >{{ styling.buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "VisualView",
  props: ["styling"]
};
</script>
