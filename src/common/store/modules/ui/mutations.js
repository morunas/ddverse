import * as types from './types'
export default {
  [types.OPEN_SIDEBAR] (state, { id }) { state.sidebars[id] = true },
  [types.CLOSE_SIDEBAR] (state, { id }) { state.sidebars[id] = false },
  [types.OPEN_OVERLAY] (state, { id }) { state.overlays[id] = true },
  [types.CLOSE_OVERLAY] (state, { id }) { state.overlays[id] = false }
}
