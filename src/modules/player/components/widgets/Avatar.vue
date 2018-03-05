<template>
  <widget id="avatar">
    <div slot="content"
         class="avatar"
         v-bind:style="{ backgroundImage: `url('${avatar}')` }">
      <div class="health-bar"></div>
      <div class="meta">
        <h2>{{ name }}</h2>
        <h3>{{ classes }}</h3>
      </div>
    </div>
  </widget>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import widget from './Widget'
const { mapState, mapActions } = createNamespacedHelpers('/store/modules/character')
export default {
  name: 'Avatar',
  data() {
    let meta = this.$store.getters['character/getMeta'];
    let classes = _(meta.classes)
                    .map(({ classId, level }) => `${classId} (${level})`)
                    .value()
                    .join(' ')
    return {
      name: meta.name,
      race: meta.race,
      classes,
      alignment: meta.alignment,
      avatar: meta.avatar
    }
  },
  components: { widget }
}
</script>

<style scoped>
#avatar {

}
.avatar {
  position: relative;
  background-color: rgba(255,255,255,.5);
  border: 2px solid white;
  box-shadow: 2px 2px 2px -2px rgba(0,0,0,.8);
  width: 200px;
  height: 200px;
  z-index: 3;
}
.health-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 10px;
  background-color: #CC2121;
}
.meta {
  background: rgba(0,0,0,.8);
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 0;
  text-align: left;
}
.meta h2, .meta h3 {
  padding: 6px 8px;
}
.meta h2 {
  color: white;
  font-size: 18px;
}
.meta h3 {
  color: #fefefe;
  font-size: 12px; 
}
</style>