<template>
  <v-container>
    <v-row align="center">
      <v-spacer></v-spacer>
      <v-col md="6">
        <v-text-field
          v-model="time"
          label="time"
          suffix="분"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-btn color="deep-purple lighten-2" text @click="inputTime()">
          등록
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "user-daily-regist",
  data() {
    return {
      time: null,
    };
  },
  computed: {
    ...mapGetters(["getLoginUser"]),
  },
  methods: {
    inputTime() {
      let daily = {
        userId: this.getLoginUser.id,
        count: this.time,
      };

      this.$store.dispatch("inputTime", daily);
    },
  },
};
</script>

<style></style>
