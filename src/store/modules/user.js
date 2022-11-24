import router from "@/router";
import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    loginUser: {
      id: sessionStorage.getItem("currentLogin_id"),
      nickname: sessionStorage.getItem("currentLogin_nickname"),
    },
    boards: [],
    daily: [],
    dailyType: [],
    userInfo: null,
  },
  getters: {
    getLoginUser(state) {
      return state.loginUser;
    },
    getDaily(state) {
      return state.daily;
    },
    getDailyType(state) {
      return state.dailyType;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_DAILY(state, daily) {
      state.daily = daily;
    },
    SET_DAILYTYPE(state, dailyType) {
      state.dailyType = dailyType;
    },
    LOGOUT(state) {
      sessionStorage.clear();
      state.loginUser = {
        id: sessionStorage.getItem("currentLogin_id"),
        nickname: sessionStorage.getItem("currentLogin_nickname"),
      };
    },
    SET_LOGIN_USER(state, id) {
      state.loginUser = id;
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    setDailyType({ commit }, id) {
      return new Promise((response, reject) => {
        const API_URL = commonPath + "daily/groupType/" + id;
        axios({
          url: API_URL,
          method: "GET",
        })
          .then((res) => {
            console.log("daily setting...");
            commit("SET_DAILYTYPE", res.data);
            response(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    inputTime({ commit }, daily) {
      return new Promise((response, reject) => {
        const API_URL = commonPath + "daily/write";
        axios({
          url: API_URL,
          method: "POST",
          data: daily,
        })
          .then((res) => {
            commit;
            response(res.data);
            alert("운동이 기록되었습니다.");
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    setDaily({ commit }, id) {
      return new Promise((response, reject) => {
        const API_URL = commonPath + "daily/" + id;
        axios({
          url: API_URL,
          method: "GET",
        })
          .then((res) => {
            console.log("daily setting...");
            commit("SET_DAILY", res.data);
            response(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    setUserInfo({ commit }, id) {
      const API_URL = commonPath + "user/" + id;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log("info setting...");
          commit("SET_USER_INFO", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
            commit("SET_LOGIN_USER", {
              id: res.data["loginUser"].id,
              nickname: res.data["loginUser"].nickname,
            });
            router.go(-1);
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
