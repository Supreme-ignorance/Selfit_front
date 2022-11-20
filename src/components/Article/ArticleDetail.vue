<template>
  <div v-if="getArticle">
    <v-card
      class="mx-auto my-12 align-start flex-column"
      max-width="500"
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
          <div class="grey--text">조회수 : {{ getArticle.viewCnt }}</div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="black--text">
        <div>
          {{ getArticle.content }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text> 댓글 작성 </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text> 수정 </v-btn>
        <v-btn color="deep-purple lighten-2" text> 삭제 </v-btn>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>
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
            <v-btn color="deep-purple lighten-2" text> 수정 </v-btn>
            <v-btn color="deep-purple lighten-2" text> 삭제 </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "article-detail",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getArticleId", "getArticle", "getComments"]),
    id() {
      return this.getArticleId(this.$route.params.idx);
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("callArticle", this.$route.params.idx);
    this.$store.dispatch("callcomments", this.$route.params.idx);
  },
  watch: {
    id: function (newVal) {
      this.$store.dispatch("callArticle", newVal);
      this.$store.dispatch("callcomments", newVal);
    },
  },
};
</script>

<style></style>
