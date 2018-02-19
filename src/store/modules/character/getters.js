import _ from 'lodash'
import componentGetters from '../component/getters'
export default _.extend({},componentGetters,{
  getAbilityScores: state => {
    return [
      { name: 'STR', value: state.str },
      { name: 'DEX', value: state.dex },
      { name: 'CON', value: state.con },
      { name: 'INT', value: state.int },
      { name: 'WIS', value: state.wis },
      { name: 'CHA', value: state.cha }
    ]
  },
  getAvatar: state => state.avatar,
  getMeta: state => {
    return _.pick(state, [
      'name',
      'level',
      'class',
      'alignment',
      'race',
      'background'
    ]);
  }
})
