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
        <v-row dense class="my-3">
          <v-col cols="12">
            <v-card :color="color">
              <v-row>
                <v-col cols="4" align-self="center">
                  <v-row justify="center">
                    <div>
                      <v-img
                        id="profile"
                        src="@/assets/baekho1.jpg"
                        width="120"
                        class="mx-5 my-7"
                      ></v-img>
                      <v-card-title class="text-h4 mx-2">
                        {{ getUserInfo.nickname }}
                      </v-card-title>
                      <v-card-text
                        >SELFIT과 함께한 시간 | {{ extime }}
                      </v-card-text>
                    </div>
                  </v-row>
                </v-col>
                <v-col cols="8" align-self="center">
                  <v-row>
                    <v-spacer></v-spacer>
                    <div class="mx-5" v-if="!isMy">
                      <v-btn
                        depressed
                        color="grey lighten-4"
                        class="mt-4 mb-4 mr-4"
                        @click="follow()"
                      >
                        <v-icon color="grey lighten-2">mdi-heart</v-icon>
                      </v-btn>
                      <v-btn
                        color="pink lighten-3"
                        class="mt-4 mb-4 mr-4"
                        @click="unfollow()"
                      >
                        <v-icon color="pink">mdi-heart</v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                  <v-row class="ma-5">
                    <v-spacer></v-spacer>
                    <v-card>
                      <!-- 차트 사용 참고 링크 https://github.com/djaxho/pure-vue-chart?ref=madewithvuejs.com -->
                      <pure-vue-chart
                        :points="[
                          { label: '홈트', value: getDailyType[1].count },
                          { label: '요가', value: getDailyType[0].count },
                          { label: '피트니스', value: getDailyType[3].count },
                          { label: '필라테스', value: getDailyType[2].count },
                        ]"
                        :width="400"
                        :height="200"
                        class="ma-3"
                        barColor="#f89b00"
                        :show-x-axis="true"
                        :show-values="true"
                      />
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-card :color="color">
              <v-card-title class="text-h5">
                Level {{ getUserInfo.level }}
                <v-spacer></v-spacer>
                레벨업까지 {{ getUserInfo.exp }} exp
              </v-card-title>
              <v-container>
                <!-- 경험치 바 -->
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
            <v-card :color="color">
              <v-card-title class="text-h5"> 데일리 운동 기록 </v-card-title>
              <v-layout>
                <CalendarHeatmap
                  :end-date="Date.now()"
                  :range-color="[
                    '#F5F5F5',
                    '#D1C4E9',
                    '#B39DDB',
                    '#9575CD',
                    '#673AB7',
                  ]"
                  :values="getDaily"
                  class="mx-5"
              /></v-layout>

              <v-card-subtitle></v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-card :color="color">
              <v-card-text
                v-if="getUserInfo.height > 0 && getUserInfo.weight > 0"
              >
                키 : {{ getUserInfo.height }} &nbsp; &nbsp; | &nbsp; 몸무게 :
                {{ getUserInfo.weight }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row dense class="my-2">
          <v-col cols="12">
            <v-card :color="color">
              <v-row>
                <v-col>
                  <div>
                    <v-card-title>팔로우</v-card-title>
                    <v-divider></v-divider>
                  </div>
                </v-col>
                <v-col>
                  <div>
                    <v-card-title>팔로워</v-card-title>
                    <v-divider></v-divider>
                  </div>
                </v-col>
              </v-row>
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
import PureVueChart from "pure-vue-chart";

export default {
  name: "userDetail",
  data() {
    return {
      color: "#FEEEF1",
    };
  },
  components: {
    CalendarHeatmap,
    PureVueChart,
  },
  computed: {
    ...mapGetters([
      "getDaily",
      "getContentWidth",
      "getUserInfo",
      "getDailyType",
      "getLoginUser",
    ]),
    isMy() {
      return this.getUserInfo.id == this.getLoginUser.id;
    },
    extime() {
      let time = 0;

      this.getDaily.forEach((currentElement) => {
        time += currentElement.count * 1;
      });

      return time;
    },
  },
  created() {
    this.$store
      .dispatch("setUserInfo", this.$route.params.id)
      .then(() => {
        return this.$store.dispatch("setDaily", this.$route.params.id);
      })
      .then(() => {
        return this.$store.dispatch("setDailyType", this.$route.params.id);
      });
  },
};
</script>

<style>
#profile {
  border-radius: 50%;
}
</style>
