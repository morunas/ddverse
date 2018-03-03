<template>
  <div class="meta widget short">
    <h1>{{ meta.race }} {{ meta.class }} ({{ meta.level }})</h1>
    <h3>{{ meta.alignment }}</h3>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
export default {
  name: 'Meta',
  data () {
    return {
      meta: this.$store.getters['character/getMeta']
    }
  }
}
</script>

<style scoped>
  .meta {
    text-align: left;
  },
  h1 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 14px;
    margin-bottom: 0;
  }
</style>
