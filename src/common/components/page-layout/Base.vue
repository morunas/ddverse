<template>
  <div class="container">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default { name: 'Base' }
</script>

<style lang="less">
@import "../../style/core.less";
</style>