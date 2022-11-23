<template>
  <v-container>
    <v-list-item-title class="text-h6"> 운동 기록 </v-list-item-title>
    <v-list-item-subtitle> 오늘도 고생하셨어요 </v-list-item-subtitle>
    <v-row align="center">
      <v-col md="4">
        <v-select :items="types" label="type" v-model="type"> </v-select
      ></v-col>
      <v-col md="3">
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
      type: null,
      time: null,
      types: ["홈트", "피트니스", "요가", "필라테스"],
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
        type: this.type,
      };

      this.time = "";
      this.type = "";

      this.$store.dispatch("inputTime", daily);
    },
  },
};
</script>

<style></style>
