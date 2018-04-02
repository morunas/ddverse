<template>
  <div class="overlay"
       v-bind:class="{ active: active }">
    <button class="close"
            v-on:click="close">X</button>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overlay',
  props: {
    id: { default: '', type: String },
    active: { default: false, type: Boolean }
  },
  methods: {
    close() { this.$store.dispatch('ui/closeOverlay', { id: this.$props.id }) }
  }
}
</script>

<style lang="less" scoped>
.overlay {
  background-color: rgba(0,0,0,.5);
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  transition: .2s ease 0;
  transform: translateX(-100%) translateZ(0);
  &.active {
    transform: translateX(0) translateZ(0);
  }
  & .content {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    background-color: white;
    box-shadow: 0 0 5px 5px rgba(30,30,30,.4);
  }
}
</style>