import axios from "axios";

const commonPath = "http://localhost:9999/api/video/";

export default {
  namespaced: false,
  state: {
    videos: [],
    likedVideos: [],
    video: null,
    isLiked: null,
  },
  getters: {
    getIsLiked(state) {
      return state.isLiked;
    },
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
    IS_LIKED_VIDEO(state, chk) {
      state.isLiked = chk;
    },
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
    isLikedVideo({ commit }, payload) {
      return new Promise((res, rej) => {
        const API_URL = commonPath + `checklist`;
        axios({
          url: API_URL,
          method: "GET",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
          params: {
            id: payload.id,
            videoId: payload.videoId,
          },
        })
          .then((response) => {
            commit("IS_LIKED_VIDEO", response.data);
            res(response.data);
          })
          .catch((err) => {
            rej(err);
          });
      });
    },
    deleteLikedVideo({ commit }, payload) {
      return new Promise((res, rej) => {
        const API_URL = commonPath + `unlike`;
        axios({
          url: API_URL,
          method: "DELETE",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
          params: {
            id: payload.id,
            videoId: payload.videoId,
          },
        })
          .then((response) => {
            commit;
            res(response.data);
          })
          .catch((err) => {
            rej(err);
          });
      });
    },
    setLikedVideo({ commit }, payload) {
      return new Promise((res, rej) => {
        const API_URL = commonPath + `like`;
        axios({
          url: API_URL,
          method: "POST",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
          params: {
            id: payload.id,
            videoId: payload.videoId,
          },
        })
          .then((response) => {
            commit;
            res(response.data);
          })
          .catch((err) => {
            rej(err);
          });
      });
    },
    async setVideoList({ commit }, payload) {
      const API_URL = commonPath + `list`;
      try {
        const res = await axios({
          url: API_URL,
          method: "GET",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
          params: {
            videoType: payload.videoType,
            orderBy: payload.orderBy,
            orderDir: payload.orderDir,
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
        headers: {
          "access-token": sessionStorage.getItem("access-token"),
        },
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
