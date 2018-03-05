import effects from '@/utils/core/effects'
import skills from '@/utils/core/skills'
import proficiencies from '@/utils/core/proficiencies'

export default {

  DWARVEN_DARKVISION: {
    effect: effects.DARKVISION,
    description: `
      Accustomed to life underground, you have superior
      vision in dark and dim Conditions. You can see in
      dim light within 60 feet of you as if it were bright
      light, and in Darkness as if it were dim light. You
      can’t discern color in Darkness, only shades of gray.
    `
  },

  DWARVEN_RESILIENCE: {
    saves: {
      poison: true
    },
    resistance: {
      poison: true
    }
    description: `
      You have advantage on saving throws against poison,
      and you have Resistance against poison damage.
    `
  },

  DWARVEN_COMBAT_TRAINING: {
    proficiencies: {
      battleaxe: true,
      handaxe: true,
      lightHammer: true,
      warhammer: true
    },
    description: `
      You have proficiency with the Battleaxe, Handaxe,
      Light Hammer, and Warhammer.
    `
  },

  TOOL_PROFICIENCY: {
    proficiencyChoices: [
      {
        options: [
          proficiencies.SMITHS_TOOLS,
          proficiencies.BREWERS_SUPPLIES,
          proficiencies.MASON_TOOLS
        ]
      }
    ],
    description: `
      You gain proficiency with the artisan’s tools of
      your choice: smith’s tools, brewer’s supplies, or
      mason’s tools.
    `
  },

  STONECUNNING: {
    proficiencyConditionals: [
      {
        proficiency: proficiencies.HISTORY,
        double: true,
        when: `Related to the origin of stonework`
      }
    ],
    description: `
      Whenever you make an Intelligence (History) check
      related to the origin of stonework, you are considered
      proficient in the History skill and add double your
      proficiency bonus to the check, instead of your normal
      proficiency bonus.
    `
  },

  DWARVEN_TOUGHNESS: {
    staticBonuses: {
      hp: character => character.level
    }
    description: `
      Your hit point maximum increases by 1, and it increases
      by 1 every time you gain a level.
    `
  }
}