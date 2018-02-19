import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import campaign from './modules/campaign'
import character from './modules/character'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    character,
    campaign
  }
})