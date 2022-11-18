import router from "@/router";
import axios from "axios";

const commonPath = "http://localhost:9999/api/";

const user = {
  namespaced: false,
  state: {
    loginUser: null,
    boards: [],
  },
  getters: {
    getLoginUser(state) {
      return state.loginUser;
    },
  },
  mutations: {
    LOGOUT(state) {
      state.loginUser = null;
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
    setLoginUser({ commit }, user) {
      const API_URL = commonPath + `user/login`;
      axios({
        url: API_URL,
        method: "POST",
        params: {
          id: user.id,
          password: user.password,
        },
      })
        .then((res) => {
          if (res.data["message"] == "success") {
            alert("로그인 성공!");
            commit("SET_LOGIN_USER", res.data["loginUser"]);
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
};

export default user;