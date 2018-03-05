import abilities, { abilitiesMeta, modifier, modToString } from '@/utils/core/abilities'
import { isProficient, getProficiencyBonus } from '@/utils/core/proficiencies'

const ACROBATICS = "Acrobatics";
const ANIMALHANDLING = "Animal Handling";
const ARCANA = "Arcana";
const ATHLETICS = "Athletics";
const DECEPTION = "Deception";
const HISTORY = "History";
const INSIGHT = "Insight";
const INTIMIDATION = "Intimidation";
const INVESTIGATION = "Investigation";
const MEDICINE = "Medicine";
const NATURE = "Nature";
const PERCEPTION = "Perception";
const PERFORMANCE = "Performance";
const PERSUASION = "Persuasion";
const RELIGION = "Religion";
const SLEIGHTOFHAND = "Sleight of Hand";
const STEALTH = "Stealth";
const SURVIVAL = "Survival";

const skills = [
  { id: ACROBATICS, title: "Acrobatics", ability: abilities.DEXTERITY },
  { id: ANIMALHANDLING, title: "Animal Handling", ability: abilities.WISDOM },
  { id: ARCANA, title: "Arcana", ability: abilities.INTELIGENCE },
  { id: ATHLETICS, title: "Athletics", ability: abilities.STRENGTH },
  { id: DECEPTION, title: "Deception", ability: abilities.CHARISMA },
  { id: HISTORY, title: "History", ability: abilities.INTELIGENCE },
  { id: INSIGHT, title: "Insight", ability: abilities.WISDOM },
  { id: INTIMIDATION, title: "Intimidation", ability: abilities.CHARISMA },
  { id: INVESTIGATION, title: "Investigation", ability: abilities.INTELIGENCE },
  { id: MEDICINE, title: "Medicine", ability: abilities.WISDOM },
  { id: NATURE, title: "Nature", ability: abilities.INTELIGENCE },
  { id: PERCEPTION, title: "Perception", ability: abilities.WISDOM },
  { id: PERFORMANCE, title: "Performance", ability: abilities.CHARISMA },
  { id: PERSUASION, title: "Persuasion", ability: abilities.CHARISMA },
  { id: RELIGION, title: "Religion", ability: abilities.INTELIGENCE },
  { id: SLEIGHTOFHAND, title: "Sleight of Hand", ability: abilities.DEXTERITY },
  { id: STEALTH, title: "Stealth", ability: abilities.DEXTERITY },
  { id: SURVIVAL, title: "Survival", ability: abilities.WISDOM }
]

const calculate = ( character ) => {
  return _(skills).map(skill => {
    let proficient = isProficient(character, skill.id)
    let value = modifier(character.abilities[skill.ability])
    if(proficient) value += getProficiencyBonus(character)
    return {
      title: `${skill.title} (${abilitiesMeta[skill.ability].title})`,
      value: modToString(value),
      proficient
    }
  }).value()
}

export {
  skills,
  calculate
}

export default {
  ACROBATICS,
  ANIMALHANDLING,
  ARCANA,
  ATHLETICS,
  DECEPTION,
  HISTORY,
  INSIGHT,
  INTIMIDATION,
  INVESTIGATION,
  MEDICINE,
  NATURE,
  PERCEPTION,
  PERFORMANCE,
  PERSUASION,
  RELIGION,
  SLEIGHTOFHAND,
  STEALTH,
  SURVIVAL,
}
