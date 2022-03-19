import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import("pages/LoginForm.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/Home.vue") },
      { path: "account", component: () => import("pages/Account.vue") },
      { path: "search", component: () => import("pages/Search.vue") },
      { path: "inbox", component: () => import("pages/inbox/Inbox.vue") },
      { path: "post", component: () => import("pages/post/Post.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      { path: "profile", component: () => import("pages/Profile.vue") },
      { path: "settings", component: () => import("pages/setting/Settings.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
