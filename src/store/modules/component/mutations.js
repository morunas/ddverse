import * as types from '../../mutations'
export default {
  [types.SET_NAME] (state, { name }) { state.name = name },
  [types.SET_DESCRIPTION] (state, { description }) { state.description = description }
}
