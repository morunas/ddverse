<template>
  <div class="companion"
       v-bind:style="{
         backgroundImage: `url('${avatar}')`,
         backgroundSize: '120%',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: '10px 10px'
       }">
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

<style lang="less" scoped>
@import "../../../common/style/mixins.less";
.companion {
  background: rgba(255,255,255,.6);
  position: relative;
  width: 60px;
  height: 60px;
  display: inline-block;
  margin-right: 1px;
  box-shadow: 1px -1px 1px -1px rgba(0,0,0,.8);
  .border("grunge",5px,5px,0,transparent,black,40);
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