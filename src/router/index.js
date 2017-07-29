import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NewSplit from '@/components/NewSplit'
import Splits from '@/components/Splits'
import Excercises from '@/components/Excercises'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/newsplit',
      name: 'NewSplit',
      component: NewSplit
    },
    {
      path: '/splits',
      name: 'Splits',
      component: Splits
    },
    {
      path: '/excercises',
      name: 'Excercises',
      component: Excercises
    }
  ]
})
