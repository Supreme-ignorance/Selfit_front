<template>
  <div>
    <div v-if="form">
      <router-view />
    </div>
    <div v-for="comment in getComments" :key="comment.commentId">
      <commentDetail :comment="comment"></commentDetail>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import commentDetail from "./CommentDetail.vue";

export default {
  name: "comment-list",
  components: {
    commentDetail,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getArticleId", "getComments", "getContentWidth"]),
    id() {
      return this.getArticleId(this.$route.params.idx);
    },
    form() {
      return this.$route.fullPath.includes("cw");
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
      .then((data) => {
        this.$store.dispatch(
          "callcomments",
          data[this.$route.params.idx - 1].articleId
        );
      });
  },
  watch: {
    id: function () {
      this.$store
        .dispatch("callBoardsPromise")
        .then(() => {
          return this.$store.dispatch(
            "callArticlesPromise",
            this.$route.params.boardSeq
          );
        })
        .then((data) => {
          this.$store.dispatch(
            "callcomments",
            data[this.$route.params.idx - 1].articleId
          );
        });
    },
    getComments: function () {
      this.$store
        .dispatch("callBoardsPromise")
        .then(() => {
          return this.$store.dispatch(
            "callArticlesPromise",
            this.$route.params.boardSeq
          );
        })
        .then((data) => {
          this.$store.dispatch(
            "callcomments",
            data[this.$route.params.idx - 1].articleId
          );
        });
    },
  },
};
</script>

<style></style>
