import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Campaign from '../components/campaign/Campaign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Campaign',
      component: Campaign
    }
  ]
})
