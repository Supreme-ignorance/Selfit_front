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
      .then(() => {
        this.$store.dispatch("callcomments", this.$route.params.id);
      });
  },
};
</script>

<style></style>
