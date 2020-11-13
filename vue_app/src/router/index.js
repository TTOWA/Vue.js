import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld_2 from '@/components/HelloWorld_2'

Vue.use(Router)

export default new Router({
  mode: "history", //#제거
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'HelloWorld_2',
      component: HelloWorld_2
    }
  ]
})
