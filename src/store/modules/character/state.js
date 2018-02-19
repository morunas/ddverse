import _ from 'lodash'
import componentState from '../component/state'
import avatar from '../../../assets/aaron_icon.png';
export default _.extend(componentState(),{
  avatar,
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  hp: 10,
  ac: 10,
  init: 0,
  speed: 30,
  abilities: [],
  feats: [],
  spells: {
    known: [],
    prepared: [],
    slots: [],
    saveDC: [],
    attackBonus: []
  },
  background: 'Nothing much',
  class: 'Fighter',
  level: 1,
  alignment: 'Lawful Good',
  race: 'Human',
  languages: ['Common'],
  equipment: [],
  treasure: 100,
  age: 25,
  height: 1.7,
  weight: 80
})