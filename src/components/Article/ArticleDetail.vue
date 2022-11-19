<template>
  <div>
    <div>{{ getArticle(idx).title }}</div>
    <div>{{ getArticle(idx).viewCnt }}</div>
    <div>{{ getArticle(idx).writer }}</div>
    <div>{{ getArticle(idx).regDate }}</div>
    <div>{{ getArticle(idx).content }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "article-detail",
  computed: {
    ...mapGetters(["getArticle"]),
    idx() {
      return this.$route.params.idx;
    },
  },
  created() {},
  methods: {},
};
</script>

<style></style>
