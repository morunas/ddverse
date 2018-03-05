<template>
  <div id="character-sheet">
    <div class="column ">
      <statsWidget></statsWidget>
      <equipmentWidget></equipmentWidget>
      <actionsWidget></actionsWidget>
      <spellsWidget></spellsWidget>
    </div>
    <div class="column short">
      <avatarWidget></avatarWidget>
      <abilitiesWidget></abilitiesWidget>
      <skillsWidget></skillsWidget>
      <inventoryWidget></inventoryWidget>
    </div>
  </div>
</template>

<script>
import abilitiesWidget from './widgets/Abilities'
import skillsWidget from './widgets/Skills'
import inventoryWidget from './widgets/Inventory'
import statsWidget from './widgets/Stats'
import equipmentWidget from './widgets/Equipment'
import actionsWidget from './widgets/Actions'
import spellsWidget from './widgets/Spells'
import avatarWidget from './widgets/Avatar'
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

<style scoped>
#character-sheet {
  position: relative;
  min-height: 80vh;
  background-color: rgb(48, 49, 70);
  width: 530px;
  box-shadow: 1px -1px 6px -1px rgba(0,0,0,.6);
  font-size: 0;
}
#character-sheet, .column {
  padding: 5px;
}
.column {
  width: calc(100% - 210px);
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.column.short {
  width: 210px;
  top: -170px;
}
</style>