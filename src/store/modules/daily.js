import router from "@/router";
import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    daily: [],
    dailyType: [],
  },
  getters: {
    getDaily(state) {
      return state.daily;
    },
    getDailyType(state) {
      return state.dailyType;
    },
  },
  mutations: {
    SET_DAILY(state, daily) {
      state.daily = daily;
    },
    SET_DAILYTYPE(state, dailyType) {
      state.dailyType = dailyType;
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
            router.go();
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
  },
  modules: {},
};
