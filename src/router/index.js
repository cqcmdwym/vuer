import Vue from 'vue'
import Router from 'vue-router'
import Playground from '@/components/Playground'
import State from '@/components/State'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Playground',
      component: Playground
    },
    {
      path: '/State',
      name: 'Show State',
      component: State
    }
  ]
})
