import _ from 'lodash'
import componentState from '@/common/store/modules/component/state'
import avatar from '@/assets/aaron_icon.png';
import alignment from '@/utils/core/alignments'
import race from '@/utils/core/races'
import language from '@/utils/core/languages'
import classes from '@/utils/core/classes'
export default _.extend(componentState(),{
  avatar,
  hp: 27,
  ac: 14,
  init: 0,
  abilities: {
    strength: 11,
    dexterity: 13,
    constitution: 13,
    inteligence: 20,
    wisdom: 15,
    charisma: 10
  },
  proficiencies: {
    dexterity: true,
    sealth: true,
    survival: true,
    Religion: true
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
  classes: [
    {
      classId: classes.FIGHTER,
      level: 3
    }
  ],
  alignment: alignment.LAWFUL_GOOD,
  race: race.HUMAN,
  languages: [language.COMMON],
  equipment: [
    { title: 'Sword +2' },
    { title: 'Leather Armor +1' },
    { title: 'Ring of Coding' }
  ],
  treasure: 100,
  age: 25,
  height: 1.7,
  weight: 80
})