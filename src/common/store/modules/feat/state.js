import _ from 'lodash'
import componentState from '../component/state'
export default _.extend(componentState(),{
  prerequisites: [
    {
      type: 'ability',
      conditional: { STR: 13 }
    }
  ]
})
