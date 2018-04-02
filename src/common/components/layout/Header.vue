<template>
  <row :class="'header'">
    <slot></slot>
  </row>
</template>

<script>
import row from './Row'
export default {
  name: 'header',
  components: { row }
}
</script>

<style lang="less" scoped>
@import '../../style/utils.less';
.header {
  position: relative; 
  &::after {
    content: " ";
    .absPositionBottom();
    border-top: 1px solid @cdark;
  }
}
</style>