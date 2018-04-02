import _ from 'lodash'
import componentState from '../component/state'
export default _.extend(componentState(),{
  group: '',
  modifiers: {},
  age: '',
  alignment: '',
  size: '',
  speed: '30ft',
  languages: [],
  feats: []
})

/*
GROUP: for example dwarves (for both Dwarf and Hill Dwarf)
MODIFIERS: { str: 1, cha: -1 }
SIZE:
- tiny
- small
- medium
- large
- huge
- gargantuan
*/