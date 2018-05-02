import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import A from '@/components/a'
import B from '@/components/b'
import Yel from '@/components/yel'

Vue.use(Router)
Vue.use(Vuex)
// let store = new Vuex.store({
  
// })
export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:HelloWorld
    },
  
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children:[
        {
          path: 'yel',
          name:'yel',
          component: Yel
        }
      ]
    },
    {
      path: '/b/:color/:font',
      name: 'b',
      component:{
        viewA:A,
        viewB:B
      }
    },
    {
      path: '/a',
      name: 'a',
      component: A
    }
  ]
})
