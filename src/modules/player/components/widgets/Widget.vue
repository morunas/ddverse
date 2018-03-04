<template>
  <div class="widget">
    <slot name="content"></slot>
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
  min-height: 120px;
  padding: 6px 10px;
  background: #fafafa;
}
</style>