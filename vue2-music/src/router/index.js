import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import About from './About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['./About'], resolve)
    }
  ]
})
