import Vue from 'vue'
import Vuex from 'vuex'
import Playground from '@/components/Playground'
import { mount } from 'vue-test-utils'

const createCmp = () => mount(Playground)

describe('Playground.vue', () => {
  let Constructor, vm

  beforeEach(() => {
    Constructor = Vue.extend(Playground)
    vm = new Constructor().$mount()
  })

  it('should have correct `data`', () => {
    expect(typeof Playground.data).toEqual('function')
    const data = Playground.data();
    expect(data.firstMessage).toEqual('');
    expect(data.secondMessage).toEqual('');
  })

  it('should render correct contents', () => {
    expect(vm.$el.querySelectorAll('.Playground__row').length)
      .toEqual(3)
  })

  it('calls saveContent when click save button', () => {
    const cmp = createCmp()
    //console.log(cmp.vm)
    cmp.vm.saveContent = jest.fn()
    cmp.update() // Forces to re-render, applying changes on template

    const el = cmp.find('.Playground__button').trigger('click')
    expect(cmp.vm.saveContent).toBeCalled()
  })

  it('calls store commit when click save button', () => {
    Vue.use(Vuex)
    const store = new Vuex.Store({state:'fake-state'})
    const Constructor = Vue.extend(Playground)
    const vm = new Constructor({store}).$mount()
    spyOn(store, 'commit')

    const button = vm.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);

    expect(store.commit).toBeCalled()
  })
})
