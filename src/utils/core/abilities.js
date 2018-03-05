const STRENGTH = 'strength';
const DEXTERITY = 'dexterity';
const CONSTITUTION = 'constitution';
const INTELIGENCE = 'inteligence';
const WISDOM = 'wisdom';
const CHARISMA = 'charisma';

const abilitiesMeta = {
  strength: { id: STRENGTH, title: 'Str', longTitle: 'STRENGTH' },
  dexterity: { id: DEXTERITY, title: 'Dex', longTitle: 'DEXTERITY' },
  constitution: { id: CONSTITUTION, title: 'Con', longTitle: 'CONSTITUTION' },
  inteligence: { id: INTELIGENCE, title: 'Int', longTitle: 'INTELIGENCE' },
  wisdom: { id: WISDOM, title: 'Wis', longTitle: 'WISDOM' },
  charisma: { id: CHARISMA, title: 'Cha', longTitle: 'CHARISMA' }
}

const modifier = (score) => Math.floor((score - 10)/2)
const modToString = (mod) => (mod>=0?'+':'')+mod
const abilitySave = ({ state, id }) => modifier(state.abilities[id])

export {
  modifier,
  modToString,
  abilitySave,
  abilitiesMeta
}

export default {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELIGENCE,
  WISDOM,
  CHARISMA
}