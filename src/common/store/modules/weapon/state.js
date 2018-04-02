import _ from 'lodash'
import itemState from '../item/state'
export default _.extend(itemState(),{
  damage: { amount: '1d8', type: 'slashing' },
  bonuses: []
})

/*
WEAPON TYPE
- S

WEAPON PROPERTIES
- Light
- Heavy
- Finesse
- Thrown
- Versatile
- Ammunition
- Loading
- Two-handed
- Reach
- Special

BONUSES EXAMPLES
{ damage: { amount: '1d8', type: 'fire', src: '__ref__' } }
{ onHit: "" }
*/