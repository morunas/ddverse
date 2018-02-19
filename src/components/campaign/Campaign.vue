<template>
  <div id="campaign">
    <banner></banner>
    <dashboard></dashboard>
  </div>
</template>

<script>
import banner from './banner/Banner';
import dashboard from './dashboard/Dashboard';
export default {
  name: 'Campaign',
  components: { banner, dashboard }
}
</script>

<style scoped>
</style>