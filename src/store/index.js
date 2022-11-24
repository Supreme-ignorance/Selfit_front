import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import video from "./modules/video";
import board from "./modules/board";
import comment from "./modules/comment";
import daily from "./modules/daily";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contentWidth: 1000,
  },
  getters: {
    getContentWidth(state) {
      return state.contentWidth;
    },
  },
  mutations: {},
  actions: {},
  modules: { user, video, board, comment, daily },
});
