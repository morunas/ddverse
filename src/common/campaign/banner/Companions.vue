<template>
  <div class="companions">
    <companion v-for="companion in companions"
               v-bind:key="companion.id">
    </companion>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
import companion from './Companion'
export default {
  name: 'Companions',
  data () {
    return {
      name: this.$store.getters['character/getName'],
      avatar: this.$store.getters['character/getAvatar'],
      companions: this.$store.getters['campaign/getPlayers']
    }
  },
  components: { companion }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .companions {
    font-size: 0;
    z-index: 1;
  }
</style>