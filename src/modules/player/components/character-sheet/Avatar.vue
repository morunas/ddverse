<template>
  <widget id="avatar" class="frame">
    <div slot="content"
         class="avatar"
         v-bind:style="{ backgroundImage: `url('${avatar}')` }">
      <div class="health-bar"></div>
      <div class="meta">
        <h2>{{ name }}</h2>
        <h3>{{ race }} {{ classes }}</h3>
      </div>
    </div>
  </widget>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import widget from '@/common/components/Widget'
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

<style lang="less" scoped>
@import "../../../../common/style/mixins.less";
@healthBarWidth: 15px;
#avatar {
  .border("grunge",7px,7px,0,transparent,black,60,'after',1);
  position: relative;
  width: 200px;
  height: 200px;
}
.avatar {
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,.62);
  z-index: 1;
}
.health-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: @healthBarWidth;
  background-color: #CC2121;
}
.meta {
  background: rgba(0,0,0,.8);
  position: absolute;
  bottom: 0;
  left: @healthBarWidth;
  right: 0;
  text-align: left;
  padding: 5px 10px 10px;
}
.meta h2, .meta h3 {
  padding: 2px 0px;
}
.meta h2 {
  color: white;
  font-size: 20px;
}
.meta h3 {
  color: #fefefe;
  font-size: 14px; 
}
</style>