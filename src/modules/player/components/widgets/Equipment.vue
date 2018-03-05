<template>
  <widget id="equipment" class="white box">
    <div slot="content" class="items">
        <div class="item" v-for="item in items">
          <div class="icon" v-if="item.icon">{{item.icon}}</div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </widget>
</template>

<script>
import widget from './Widget'
export default {
  name: 'equipment',
  data () {
    return {
      items: this.$store.getters['character/getEquipment']
    }
  },
  components: { widget }
}
</script>

<style scoped>
.items {

}
.item {
  position: relative;
  text-align: left;
}
.icon {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
}
.title {
  font-size: 16px;
  padding: 4px 0px;
}
.icon + .title {
  padding-left: 50px;
}
</style>