<template>
  <page>
    <div id="body" slot="body">
      <div class="container">
        
        <slot name="body"></slot>

      </div>
    </div>
  </page>
</template>

<script>
import page from './Base'
export default {
  name: 'Simple',
  data() { return {} },
  components: { page }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: 16vh;
}
</style>

<style>
html {
  background: url('~@/assets/banner-background.png');
}
</style>