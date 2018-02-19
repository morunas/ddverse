import _ from 'lodash'
import componentGetters from '../component/getters'
export default _.extend({},componentGetters,{
  getLogo: state => state.logo,
  getPlayers: state => {
    return [
      { id: 'qewrgh536h', name: 'Bob' },
      { id: 'dsgthreheg', name: 'Maria' },
      { id: 'tjtyjwtr5h', name: 'John' }
    ]
  }
})
