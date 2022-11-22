<template>
  <div>
    <h2>게시글 수정</h2>

    <div>
      <v-app>
        <v-main>
          <v-container>
            <v-layout justify-center>
              <v-card>
                <v-form ref="form" @submit.prevent="onSubmitForm">
                  <v-text-field
                    v-model="title"
                    dense
                    outlined
                    label="title"
                    style="
                      width: 80%;
                      margin-left: 100px;
                      padding-top: 50px;
                      margin-right: 100px;
                    "
                  >
                    {{ review.title }}
                  </v-text-field>
                  <v-textarea
                    v-model="content"
                    label="content"
                    outlined
                    rows="13"
                    style="width: 80%; margin-left: 100px; margin-right: 100px"
                  >
                    {{ review.content }}
                  </v-textarea>
                  <v-btn
                    width="100px"
                    style="margin-left: 600px; margin-bottom: 30px"
                    >취소</v-btn
                  >
                  <v-btn
                    width="100px"
                    style="
                      margin-left: 30px;
                      margin-bottom: 30px;
                      margin-right: 100px;
                    "
                    type="submit"
                    >제출</v-btn
                  >
                </v-form>
              </v-card>
              <v-col cols="12" md="1" />
            </v-layout>
          </v-container>
        </v-main>
      </v-app>
    </div>

    <fieldset>
      <legend>리뷰 수정하기</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="review.title" /> <br />
      <label for="writer">글쓴이</label>
      <input type="text" id="writer" v-model="review.writer" /> <br />
      <label for="content">글내용</label>
      <textarea v-model="review.content" cols="30" rows="10"></textarea>
      <button @click="updateReview">수정</button>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ReviewModify",
  computed: {
    ...mapState(["review"]),
  },
  methods: {
    updateReview() {
      let updateReview = {
        id: this.review.id,
        title: this.review.title,
        writer: this.review.writer,
        content: this.review.content,
      };
      this.$store.dispatch("updateReview", updateReview);
    },
  },
};
</script>

<style></style>
