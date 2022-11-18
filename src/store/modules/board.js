import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    boards: [],
  },
  getters: {
    getBoards(state) {
      return state.boards;
    },
  },
  mutations: {
    CALL_BOARDS(state, list) {
      state.boards = list;
    },
  },
  actions: {
    callBoards({ commit }) {
      let API_URL = commonPath + "board/";
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log("videoList setting...");
          commit("CALL_BOARDS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
};
