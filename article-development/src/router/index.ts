import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/TopView.vue";

/** path定数 */
export namespace RoutePaths {
  /** NotFound ※存在しないパスを指定 */
  export const notFound = "/notFound";
  /** トップ */
  export const top = "/";
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/:catchAll(.*)`,
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: RoutePaths.top,
      component: () => import("../views/TopView.vue"),
    },
  ],
});

export default router;
