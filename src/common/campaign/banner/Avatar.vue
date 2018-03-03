<template>
  <div class="avatar"
       v-bind:style="{ backgroundImage: `url('${avatar}')` }">
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
export default {
  name: 'Avatar',
  data () {
    return {
      name: this.$store.getters['character/getName'],
      avatar: this.$store.getters['character/getAvatar']
    }
  }
}
</script>

<style scoped>
  .avatar {
    background: white;
    border: 6px solid white;
    box-shadow: 2px 2px 2px -2px rgba(0,0,0,.8);
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: -50px;
    z-index: 3;
  }
  h2 {
    background: rgba(0,0,0,.8);
    color: white;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    text-align: left;
  }
</style>