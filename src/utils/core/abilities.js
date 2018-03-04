const STR = 'strength';
const DEX = 'dexterity';
const CON = 'constitution';
const INT = 'inteligence';
const WIS = 'wisdom';
const CHA = 'charisma';

const ids = { STR, DEX, CON, INT, WIS, CHA }

const abilities = {
  strength: { id: STR, title: 'Str', longTitle: 'STRENGTH' },
  dexterity: { id: DEX, title: 'Dex', longTitle: 'DEXTERITY' },
  constitution: { id: CON, title: 'Con', longTitle: 'CONSTITUTION' },
  inteligence: { id: INT, title: 'Int', longTitle: 'INTELIGENCE' },
  wisdom: { id: WIS, title: 'Wis', longTitle: 'WISDOM' },
  charisma: { id: CHA, title: 'Cha', longTitle: 'CHARISMA' }
}

const modifier = (score) => Math.floor((score - 10)/2)
const modToString = (mod) => (mod>=0?'+':'')+mod
const abilitySave = ({ state, id }) => modifier(state.abilities[id])

export {
  modifier,
  modToString,
  abilitySave,
  abilities,
  ids
}