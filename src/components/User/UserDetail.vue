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
                        {{ getUserInfo?.nickname }}
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
                    <div class="mx-5" v-if="isMy">
                      <v-btn
                        depressed
                        color="blue lighten-4"
                        class="mt-4 mb-4 mr-4"
                        @click="goModify(getUserInfo?.id)"
                      >
                        <v-icon color="blue lighten-1">mdi-pencil</v-icon>
                      </v-btn>
                    </div>
                    <div class="mx-5" v-if="!isMy">
                      <v-btn
                        v-if="isCheck"
                        depressed
                        color="grey lighten-4"
                        class="mt-4 mb-4 mr-4"
                        @click="follow()"
                      >
                        <v-icon color="grey lighten-1">mdi-heart</v-icon>
                      </v-btn>
                      <v-btn
                        v-else
                        depressed
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
                          { label: '홈트', value: getDailyType[1]?.count },
                          { label: '요가', value: getDailyType[0]?.count },
                          { label: '피트니스', value: getDailyType[3]?.count },
                          { label: '필라테스', value: getDailyType[2]?.count },
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
              <v-card-title class="">
                Level {{ getUserInfo?.level }}
                <v-spacer></v-spacer>
                레벨업까지 {{ getUserInfo?.level * 100 - getUserInfo?.exp }} exp
              </v-card-title>
              <v-container>
                <!-- 경험치 바 -->
                <v-progress-linear
                  color="light-blue"
                  height="20"
                  :value="getUserInfo?.exp / getUserInfo?.level"
                  striped
                ></v-progress-linear>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-card :color="color">
              <v-card-title class=""> 데일리 운동 기록 </v-card-title>
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
                v-if="getUserInfo?.height > 0 && getUserInfo?.weight > 0"
              >
                키 : {{ getUserInfo?.height }} &nbsp; &nbsp; | &nbsp; 몸무게 :
                {{ getUserInfo?.weight }}
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
                    <v-row>
                      <v-col
                        dense
                        class="ma-2"
                        v-for="following in getFollowings"
                        :key="following.followIndex"
                        cols="4"
                      >
                        <v-card height="30" align="center">
                          <router-link
                            :to="{
                              name: 'detail',
                              params: { id: following.followerId },
                            }"
                            id="to"
                          >
                            {{ following.nickname }}
                          </router-link>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col>
                  <div>
                    <v-card-title>팔로워</v-card-title>
                    <v-divider></v-divider>
                    <v-row>
                      <v-col
                        dense
                        class="ma-2"
                        v-for="follower in getFollowers"
                        :key="follower.followIndex"
                        cols="4"
                      >
                        <v-card height="30" align="center">
                          <router-link
                            :to="{
                              name: 'detail',
                              params: { id: follower.userId },
                            }"
                            id="to"
                          >
                            {{ follower.nickname }}
                          </router-link>
                        </v-card>
                      </v-col>
                    </v-row>
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
      isCheck: this.getisfollow,
    };
  },
  methods: {
    follow() {
      let payload = {
        followerId: this.$route.params.id,
        userId: sessionStorage.getItem("currentLogin_id"),
      };

      this.$store.dispatch("createFollow", payload);
      this.isCheck = !this.isCheck;
      this.$router.go();
    },
    unfollow() {
      let payload = {
        followerId: this.$route.params.id,
        userId: sessionStorage.getItem("currentLogin_id"),
      };

      this.$store.dispatch("deleteFollow", payload);
      this.isCheck = !this.isCheck;
      this.$router.go();
    },
    goModify(id) {
      this.$router.push({ name: "modify", params: { id: id } }).catch(() => {});
    },
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
      "getFollowings",
      "getFollowers",
      "getisfollow",
    ]),
    isMy() {
      return this.getUserInfo?.id == this.getLoginUser?.id;
    },
    extime() {
      let min = 0;

      this.getDaily.forEach((currentElement) => {
        min += currentElement.count * 1;
      });

      let time = Math.floor(min / 60);
      min %= 60;

      return time + "시간 " + min + "분";
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
      })
      .then(() => {
        return this.$store.dispatch("setFollowingList", this.$route.params.id);
      })
      .then(() => {
        return this.$store.dispatch("setFollowerList", this.$route.params.id);
      })
      .then(() => {
        let payload = {
          followerId: this.$route.params.id,
          userId: sessionStorage.getItem("currentLogin_id"),
        };

        if (payload.followerId == payload.userId) return null;
        else return this.$store.dispatch("setIsfollow", payload);
      })
      .then(() => {
        this.isCheck = this.getisfollow;
      });
  },
};
</script>

<style>
#profile {
  border-radius: 50%;
}
</style>
