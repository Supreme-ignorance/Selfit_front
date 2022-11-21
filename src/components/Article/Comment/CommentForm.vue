<template>
  <div>
    <v-container>
      <v-card
        class="mx-auto my-1 align-start flex-column"
        :max-width="getContentWidth * 0.9"
        outlined
      >
        <v-card-text>
          <div class="black--text mb-1">
            comment.writerNickname | comment.regDate
          </div>
          <v-divider class="mx-4"></v-divider>
          <div class="black--text my-1">comment.content</div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="deep-purple lighten-2" text @click="goBack()">
            취소
          </v-btn>
          <v-btn color="deep-purple lighten-2" text> 등록 </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(["getContentWidth"]),
    getMy() {
      return 1;
    },
  },
};
</script>

<style></style>
