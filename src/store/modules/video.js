import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    videos: [],
  },
  getters: {},
  mutations: {
    SET_VIDEO_LIST(state, videos) {
      state.videos = videos;
    },
  },
  actions: {
    async setVideoList({ commit }) {
      const API_URL = commonPath + `video/list`;
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
        commit("SET_VIDEO_LIST", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
};
