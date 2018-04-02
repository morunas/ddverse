import _ from 'lodash'
import componentGetters from '@/common/store/modules/component/getters'
import { abilitiesMeta, modifier, abilitySave, modToString } from '@/utils/core/abilities'
import { calculate as calculateSkills } from '@/utils/core/skills'

export default _.extend({},componentGetters,{

  getAbilityScores: state => {
    return _(abilitiesMeta).map(ability => ({
      name: ability.title.toUpperCase(),
      value: state.abilities[ability.id],
      mod: modToString(modifier(state.abilities[ability.id])),
      save: modToString(abilitySave({ state, id: ability.id }))
    })).value()
  },

  getSkills: state => calculateSkills( state ),

  getAvatar: state => state.avatar,

  getMeta: state => _.pick(state, [
    'name',
    'level',
    'classes',
    'alignment',
    'race',
    'background',
    'avatar'
  ]),

  getEquipment: state => state.equipment

})
