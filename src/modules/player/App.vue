<template>
  <div id="player">
    <inventory></inventory>
    <layout :main="'right'">
      <div slot="left">
        <character></character>
        <party :id="'party'"></party>
      </div>
      <div slot="right">
      </div>
    </layout>
  </div>
</template>

<script>
import layout from '@/common/components/page-layout/Split'
import party from './components/Party'
import character from './components/CharacterSheet'
import inventory from './components/Inventory'
export default {
  name: 'player',
  components: { layout, party, character, inventory }
}
</script>

<style lang="less">
@import "../../common/style/core.less";
#party {
  position: absolute;
  top: 0;
  left: 100%;
}
</style>