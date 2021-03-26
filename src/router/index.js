import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: { currentColorOn: null }
    },
    {
      path: '/red',
      name: 'red',
      component: Home,
      props: { currentColorOn: 'red', time: 10000 }
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: Home,
      props: { currentColorOn: 'yellow', time: 3000 }
    },
    {
      path: '/green',
      name: 'green',
      component: Home,
      props: { currentColorOn: 'green', time: 15000 }
    }
  ]
})

router.beforeEach((to, from, next) => {
  (to.name === 'home') ? router.push('red') : next()
})

export default router
