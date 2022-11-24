import axios from "axios";

const commonPath = "http://localhost:9999/api/follower/";

export default {
  namespaced: false,
  state: {
    followings: [],
    followers: [],
  },
  getters: {
    getFollowings(state) {
      return state.followings;
    },
    getFollowers(state) {
      return state.followers;
    },
  },
  mutations: {
    SET_FOLLOWING_LIST(state, list) {
      state.followings = list;
    },
    SET_FOLLOWER_LIST(state, list) {
      state.followers = list;
    },
  },
  actions: {
    setFollowerList({ commit }, userId) {
      return new Promise((response, reject) => {
        const API_URL = commonPath + "following/" + userId;
        axios({
          url: API_URL,
          method: "GET",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
        })
          .then((res) => {
            console.log(res.data);
            commit("SET_FOLLOWER_LIST", res.data);
            response(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    setFollowingList({ commit }, userId) {
      return new Promise((response, reject) => {
        const API_URL = commonPath + userId;
        axios({
          url: API_URL,
          method: "GET",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
        })
          .then((res) => {
            console.log(res.data);
            commit("SET_FOLLOWING_LIST", res.data);
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
