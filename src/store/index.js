import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import video from "./modules/video";
import board from "./modules/board";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user, video, board },
});
