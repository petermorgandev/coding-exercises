import Vue from 'vue'
import Router from 'vue-router'
import Devices from './views/Devices.vue'
import Login from './views/Login.vue'
import Add from './views/Add.vue'
import Device from './views/Device.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/devices',
      name: 'devices',
      component: Devices,
      children: [
        {path: 'add', component: Add, name: 'add'},
        {path: 'device/:id', component: Device, name: 'device'}
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/devices/1',
      name: 'device',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Device.vue')
    }
  ]
})
