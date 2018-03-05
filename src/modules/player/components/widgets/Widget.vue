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

<style scoped>
.widget {
  min-height: 20px;
  padding: 0;
  border-radius: 2px;
  overflow: hidden;
}
.widget + .widget {
  margin-top: 10px;
}
.widget.box .content {
  padding: 6px 12px;  
}
.widget.white {
  background: #fafafa;
}
.widget.bordered {
  border: 2px solid white;
}
</style>