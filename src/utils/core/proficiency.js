const isProficient = (character,skill) => (!!character.proficiencies[skill])

const getProficiencyBonus = character => Math.floor(character.level/4) + 2

export {
  isProficient,
  getProficiencyBonus
}
