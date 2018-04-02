import * as types from './types'
export default {
  openSidebar({ commit, state }, { id }) { commit(types.OPEN_SIDEBAR, { id }) },
  closeSidebar({ commit, state }, { id }) { commit(types.CLOSE_SIDEBAR, { id }) },
  openOverlay({ commit, state }, { id }) { commit(types.OPEN_OVERLAY, { id }) },
  closeOverlay({ commit, state }, { id }) { commit(types.CLOSE_OVERLAY, { id }) }
}
