import axios from "axios";

const commonPath = "http://localhost:9999/api/video/";

export default {
  namespaced: false,
  state: {
    videos: [],
    likedVideos: [],
    video: null,
  },
  getters: {
    getVideos(state) {
      return state.videos;
    },
    getVideo(state) {
      return state.video;
    },
    getLikedVideos(state) {
      return state.likedVideos;
    },
  },
  mutations: {
    SET_VIDEO_LIST(state, videos) {
      state.videos = videos;
    },
    SET_VIDEO(state, video) {
      state.video = video;
    },
    GET_LIKEDVIDEO_LIST(state, likedVideos) {
      state.likedVideos = likedVideos;
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
    async getLikedVideoList({ commit }, id) {
      const API_URL = commonPath + "likedlist/" + id;
      console.log();
      try {
        const res = await axios({
          url: API_URL,
          method: "GET",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
        });
        console.log("getting likedvideo list...");
        commit("GET_LIKEDVIDEO_LIST", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
};
