import axios from "axios";

const commonPath = "http://localhost:9999/api/";

export default {
  namespaced: false,
  state: {
    boards: [],
    articles: [],
    article: null,
  },
  getters: {
    getBoards(state) {
      return state.boards;
    },
    getArticles(state) {
      return state.articles;
    },
    getArticleId: (state) => (idx) => {
      return state.articles[idx - 1].articleId;
    },
    getArticle(state) {
      return state.article;
    },
  },
  mutations: {
    CALL_BOARDS(state, list) {
      state.boards = list;
    },
    CALL_ARTICLES(state, list) {
      state.articles = list;
    },
    CALL_ARTICLE(state, article) {
      state.article = article;
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
          console.log("boardList setting...");
          commit("CALL_BOARDS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    callArticles({ commit }, boardSeq) {
      let API_URL = commonPath + "article/list/" + boardSeq;
      axios({
        url: API_URL,
        method: "GET",
        params: {},
      })
        .then((res) => {
          console.log("articleList setting...");
          commit("CALL_ARTICLES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    callArticle({ commit }, articleId) {
      let API_URL = commonPath + "article/" + articleId;
      axios({
        url: API_URL,
        method: "GET",
        params: {},
      })
        .then((res) => {
          console.log("article setting...");
          commit("CALL_ARTICLE", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
};
