import { ids as abilityIds, abilities, modifier, modToString } from '@/utils/core/abilities'
import { isProficient, getProficiencyBonus } from '@/utils/core/proficiency'

const ACROBATICS = "acrobatics";
const ANIMALHANDLING = "animalHandling";
const ARCANA = "arcana";
const ATHLETICS = "athletics";
const DECEPTION = "deception";
const HISTORY = "history";
const INSIGHT = "insight";
const INTIMIDATION = "intimidation";
const INVESTIGATION = "investigation";
const MEDICINE = "medicine";
const NATURE = "nature";
const PERCEPTION = "perception";
const PERFORMANCE = "performance";
const PERSUASION = "persuasion";
const RELIGION = "religion";
const SLEIGHTOFHAND = "sleightOfHand";
const STEALTH = "stealth";
const SURVIVAL = "survival";

const skills = [
  { id: ACROBATICS, title: "Acrobatics", ability: abilityIds.DEX },
  { id: ANIMALHANDLING, title: "Animal Handling", ability: abilityIds.WIS },
  { id: ARCANA, title: "Arcana", ability: abilityIds.INT },
  { id: ATHLETICS, title: "Athletics", ability: abilityIds.STR },
  { id: DECEPTION, title: "Deception", ability: abilityIds.CHA },
  { id: HISTORY, title: "History", ability: abilityIds.INT },
  { id: INSIGHT, title: "Insight", ability: abilityIds.WIS },
  { id: INTIMIDATION, title: "Intimidation", ability: abilityIds.CHA },
  { id: INVESTIGATION, title: "Investigation", ability: abilityIds.INT },
  { id: MEDICINE, title: "Medicine", ability: abilityIds.WIS },
  { id: NATURE, title: "Nature", ability: abilityIds.INT },
  { id: PERCEPTION, title: "Perception", ability: abilityIds.WIS },
  { id: PERFORMANCE, title: "Performance", ability: abilityIds.CHA },
  { id: PERSUASION, title: "Persuasion", ability: abilityIds.CHA },
  { id: RELIGION, title: "Religion", ability: abilityIds.INT },
  { id: SLEIGHTOFHAND, title: "Sleight of Hand", ability: abilityIds.DEX },
  { id: STEALTH, title: "Stealth", ability: abilityIds.DEX },
  { id: SURVIVAL, title: "Survival", ability: abilityIds.WIS }
]

const calculate = ( character ) => {
  return _(skills).map(skill => {
    let proficient = isProficient(character, skill.id)
    let value = modifier(character.abilities[skill.ability])
    if(proficient) value += getProficiencyBonus(character)
    return {
      title: `${skill.title} (${abilities[skill.ability].title})`,
      value: modToString(value),
      proficient
    }
  }).value()
}

export {
  skills,
  calculate
}