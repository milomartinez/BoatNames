import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)


  const routes = [

    {
      path: '/',
      name: 'startpage',
      component: () => import( '../views/StartPage.vue')

    },

    {
      path: '/rego',
      name: 'rego',
      component: () => import( '../views/Rego.vue')

    },

    {
      path: '/homeport',
      name: 'homeport',
      component: () => import( '../views/HomePort.vue')

    }
    /*
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }*/
]

const router = new VueRouter({


  routes
})

export default router
