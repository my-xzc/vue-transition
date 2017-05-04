import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import Hello from '@/components/public/hello'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
