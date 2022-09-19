import * as VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue"


const routes = [
    { path: "/", name: "home", component: HomePage},

  ]
  
  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
  });

export default router