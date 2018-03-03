import Vue from 'vue'
import Router from 'vue-router'
import DM from './DM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DM',
      component: DM
    }
  ],
  mode: 'history'
})
