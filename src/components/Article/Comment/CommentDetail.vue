<template>
  <v-container>
    <v-card
      class="mx-auto my-1 align-start flex-column"
      :max-width="getContentWidth * 0.9"
      outlined
      v-if="isModify"
    >
      <v-card-text>
        <h3 class="black--text mb-3">{{ comment.writerNickname }}</h3>
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
        <v-btn color="deep-purple lighten-2" text @click="activeModify()">
          취소
        </v-btn>
        <v-btn color="deep-purple lighten-2" text @click="updateComment()">
          수정
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- 위는 수정 코드ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 아래는 댓글 코드ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->

    <v-card
      class="mx-auto my-1 align-start flex-column"
      :max-width="getContentWidth * 0.9"
      outlined
      v-else
    >
      <v-card-text>
        <div class="black--text mb-1">
          {{ comment.writerNickname }} | {{ comment.regDate }}
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="black--text my-1">{{ comment.content }}</div>
      </v-card-text>

      <v-card-actions v-if="isMycomment">
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text @click="activeModify()">
          수정
        </v-btn>
        <v-btn color="deep-purple lighten-2" text @click="deleteComment()">
          삭제
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "commetn-detail",
  data() {
    return {
      isModify: false,
      content: "",
    };
  },
  computed: {
    ...mapGetters(["getContentWidth"]),
    isMycomment() {
      return this.comment.writer == sessionStorage.getItem("currentLogin_id");
    },
  },
  props: ["comment"],
  methods: {
    activeModify() {
      this.content = this.comment.content;
      this.isModify = !this.isModify;
    },
    deleteComment() {
      this.$store.dispatch("deleteComment", this.comment.commentId);
      this.$router.go();
    },
    updateComment() {
      let comment = this.comment;
      comment.content = this.content;
      this.$store.dispatch("updateComment", comment);
      this.isModify = !this.isModify;
    },
  },
};
</script>

<style></style>
