import Vue from 'vue'
import Router from 'vue-router'
import UsersVue from '@/views/UsersVue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UsersVue,
    },
    {
      path: '/UsersVuex',
      component: () => import('./views/UsersVuex.vue'),
    },
  ],
})
