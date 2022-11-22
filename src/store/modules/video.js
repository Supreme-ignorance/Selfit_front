import axios from "axios";

const commonPath = "http://localhost:9999/api/video/";

export default {
  namespaced: false,
  state: {
    videos: [],
    likedVideo: [],
    video: null,
  },
  getters: {
    getVideos(state) {
      return state.videos;
    },
    getVideo(state) {
      return state.video;
    },
  },
  mutations: {
    SET_VIDEO_LIST(state, videos) {
      state.videos = videos;
    },
    SET_VIDEO(state, video) {
      state.video = video;
    },
  },
  actions: {
    async setVideoList({ commit }) {
      const API_URL = commonPath + `list`;
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
    setVideo({ commit }, videoId) {
      const API_URL = commonPath + "one/" + videoId;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("SET_VIDEO", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
};
