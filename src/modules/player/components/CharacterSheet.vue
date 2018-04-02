<template>
  <div id="character-sheet" class="parchment container">
    <div class="row">
      <div class="column">
        <avatarWidget></avatarWidget>
      </div>
    </div>
    <div class="row gold-left">
      <div class="column">
        <statsWidget></statsWidget>
        <equipmentWidget></equipmentWidget>
        <actionsWidget></actionsWidget>
        <spellsWidget></spellsWidget>
      </div>
      <div class="column">
        <abilitiesWidget></abilitiesWidget>
        <skillsWidget></skillsWidget>
        <inventoryWidget></inventoryWidget>
      </div>
    </div>
  </div>
</template>

<script>
import abilitiesWidget from './character-sheet/Abilities'
import skillsWidget from './character-sheet/Skills'
import inventoryWidget from './character-sheet/Inventory'
import statsWidget from './character-sheet/Stats'
import equipmentWidget from './character-sheet/Equipment'
import actionsWidget from './character-sheet/Actions'
import spellsWidget from './character-sheet/Spells'
import avatarWidget from './character-sheet/Avatar'
export default {
  name: 'character-sheet',
  data () {
    return {
      
    }
  },
  components: {
    statsWidget,
    abilitiesWidget,
    skillsWidget,
    inventoryWidget,
    equipmentWidget,
    actionsWidget,
    spellsWidget,
    avatarWidget
  }
}
</script>

<style lang="less" scoped>
@import "../../../common/style/mixins.less";

#character-sheet {
  position: relative;
  z-index: 2;
  font-size: 0;
  width: 100%;
}
#character-sheet, .column {
  padding: 5px;
}
</style>