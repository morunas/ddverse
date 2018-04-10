import alignments from '@/utils/core/alignments'
import { types, sizes } from '@/utils/core/creatures'
import abilities from '@/utils/core/abilities'
import feats from '@/utils/core/feats'

export default {
  description: `
    Your dwarf character has an assortment of inborn Abilities,
    part and parcel of dwarven nature.
  `,
  traits: {
    abilityScoreIncrease: {
      value: [
        { ability: abilities.CONSTITUTION, value: 2 }
      ],
      description: `Your Constitution score increases by 2.`
    },
    age: {
      adult: 50,
      average: 350,
      description: `
        Dwarves mature at the same rate as humans, but they’re
        considered young until they reach the age of 50.
        On average, they live about 350 years.
      `  
    },
    alignment: {
      tendency: alignments.LAWFUL,
      description: `
        Most dwarves are lawful, believing firmly in the
        benefits of a well-ordered society. They tend toward
        good as well, with a strong sense of Fair Play and a
        belief that everyone deserves to share in the benefits
        of a just order.
      `
    },
    size: {
      value: sizes.MEDIUM,
      description: `Your size is Medium.`
    },
    weight: {
      average: 150,
      description: `Dwarves weight on average about 150 pounds.`      
    },
    height: {
      range: [4,5],      
      description: `Dwarves stand between 4 and 5 feet tall`
    },
    type: {
      value: types.HUMANOID
    },
    speed: {
      base: 25,
      armorImpact: false,
      description: `
        Your base walking speed is 25 feet. Your speed is not
        reduced by wearing Heavy Armor.
      `
    },
    space: {
      value: 5
    },
    reach: {
      value: 5
    },
    feats: {
      value: [
        feats.DWARVEN_DARKVISION,
        feats.DWARVEN_RESILIENCE,
        feats.DWARVEN_COMBAT_TRAINING,
        feats.DWARVEN_TOOL_PROFICIENCY,
        feats.DWARVEN_STONECUNNING
      ]
    },
    languages: {
      value: [
        languages.COMMON,
        languages.DWARVISH
      ],
      description: `
        You can speak, read, and write Common and Dwarvish. Dwarvish
        is full of hard consonants and guttural sounds, and those
        characteristics spill over into whatever other Language a
        dwarf might speak.
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
