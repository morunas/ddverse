import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import campaign from '@/common/store/modules/campaign'
import ui from '@/common/store/modules/ui'
import character from './modules/character'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    character,
    campaign,
    ui
  }
})