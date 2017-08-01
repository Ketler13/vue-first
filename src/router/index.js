import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Signup from '@/components/Signup/Signup.vue'
import NewSplit from '@/components/NewSplit/NewSplit.vue'
import Splits from '@/components/Splits/Splits.vue'
import Excercises from '@/components/Excercises/Excercises.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/signup',
      name: 'Signup',
      component: Signup
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
