<template>
  <div>
    <v-banner id="banner" class="pa-0" dark>
      <v-img src="@/assets/jogging_road_cut.jpg" height="300"></v-img>
    </v-banner>
    <v-card
    class="mx-auto my-12 align-center flex-column"
    :max-width="getContentWidth"
    tile
    outlined
    >
    <v-container>
      <v-img src="@/assets/profile.png" width="100" class="mx-10 my-10"></v-img>
      <div v-if="getUserInfo">
        <h3 class="mx-10 my-10">
          {{getUserInfo.nickname}}
        </h3>
      </div>
        <v-row dense>
          <v-col cols="12">

            <v-card-text>
              <v-row align="center" class="mx-2">
                <div>채널 : {{ getUserInfo.exp }}</div>
                <v-spacer></v-spacer>
                <div>
                  좋아요 :
                  {{ getUserInfo.exp }}
                </div>
              </v-row>
            </v-card-text>

            <v-card color="#385F73" dark>
              <v-row align="center" class="mx-2">

              </v-row>
              <v-card-title class="text-h5"> Level {{getUserInfo.level}} 
                <v-spacer></v-spacer>
                레벨업까지 {{ getUserInfo.exp }} exp
              </v-card-title>
              <v-container>
                <v-progress-linear
                  color="light-blue"
                  height="20"
                  :value="getUserInfo.exp / getUserInfo.level"
                  striped
                ></v-progress-linear>
              </v-container>
            </v-card>


          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5"> 데일리 운동 기록 </v-card-title>

              <v-container>
                <CalendarHeatmap :end-date="Date.now()" 
                :range-color="['#F5F5F5', '#D1C4E9', '#B39DDB', '#9575CD', '#673AB7']"
                :values="getDaily"
              /></v-container>

              <v-card-subtitle
                ></v-card-subtitle
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
    ...mapGetters(["getDaily", "getContentWidth", "getUserInfo"]),
    callUser() {
      return this.$route.params.id;
    }
  },
  created() {
    this.$store.dispatch("setDaily", this.callUser);
    this.$store.dispatch("setUserInfo", this.callUser)
  },
  
  
};
</script>

<style>

</style>
