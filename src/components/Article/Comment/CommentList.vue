<template>
  <div>
    <div v-if="form">
      <router-view />
    </div>
    <v-container v-for="comment in getComments" :key="comment.commentId">
      <v-card
        class="mx-auto my-1 align-start flex-column"
        max-width="450"
        outlined
      >
        <v-card-text>
          <div class="black--text mb-1">
            {{ comment.writerNickname }} | {{ comment.regDate }}
          </div>
          <v-divider class="mx-4"></v-divider>
          <div class="black--text my-1">{{ comment.content }}</div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple lighten-2"
            text
            @click="goUrlwithParam('CommentModify', comment.commentId)"
          >
            수정
          </v-btn>
          <v-btn color="deep-purple lighten-2" text> 삭제 </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "comment-list",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getArticleId", "getComments"]),
    id() {
      return this.getArticleId(this.$route.params.idx);
    },
    form() {
      return this.$route.fullPath.includes("cw");
    },
  },
  methods: {
    goUrl(url) {
      this.$router.push({ name: url }).catch(() => {});
    },
  },
  created() {
    this.$store.dispatch("callcomments", this.$route.params.idx);
  },
  watch: {
    id: function (newVal) {
      this.$store.dispatch("callcomments", newVal);
    },
  },
};
</script>

<style></style>
