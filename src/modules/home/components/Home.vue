<template>  
  <layout id="home"
          :left="'vcenter hcenter'"
          :right="'vcenter hcenter'">
    <div slot="left">
      <img :src="logo"/>
      <h1>DDVERSE</h1>
      <h2>A Dungeons &amp; Dragons Session Manager</h2>
    </div>  
    <div slot="right">
      <router-view></router-view>
    </div>
  </layout>
</template>

<script>
import layout from '@/common/components/page-layout/Split'
import logo from '@/assets/aaron_icon.png'
export default {
  name: 'home',
  data() { return { logo } },
  components: { layout }
}
</script>

<style lang="less">
@import "../../../common/style/core.less";
</style>

<style lang="less" scoped>
@import "../../../common/style/utils.less";
h1, h2 {
  color: @cdark;
}
h1 {
  font-weight: normal;
  font-size: 80px;
  font-family: 'vecna';
}
h2 {
  font-size: 40px;
  font-family: 'dungeon';
}
</style>