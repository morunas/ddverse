import _ from 'lodash'
import componentState from '../component/state'
export default _.extend(componentState(),{
  hitdice: '1d10',
  proficiencies: {
  	armor: [],
  	weapons: [],
  	tools: [],
  	saves: [],
  	skills: []
  },
  startingEquipment: [],
  levels: {
  	"0": { pb: 2, features: [] }
  },
  spells: {
  	"0": { cantripsKnown: 0, spellslots: [] }
  },
  spellcastingAbility: 'int'
})
