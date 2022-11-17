<template>
  <div>
    <h3>리뷰 상세보기</h3>
    <div>{{ review.title }}</div>
    <div>{{ review.viewCnt }}</div>
    <div>{{ review.writer }}</div>
    <div>{{ review.regDate }}</div>
    <div>{{ review.content }}</div>

    <button @click="moveUpdate">수정</button>
    <button @click="deleteReview">삭제</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'reviewDetail',
  computed: {
    ...mapState(['review']),
  },
  created() {
    const pathName = new URL(document.location).pathname.split('/');
    const id = pathName[pathName.length - 1];
    this.$store.dispatch('getReview', id);
  },
  methods: {
    moveUpdate() {
      this.$router.push({ name: 'reviewModifyForm' });
    },
    deleteReview() {
      this.$store.dispatch('deleteReview', this.review.id);
    },
  },
};
</script>

<style></style>
