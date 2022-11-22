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
        v-model="article.title"
        class="mx-5"
      ></v-text-field>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="black--text">
        <v-textarea
          outlined
          name="input-6-8"
          label="content"
          v-model="article.content"
          height="600"
          hide-details
        ></v-textarea>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text @click="setArticle()">
          작성
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
      article: {
        title: "",
        content: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getContentWidth"]),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    setArticle() {
      let article = {
        boardSeq: this.$route.params.boardSeq,
        writerId: sessionStorage.getItem("currentLogin_id"),
        title: this.article.title,
        content: this.article.content,
      };
      this.$store.dispatch("setArticle", article);
      this.goBack();
    },
  },
};
</script>

<style></style>
