import _ from 'lodash'
import componentState from '../component/state'
export default _.extend(componentState(),{
  level: 1,
  school: '',
  ritual: false,
  castingTime: '1 Action',
  components: ['V','M'],
  concentration: false,
  source: 'Players Handbook'
})

/*
LEVEL: 0-9

SCHOOL
- Abjuration
- Conjuration
- Divination
- Enchantment
- Evocation
- Illusion
- Necromancy
- Transmutation

RITUAL, CONCENTRATION: true | false

COMPONENTS
- V (verbal)
- S (somatic)
- M (material)
- F (focus)
- DF (divine focus)
- XP (experience)

CASTING TIME
- 1 Action
- 1 Bonus Action
- 1 Minute
- 10 Minutes
- 1 Hour
- 8 Hours
- 12 Hours
- 24 Hours
- Special
*/
