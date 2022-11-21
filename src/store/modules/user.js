import router from "@/router";
import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    loginUser: sessionStorage.getItem("currentLogin_id"),
    boards: [],
  },
  getters: {
    getLoginUser(state) {
      return state.loginUser;
    },
  },
  mutations: {
    LOGOUT(state) {
      sessionStorage.clear();
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
    setLoginUser({ commit }, login) {
      const API_URL = commonPath + `user/login`;
      axios({
        url: API_URL,
        method: "POST",
        data: login,
      })
        .then((res) => {
          if (res.data["message"] == "success") {
            alert("로그인 성공!");
            commit("SET_LOGIN_USER", res.data["loginUser"]);
            sessionStorage.setItem("access-token", res.data["access-token"]);
            sessionStorage.setItem("currentLogin_id", res.data["loginUser"].id);
            sessionStorage.setItem(
              "currentLogin_level",
              res.data["loginUser"].level
            );
            sessionStorage.setItem(
              "currentLogin_exp",
              res.data["loginUser"].exp
            );
            sessionStorage.setItem(
              "currentLogin_name",
              res.data["loginUser"].name
            );
            sessionStorage.setItem(
              "currentLogin_height",
              res.data["loginUser"].height
            );
            sessionStorage.setItem(
              "currentLogin_weight",
              res.data["loginUser"].weight
            );
            sessionStorage.setItem(
              "currentLogin_nickname",
              res.data["loginUser"].nickname
            );
            sessionStorage.setItem(
              "currentLogin_email",
              res.data["loginUser"].email
            );
            sessionStorage.setItem(
              "currentLogin_age",
              res.data["loginUser"].age
            );
            sessionStorage.setItem(
              "currentLogin_gender",
              res.data["loginUser"].gender
            );
            commit("SET_LOGIN_USER", res.data["loginUser"].id);
            router.push("/");
          } else {
            alert("로그인 실패!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    registUser({ commit }, user) {
      const API_URL = commonPath + `user/regist`;
      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
        .then((res) => {
          commit;
          res;
          console.log("회원가입 성공");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
};
