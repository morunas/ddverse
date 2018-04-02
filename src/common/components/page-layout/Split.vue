<template>
  <page>
    <container slot="body">
      <row :class="'gold-' + main">
        <column :class="['left',left]"><slot name="left"></slot></column>
        <column :class="['right',right]"><slot name="right"></slot></column>
      </row>
    </container>
  </page>
</template>

<script>
import page from './Base'
import container from '../layout/Container'
import row from '../layout/Row'
import column from '../layout/Column'
export default {
  name: 'Split',
  props: {
    main: { default: 'left', type: String },
    left: { default: '', type: String },
    right: { default: '', type: String }
  },
  components: { page, container, row, column }
}
</script>

<style lang="less" scoped>
@import "../../style/utils.less";
.left, .right {
  position: relative;
  min-height: 100vh;
  padding: 36px;
}
.left {
  .border("grunge",10px,10px,0,transparent,black,60,'before',-1);
  z-index: 1;
  & > div { position: relative }
}
.right {
  background-color: @cdark;
}
.small {
  width: 38.2%;  
}
.large {
  width: 61.8%;
}
</style>