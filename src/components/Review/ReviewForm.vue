<template>
  <div>
    <h3>리뷰 등록</h3>
    <fieldset>
      <legend>동영상 제목: {{ video_title }}</legend>
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="writer">글쓴이 : </label>
      <input type="text" id="writer" v-model="writer" /><br />
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea>
      <button @click="createBoard">등록</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
  data() {
    return {
      title: '',
      writer: '',
      content: '',
    };
  },
  methods: {
    writeReview() {
      let review = {
        id: 0,
        title: this.title,
        writer: this.writer,
        content: this.content,
      };

      this.$store.dispatch('writeReview', review);
    },
  },
};
</script>

<style></style>
