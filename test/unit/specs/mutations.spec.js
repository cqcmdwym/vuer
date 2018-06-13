import mutations from '../../../src/store/mutations';
import { SAVE_CONTENT } from '../../../src/store/mutation-types'

describe('mutaions', () => {
  it('should save content correct',() => {
    const state = {
      firstMessage: 'fake-1',
      secondMessage: 'fake-2'
    }
    mutations[SAVE_CONTENT](state, {firstMessage: 'update-1', secondMessage: 'update-2'})
    expect(state.firstMessage).toEqual('update-1')
    expect(state.secondMessage).toEqual('update-2')
  })
})
