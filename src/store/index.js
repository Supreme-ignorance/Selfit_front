import router from "@/router";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginUser: null,
    videos: [],
  },
  getters: {},
  mutations: {
    LOGOUT(state) {
      state.loginUser = null;
    },
    SET_VIDEO_LIST(state, videos) {
      state.videos = videos;
    },
    SET_LOGIN_USER(state, id) {
      let user = { id };
      state.loginUser = user;
    },
  },
  actions: {
    logout({ commit }) {
      commit("LOGOUT");
    },
    async setVideoList({ commit }) {
      const API_URL = `http://localhost:9999/api/Video/List`;
      console.log();
      try {
        const res = await axios({
          url: API_URL,
          method: "GET",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
        });
        console.log("videoList setting...");
        console.log(res.data);
        commit("SET_VIDEO_LIST", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    setLoginUser({ commit }, user) {
      const API_URL = `http://localhost:9999/api/User/login`;
      axios({
        url: API_URL,
        method: "POST",
        params: {
          id: user.id,
          password: user.password,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data["message"] == "success") {
            alert("로그인 성공!");
            commit("SET_LOGIN_USER", res.data["id"]);
            sessionStorage.setItem("access-token", res.data["access-token"]);
            router.push("/");
          } else {
            alert("로그인 실패!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
