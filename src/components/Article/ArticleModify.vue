<template>
  <div>
    <v-card
      class="mx-auto my-12 align-start flex-column"
      :max-width="getContentWidth * 0.7"
      tile
      outlined
    >
      <v-text-field
        label="title"
        :rules="rules"
        hide-details="auto"
        v-model="getArticle.title"
        class="mx-5"
      ></v-text-field>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="black--text">
        <v-textarea
          outlined
          name="input-6-8"
          label="content"
          v-model="getArticle.content"
          height="600"
          hide-details
        ></v-textarea>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text @click="modifyArticle()">
          수정
        </v-btn>
        <v-btn color="deep-purple lighten-2" text @click="goBack()">
          취소
        </v-btn>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>

      <router-view />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ArticleForm",
  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  computed: {
    ...mapGetters(["getContentWidth", "getArticle"]),
  },
  methods: {
    modifyArticle() {
      let article = this.getArticle;

      this.$store.dispatch("modifyArticle", article);
      this.$router.push({
        name: "CommentList",
        params: {
          boardSeq: this.$route.params.boardSeq,
          id: this.$route.params.articleId,
        },
      });
    },
  },
  created() {
    this.$store.dispatch("callArticle", this.$route.params.articleId);
  },
};
</script>

<style></style>
