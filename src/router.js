import Vue from 'vue'
import Router from 'vue-router'

import weekly from './weekly/weekly.vue'
import toutiao from './toutiao/toutiao.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/weekly',
      name: 'weekly',
      component: weekly
    },
    {
      path: '/toutiao',
      name: 'toutiao',
      component: toutiao
    }
  ]
})