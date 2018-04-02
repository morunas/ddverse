<template>
  <widget id="stats" class="no-padding">
    <div slot="content" class="columns">
      <div class="column" v-for="stat in stats">
        <div class="stat">
          <div class="title">{{ stat.title }}</div>
          <div class="value">{{ stat.value }}</div>
        </div>
      </div>
    </div>
  </widget>
</template>

<script>
import widget from '@/common/components/Widget'
export default {
  name: 'stats',
  data () {
    return {
      stats: [
        { title: 'Armor class', value: 14 },
        { title: 'Initiative', value: '+4' },
        { title: 'Speed', value: 30 + 'ft' }
      ]
    }
  },
  components: { widget }
}
</script>

<style lang="less" scoped>
@import '../../../../common/style/mixins.less';
.columns {
  font-size: 0;
  column-count: 3;
  column-gap: 10px;
}
.stat {
  padding: 19px 0;
}
.title, .value {
  padding: 5px;
  text-align: center;
}
.title {
  font-size: 12px;
}
.value {
  font-size: 22px;
}
</style>