<template>
  <div v-if="getArticle">
    <v-card
      class="mx-auto my-12 align-start flex-column"
      :max-width="getContentWidth"
      tile
      outlined
    >
      <v-card-title>{{ getArticle.title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="grey--text">{{ getArticle.writerNickName }}</div>
          <div class="grey--text">&nbsp;| {{ getArticle.regDate }}</div>
          <v-spacer></v-spacer>
          <div class="grey--text">조회수 : {{ getArticle.viewCnt + 1 }}</div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="black--text">
        <div class="my-10 mx-5">
          {{ getArticle.content }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="goUrl('CommentForm')">
          댓글 작성
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="goUrl('ArticleModify')"
        >
          글 수정
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="deleteArticle(getArticle.articleId)"
        >
          글 삭제
        </v-btn>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>

      <router-view :key="$route.fullPath" />
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "article-detail",
  data() {
    return {};
  },
  computed: {
    ...mapState(["articles"]),
    ...mapGetters(["getArticle", "getContentWidth"]),
  },
  methods: {
    goUrl(url) {
      this.$router.push({ name: url }).catch(() => {});
    },
    goUrlwithPrams(url, articleId) {
      this.$router
        .push({ name: url, params: { articleId: articleId } })
        .catch(() => {});
    },
    deleteArticle(articleId) {
      this.$store.dispatch("deleteArticle", articleId);
    },
  },
  created() {
    this.$store
      .dispatch("callBoardsPromise")
      .then(() => {
        return this.$store.dispatch(
          "callArticlesPromise",
          this.$route.params.boardSeq
        );
      })
      .then(() => {
        this.$store.dispatch("callArticle", this.$route.params.id);
      });
  },
};
</script>

<style></style>
