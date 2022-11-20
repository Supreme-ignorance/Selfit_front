<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-12 align-start flex-column"
      max-width="600"
      min-height="500"
      tile
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

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
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text> 수정 </v-btn>
        <v-btn color="deep-purple lighten-2" text> 삭제 </v-btn>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>
      <v-container>
        <v-card
          class="mx-auto my-2 align-start flex-column"
          max-width="550"
          min-height="100"
        >
        </v-card
      ></v-container>
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
    ...mapGetters(["getArticleId", "getArticle"]),
    id() {
      return this.getArticleId(this.$route.params.idx);
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("callArticle", this.id);
  },
};
</script>

<style></style>
