import _ from 'lodash'
import componentState from '../component/state'
export default _.extend(componentState(),{
  map: '',
  type: '',
  gallery: [],
  areas: []
})

/*
TYPES OF AREAS
- world or plane
- continent (greatest land mass)
- subcontinent (land mass smaller than continent and part of a continent)
- island (land mass smaller than continent and surrounded with water)
- territory (controlled by one or more species, e.g. kingdom)
- region (large region having more than one terrain and defined by their borders)
- terrain (a type of land, like a swamp, a forest, a mountain, a desert, a river, etc)
- zone (a smaller area of a terrain, like a grove, a steppe, a mountain peak, a cave)
*/
