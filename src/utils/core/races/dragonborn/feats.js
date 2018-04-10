import { TABLE as CHOICE_MODE_TABLE } from '@/utils/core/progression/choices/modes'
import { ancestries } from './data'

const DRAGONBORN_DRACONIC_ANCESTRY = {
  choices: [{
    title: 'Choose your ancestry',
    mode: CHOICE_MODE_TABLE,
    data: ancestries 
  }],
  description: `
    You have draconic ancestry. Choose one type of dragon
    from the Draconic Ancestry table. Your breath weapon and
    damage resistance are determined by the dragon type, as
    shown in the table.
  `
},

const DRAGONBORN_BREATH_WEAPON = {
  breathWeapon: character => ancestries[character.ancestry],
  description: [`
    You can use your action to exhale destructive energy.
    Your draconic ancestry determines the size, shape, and
    damage type of the exhalation.
  `,`
    When you use your breath weapon, each creature in the
    area of the exhalation must make a saving throw, the
    type of which is determined by your draconic ancestry.
    The DC for this saving throw equals 8 + your Constitution
    modifier + your proficiency bonus. A creature takes 2d6
    damage on a failed save, and half as much damage on a
    successful one. The damage increases to 3d6 at 6th level,
    4d6 at 11th level, and 5d6 at 16th level.
  `,`
    After you use your breath weapon, you can't use it again
    until you complete a short or long rest.
  `]
  
},

const DRAGONBORN_DAMAGE_RESISTANCE = {
  effect: character => ({
    effect: effects.RESISTANCE,
    options: { type: ancestries[character.ancestry].damageType },
  }),
  description: `
    You have resistance to the damage type associated with
    your draconic ancestry.
  `
}

export {
  DRAGONBORN_DRACONIC_ANCESTRY,
  DRAGONBORN_BREATH_WEAPON,
  DRAGONBORN_DAMAGE_RESISTANCE
}
