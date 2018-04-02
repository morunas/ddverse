<template>
  <div :class="['container',{center:center}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container',
  props: ['center']
}
</script>

<style lang="less" scoped>
</style>