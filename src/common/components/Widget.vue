<template>
  <div class="widget">
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widget',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style/mixins.less";
.widget {
  min-height: 20px;
  padding: 0;
  border-radius: 2px;
  * {
    font-family: 'vecna' !important;
    font-size: 10px;
    font-size: 1rem;
  }
}
.frame {
  //background-image: url('../style/assets/tan-parchment.jpg');
}
.widget + .widget {
  margin-top: 10px;
}
.widget.box {
}
.widget.box .content {
  position: relative;
  padding: 6px 12px;
}
.widget.bordered {
  border: 2px solid white;
}
</style>