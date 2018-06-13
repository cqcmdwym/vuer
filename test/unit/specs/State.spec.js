import Vue from 'vue'
import Vuex from 'vuex'
import State from '@/components/State'

describe('State.vue', () => {
  it('should render correct contents', () => {
    Vue.use(Vuex)
    const store = new Vuex.Store({state:'fake-state'})
    const Constructor = Vue.extend(State)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.textContent)
      .toEqual('fake-state')
  })
})
