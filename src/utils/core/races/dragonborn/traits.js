import { types, sizes } from '@/utils/core/creatures'
import abilities from '@/utils/core/abilities'
import languages from '@/utils/core/languages'
import * as feats from './feats'

export default {
  description: `
    Your draconic heritage manifests in a variety of traits
    you share with other dragonborn.
  `,
  traits: {
    abilityScoreIncrease: {
      value: [
        { ability: abilities.STRENGTH, value: 2 },
        { ability: abilities.CHARISMA, value: 1 }
      ],
      description: `Your Strength score increases by 2,
                    and your Charisma score increases by 1.`
    },
    age: {
      adult: 15,
      average: 80,
      description: `
        Young dragonborn grow quickly. They walk hours after hatching,
        attain the size and development of a 10-year-old human child
        by the age of 3, and reach adulthood by 15. They live to be around 80.
      `  
    },
    alignment: {
      description: `
        Dragonborn tend to extremes, making a conscious choice for one side
        or the other in the cosmic war between good and evil. Most dragonborn
        are good, but those who side with evil can be terrible villains.
      `
    },
    size: {
      value: sizes.MEDIUM,
      description: `Your size is Medium.`
    },
    weight: {
      average: 250,
      description: `Dragonborn are heavier than humans, averaging almost 250 pounds.`
    },
    height: {
      range: [6,8],      
      description: `Dragonborn are taller than humans, standing well over 6 feet tall`
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
        feats.DRAGONBORN_DRACONIC_ANCESTRY,
        feats.DRAGONBORN_BREATH_WEAPON,
        feats.DRAGONBORN_DAMAGE_RESISTANCE
      ]
    },
    languages: {
      value: [
        languages.COMMON,
        languages.DRACONIC,
      ],
      description: `
        You can speak, read, and write Common and Draconic.
        Draconic is thought to be one of the oldest languages
        and is often used in the study of magic. The language
        sounds harsh to most other creatures and includes
        numerous hard consonants and sibilants.
      `
    }
  }
}
