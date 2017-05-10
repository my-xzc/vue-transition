import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import Hello from '@/components/public/hello'
import p from '@/components/par/par'
import Default from '@/components/chidrens/default'
import Foo from '@/components/chidrens/foo'
import Bar from '@/components/chidrens/bar'
// const home = resolve => require(['@/components/Home'], resolve)//路由懒加载,把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件
// const Hello = resolve => require(['@/components/public/hello'], resolve)
// const p = resolve => require(['@/components/par/par'], resolve)
// const Foo = resolve => require(['@/components/chidrens/foo'], resolve)
// const Bar = resolve => require(['@/components/chidrens/bar'], resolve)
// const Default = resolve => require(['@/components/chidrens/Default'], resolve)
Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/par',
      component:p,
      children:[
              { path: '', component: Default },
              { path: 'foo', component: Foo },
              { path: 'bar', component: Bar }
      ]
    }
    
  ],
  scrollBehavior (to, from, savedPosition) { //滚动行为
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
})
