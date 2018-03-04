import _ from 'lodash'
import componentState from '../component/state'
import avatar from '../../../assets/aaron_icon.png';
export default _.extend(componentState(),{
  avatar,
  hp: 27,
  ac: 14,
  init: 0,
  speed: 30,
  abilities: {
    strength: 11,
    dexterity: 13,
    constitution: 13,
    inteligence: 8,
    wisdom: 15,
    charisma: 10
  },
  proficiencies: {
    dexterity: true,
    sealth: true,
    survival: true
  },
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