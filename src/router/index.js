import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout'
import IndexPages from '@/pages/index.vue'
Vue.use(Router)




export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:IndexPages
    },
    {
      path: '/indexpages',
      name: 'IndexPages',
      component: IndexPages
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },


  ]
})
