<template>
  <div class="sidebar"
       v-bind:class="{ active: active }">
    <div class="background" v-on:click="close"></div>
    <div class="content">
      <button class="close" v-on:click="close">X</button>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    id: { default: '', type: String },
    active: { default: false, type: Boolean }
  },
  methods: {
    close() {
      this.$store.dispatch('ui/closeSidebar', { id: this.$props.id })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/constants.less';
@import '../style/mixins.less';
.sidebar {
  position: fixed;
  z-index: 10;
  .visibilityMixin();
  & > .background {
    .fixPositionFill();
    background-color: rgba(255,255,255,.5);
    opacity: 0;
    transition: opacity .2s ease 0s;
  }
  & > .content {
    overflow-y: auto;
    position: relative;
    z-index: 1;
    min-height: 100vh;
    width: 100vh;
    max-width: 500px;
    background-color: white;
    box-shadow: 0 0 5px 5px rgba(30,30,30,.4);
    transition: transform .2s ease;
    transform: translateX(-100%) translateZ(0);
    & > .close {
      color: black;
      position: absolute;
      top: 0;
      right: 0;
      padding: 9px 12px;
      font-size: 26px;
      border: none;
      background: transparent;
      cursor: pointer;
      outline: none;
    }
  }
  &.active {
    .visibilityMixin(visible);
    & > .background { opacity: 1 }
    & > .content{ transform: translateX(0) translateZ(0) }
  }
}
</style>