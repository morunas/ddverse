<template>
  <widget id="inventory" class="box frame">
    <div slot="content">
      <button class="ddv-button dark"
              v-on:click="open">OPEN</button>
    </div>
  </widget>
</template>

<script>
import widget from '@/common/components/Widget'
export default {
  name: 'inventory',
  components: { widget },
  methods: {
    open() { this.$store.dispatch('ui/openSidebar',{ id: 'inventory' }) }
  }
}
</script>

<style scoped>
  
</style>