<template>
  <div id="character-sheet">
    <avatar></avatar>
    <div class="column short">
      <abilitiesWidget></abilitiesWidget>
      <skillsWidget></skillsWidget>
      <inventoryWidget></inventoryWidget>
    </div>
    <div class="column">
      <equipmentWidget></equipmentWidget>
      <actionsWidget></actionsWidget>
      <spellsWidget></spellsWidget>
    </div>
  </div>
</template>

<script>
import abilitiesWidget from './widgets/Abilities'
import skillsWidget from './widgets/Skills'
import inventoryWidget from './widgets/Inventory'
import equipmentWidget from './widgets/Equipment'
import actionsWidget from './widgets/Actions'
import spellsWidget from './widgets/Spells'
import avatar from './Avatar'
export default {
  name: 'character-sheet',
  data () {
    return {
      
    }
  },
  components: {
    abilitiesWidget,
    skillsWidget,
    inventoryWidget,
    equipmentWidget,
    actionsWidget,
    spellsWidget,
    avatar
  }
}
</script>

<style scoped>
#character-sheet {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 80vh;
  padding: 60px 5px 0px 5px;
  background-color: rgb(48, 49, 70);
  width: 530px;
  box-shadow: 1px -1px 6px -1px rgba(0,0,0,.6);
  font-size: 0;
  text-align: right;
}
#character-sheet .widget {
  margin-bottom: 10px;
}
.column {
  width: calc(100% - 210px);
  float: right;
  padding: 0 5px;
}
.column.short {
  width: 210px;
}
.avatar {
  position: absolute;
  right: 10px;
  top: calc(50px - 200px);
}
</style>