import _ from 'lodash'
import componentState from '../component/state'
export default _.extend(componentState(),{
  map: '',
  size: '',
  area: '',
  location: [0,0],
  gallery: [],
  npcs: []
})

/*
AREA
All locales can exist in one area and are therefore
available on all larger areas that contain that area.
For example a certain Palace (locale) may exist by
a lake, on a region, of a kingdom, in a subcontinent
of a larger continent. The locale will be available in
all of those zones if linked to the aforementioned lake.

LOCATION
[x%,y%]
*/