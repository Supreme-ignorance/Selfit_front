<template>
  <div>
    <v-container>
      <CalendarHeatmap :end-date="Date.now()" :values="getDaily"
    /></v-container>
  </div>
</template>

<script>
import { CalendarHeatmap } from "vue-calendar-heatmap";
import { mapGetters } from "vuex";

export default {
  name: "userDetail",
  components: {
    CalendarHeatmap,
  },
  computed: {
    ...mapGetters(["getDaily"]),
  },
  created() {
    this.$store.dispatch("setDaily", "ssafy");
  },
};
</script>

<style></style>
