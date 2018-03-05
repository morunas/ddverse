import alignments from '@/utils/core/alignments'
import { types, sizes } from '@/utils/core/creatures'
import abilities from '@/utils/core/abilities'
import feats from '@/utils/core/feats'
import choices from '@/utils/progression/choices'

export default dward = {
  description: `
    It's hard to make generalizations about humans,
    but your human character has these traits.
  `,
  traits: {
    abilityScoreIncrease: {
      value: [
        { ability: abilities.STRENGTH, value: 1 },
        { ability: abilities.DEXTERITY, value: 1 },
        { ability: abilities.CONSTITUTION, value: 1 },
        { ability: abilities.INTELIGENCE, value: 1 },
        { ability: abilities.WISDOM, value: 1 },
        { ability: abilities.CHARISMA, value: 1 }
      ],
      description: `Your ability scores each increase by 1.`
    },
    age: {
      adult: 18,
      average: 80,
      description: `
        Humans reach adulthood in their late teens and live
        less than a century.
      `  
    },
    alignment: {
      description: `
        Humans tend toward no particular alignment.
        The best and the worst are found among them.
      `
    },
    size: {
      value: sizes.MEDIUM,
      description: `Your size is Medium.`
    },
    weight: {
      average: 140,
      description: `Humans weight on average about 140 pounds.`      
    },
    height: {
      range: [5,7],      
      description: `Humans stand from barely 5 feet tall to well over 6 feet tall.`
    },
    type: {
      value: types.HUMANOID
    },
    speed: {
      base: 30,
      description: `Your base walking speed is 30 feet.`
    },
    space: {
      value: 5
    },
    reach: {
      value: 5
    },
    feats: {
      value: [
        feats.DARKVISION,
        feats.DWARVEN_RESILIENCE,
        feats.DWARVEN_COMBAT_TRAINING,
        feats.TOOL_PROFICIENCY,
        feats.STONECUNNING
      ]
    },
    languages: {
      value: [
        languages.COMMON
      ],
      choices: [{ type: choices.LANGUAGE }],
      description: `
        You can speak, read, and write Common and one extra
        language of your choice. Humans typically learn the
        languages of other peoples they deal with, including
        obscure dialects. They are fond of sprinkling their
        speech with words borrowed from other tongues: Orc
        curses, Elvish musical expressions, Dwarvish military
        phrases, and so on.

      `
    },
  },
  subraces: {
    hilldwarf: {
      title: 'Hill Dwarf',
      description: ``,
      traits: {
        description:`
          As a hill dwarf, you have keen senses, deep intuition,
          and remarkable resilience.
        `,
        abilities: {
          bonus: { ability: abilities.WIS, value: 1 },
          description: `Your Wisdom score increases by 1.`
        },
        feats: {
          value: [ feats.DWARVEN_TOUGHNESS ]
        }
      }
    }
  }
}
