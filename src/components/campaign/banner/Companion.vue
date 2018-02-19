<template>
  <div class="companion"
       v-bind:style="{ backgroundImage: `url('${avatar}')` }">
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
export default {
  name: 'Companion',
  data () {
    return {
      name: this.$store.getters['character/getName'],
      avatar: this.$store.getters['character/getAvatar']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .companion {
    background: white;
    position: relative;
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-right: 1px;
    box-shadow: 1px -1px 1px -1px rgba(0,0,0,.8);
  }
  h2 {
    background: rgba(0,0,0,.8);
    color: white;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4px 6px;
    text-align: left;
  }
</style>