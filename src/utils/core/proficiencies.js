import skills from '@/utils/core/skills'
import { getLevel } from '@/utils/core/level'

const isProficient = (character,skill) => (!!character.proficiencies[skill])

const getProficiencyBonus = (character) => Math.floor(getLevel(character)/4) + 2

export {
  isProficient,
  getProficiencyBonus
}

export default _.extend({}, skills, {
  SMITHS_TOOLS: `Smith's tools`,
  BREWERS_SUPPLIES: `Brewer's supplies`,
  MASON_TOOLS: `Mason's tools`
})
