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
      { path: "form", component: () => import("pages/post/PostForm.vue") },
      { path: "chat", component: () => import("pages/inbox/Chatroom.vue") },
    ],
  },
  {
    path: "/settings/",
    component: () => import("layouts/SettingLayout.vue"),
    children: [
      { path: "", component: () => import("pages/setting/Settings.vue") },
      { path: "account", component: () => import("pages/setting/ManageAccount.vue") },
      { path: "privacy", component: () => import("pages/setting/ManagePrivacy.vue") },
      { path: "help", component: () => import("pages/setting/HelpCenter.vue") },
      { path: "feedback", component: () => import("pages/setting/Feedback.vue") },
      { path: "terms-of-service", component: () => import("pages/setting/ServicePolicy.vue") },
      { path: "privacy-policy", component: () => import("pages/setting/PrivacyPolicy.vue") },
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
