<template>
  <sidebar id="inventory-sidebar"
           v-bind:active="active"
           v-bind:id="id">
  </sidebar>
</template>

<script>
import sidebar from '@/common/components/Sidebar'
const SIDEBAR_ID = 'inventory'
export default {
  name: 'inventory-sidebar',
  components: { sidebar },
  data () { return { id: SIDEBAR_ID }},
  computed: {
    active() { return this.$store.state.ui.sidebars[SIDEBAR_ID] }
  }
}
</script>

<style scoped>
  
</style>