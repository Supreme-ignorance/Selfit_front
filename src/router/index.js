import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import BoardView from "../views/BoardView.vue";
import VideoView from "../views/VideoView.vue";

import UserLogin from "../components/User/UserLogin.vue";
import UserRegist from "../components/User/UserRegist.vue";
import UserDetail from "../components/User/UserDetail.vue";
import UserModify from "../components/User/UserModify.vue";

import ArticleForm from "../components/Article/ArticleForm";
import ArticleList from "../components/Article/ArticleList.vue";
import ArticleDetail from "../components/Article/ArticleDetail.vue";
import ArticleModify from "../components/Article/ArticleModify.vue";

import LikedVideoList from "../components/Video/LikedVideoList.vue";
import VideoDetail from "../components/Video/VideoDetail.vue";
import VideoList from "../components/Video/VideoList.vue";

import CommentList from "../components/Article/Comment/CommentList.vue";
import CommentForm from "../components/Article/Comment/CommentForm.vue";

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
        path: "detail/:id",
        name: "detail",
        component: UserDetail,
      },
      {
        path: "modify/:id",
        name: "modify",
        component: UserModify,
      },
    ],
  },
  {
    path: "/board",
    name: "borad",
    component: BoardView,
    children: [
      {
        path: ":boardSeq",
        name: "ArticleList",
        component: ArticleList,
        props: true,
        children: [
          {
            path: ":id",
            name: "ArticleDetail",
            component: ArticleDetail,
            children: [
              {
                path: "",
                name: "CommentList",
                component: CommentList,
                children: [
                  {
                    path: "cw",
                    name: "CommentForm",
                    component: CommentForm,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: ":boardSeq/write",
        name: "ArticleWrite",
        component: ArticleForm,
      },
      {
        path: ":boardSeq/:articleId/modify",
        name: "ArticleModify",
        component: ArticleModify,
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
        name: "LikedVideoList",
        component: LikedVideoList,
      },
      {
        path: ":videoId",
        name: "videoDetail",
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
