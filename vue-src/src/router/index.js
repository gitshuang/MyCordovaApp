import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/todos'
import Contactus from '@/components/contactus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todos
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: Contactus
    }
  ]
})
