import axios from "axios";

const commonPath = "http://localhost:9999/api/comment/";

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
    deleteComment({ commit }, commentId) {
      return new Promise((response, reject) => {
        let API_URL = commonPath + "delete/" + commentId;
        axios({
          url: API_URL,
          method: "DELETE",
          headers: {
            "access-token": sessionStorage.getItem("access-token"),
          },
        })
          .then((res) => {
            console.log("comment delete...");
            commit;
            response(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    callcomments({ commit }, articleId) {
      let API_URL = commonPath + articleId;
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
    writeComment({ commit }, comment) {
      let API_URL = commonPath + "write";
      axios({
        url: API_URL,
        method: "POST",
        data: comment,
      })
        .then(() => {
          console.log("comment writing...");
          commit;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
};
