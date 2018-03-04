<template>
  <layout id="player">
    <div slot="header">
      <party class="party"></party>
    </div>
    <div slot="body">
      <character></character>
    </div>
  </layout>
</template>

<script>
import layout from '@/common/components/layout/Dashboard'
import party from './components/Party'
import character from './components/CharacterSheet'
export default {
  name: 'player',
  components: { layout, party, character }
}
</script>

<style scoped>
.party {
  position: absolute;
  left: 20px;
  bottom: 0;
  font-size: 0;
}
</style>
