<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VideoList",
  computed: {
    ...mapState(["videos"]),
  },
  created() {
    this.$store.dispatch("setVideoList");
  },
};
</script>

<style></style>
