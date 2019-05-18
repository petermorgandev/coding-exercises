import Vue from 'vue'
import Router from 'vue-router'
import Devices from './views/Devices.vue'
import Device from './views/Device.vue'
import Login from './views/Login.vue'
import Add from './views/Add.vue'
//import Device from './views/Device.vue'

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
      component: Devices
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/device/:id',
      name: 'device',
      component: Device
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
