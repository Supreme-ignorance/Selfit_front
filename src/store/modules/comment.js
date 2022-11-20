import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    comments: [],
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
  },
  mutations: {
    CALL_COMMENTS(state, list) {
      state.comments = list;
    },
  },
  actions: {
    callcomments({ commit }, articleId) {
      let API_URL = commonPath + "comment/" + articleId;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log("comments setting...");
          commit("CALL_COMMENTS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
};
