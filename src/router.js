import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/animejs',
      name: 'animejs',
      component: () => import(/* webpackChunkName: "about" */ './views/Anime.vue')
    },
    {
      path: '/webgl',
      name: 'webgl',
      component: () => import(/* webpackChunkName: "about" */ './views/WebGL.vue')
    },
    {
      path: '/threejs',
      name: 'threejs',
      component: () => import(/* webpackChunkName: "about" */ './views/Three.vue')
    },    
  ]
})
