<template>
  <div>
    <v-container>
      <v-card
        class="mx-auto my-1 align-start flex-column"
        :max-width="getContentWidth * 0.9"
        outlined
      >
        <v-card-text>
          <h3 class="black--text mb-3">{{ getMyNickName }}</h3>
          <v-textarea
            outlined
            name="input-6-3"
            label="내용"
            v-model="content"
            hide-details
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="deep-purple lighten-2" text @click="goBack()">
            취소
          </v-btn>
          <v-btn color="deep-purple lighten-2" text @click="writeComment()">
            등록
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    writeComment() {
      let comment = {
        articleId: this.getArticle.articleId,
        writer: this.getId,
        content: this.content,
        right: 0,
        left: 0,
      };

      this.$store.dispatch("writeComment", comment);
      this.$router
        .push({
          name: "CommentList",
          params: {
            idx: this.idx,
          },
        })
        .catch(() => {});
    },
  },
  computed: {
    ...mapGetters(["getContentWidth", "getArticle"]),
    getMyNickName() {
      return sessionStorage.getItem("currentLogin_nickname");
    },
    getId() {
      return sessionStorage.getItem("currentLogin_id");
    },
    idx() {
      let idx = this.$route.params.idx * 1;
      return idx;
    },
  },
};
</script>

<style></style>
