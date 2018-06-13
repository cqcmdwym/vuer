import * as types from './mutation-types'

export default {
  [types.SAVE_CONTENT] (state, payload) {
    state.firstMessage = payload.firstMessage
    state.secondMessage = payload.secondMessage
  }
}
