import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/devices",
      name: "devices",
      component: () => import("./views/Devices.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./views/Add.vue")
    },
    {
      path: "/device/:id",
      name: "device",
      component: () => import("./views/Device.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
