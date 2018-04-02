<template>
  <div :class="['popup',style]" v-show="show">
    <div class="background"
         v-on:click="close"></div>
    <div class="container">
      <button class="close" v-on:click="close">X</button>      
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="controls">
        <button class="ddv-button default-transparent"
                v-on:click="close">Cancel</button>
        <button class="ddv-button dark">Confirm</button>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    show: { default: false, type: Boolean },
    style: { default: 'scroll', type: Boolean }
  },
  methods: { close() { this.$emit('close') } },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if(this.show && e.keyCode == 27) this.close()
    })
  }
}
</script>

<style lang="less" scoped>
@import '../style/utils';
.popup {
  display: flex;
  z-index: 1;
  .fixPositionFill();
  justify-content: center;
  align-items: center;
  & > .background {
    background-color: rgba(10,10,10,.62);
    .fixPositionFill();
    z-index: -1;
  }
  & > .container {
    position: relative;
    @padding: 24px;
    & > .close {
      .absPosition(@padding,@padding);
    }
    & > .content {
      min-height: 400px;
      padding: 36px 36px;
      overflow: auto;
    }
    & > .controls {
      position: relative;
      z-index: 1;
      text-align: right;
      padding: 12px 24px;
      box-shadow: 0 -1px 1px -1px rgba(0,0,0,.5);
    }
  }
}
.popup.scroll {
  & > .container {
    width: 600px;
    max-height: 61.8vh;
    background-color: @clight;
  }
}
</style>