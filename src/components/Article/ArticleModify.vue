<template>
  <div>
    <h2>리뷰 수정</h2>
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
import { mapState } from 'vuex';
export default {
  name: 'ReviewModify',
  computed: {
    ...mapState(['review']),
  },
  methods: {
    updateReview() {
      let updateReview = {
        id: this.review.id,
        title: this.review.title,
        writer: this.review.writer,
        content: this.review.content,
      };
      this.$store.dispatch('updateReview', updateReview);
    },
  },
};
</script>

<style></style>
