import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import ReviewView from "../views/ReviewView.vue";
import VideoView from "../views/VideoView.vue";

import UserLogin from "../components/User/UserLogin.vue";
import UserRegist from "../components/User/UserRegist.vue";
import UserDetail from "../components/User/UserDetail.vue";

import ReviewForm from "../components/Review/ReviewForm.vue";
import ReviewList from "../components/Review/ReviewList.vue";
import ReviewDetail from "../components/Review/ReviewDetail.vue";
import ReviewModify from "../components/Review/ReviewModify.vue";

import LikedVideoList from "../components/Video/LikedVideoList.vue";
import VideoDetail from "../components/Video/VideoDetail.vue";
import VideoList from "../components/Video/VideoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    children: [
      {
        path: "login",
        name: "login",
        component: UserLogin,
      },
      {
        path: "regist",
        name: "regist",
        component: UserRegist,
      },
      {
        path: "detail",
        name: "detail",
        component: UserDetail,
      },
    ],
  },
  {
    path: "/review",
    name: "review",
    component: ReviewView,
    children: [
      {
        path: "",
        name: "ReviewList",
        component: ReviewList,
      },
      {
        path: "write",
        name: "reviewWrite",
        component: ReviewForm,
      },
      {
        path: ":id",
        name: "reviewDetail",
        component: ReviewDetail,
      },
      {
        path: "modify",
        name: "reviewModify",
        component: ReviewModify,
      },
    ],
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
    children: [
      {
        path: "likedlist",
        name: "likedvideolist",
        component: LikedVideoList,
      },
      {
        path: "detail",
        name: "videodetail",
        component: VideoDetail,
      },
      {
        path: "",
        name: "videolist",
        component: VideoList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
