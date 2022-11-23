<template>
  <div>
    <v-card
      class="mx-auto my-12 align-start flex-column"
      :max-width="getContentWidth * 1.5"
      tile
      outlined
    >
      <v-container>
        <v-layout class="grey lighten-5">
          <v-row justify="space-around">
            <v-img
              src="@/assets/all.png"
              max-width="150"
              max-height="150"
              class="mx-10 my-7"
              @click="getVideoList('모두')"
            ></v-img>
            <v-img
              src="@/assets/house.png"
              max-width="150"
              max-height="150"
              class="mx-10 my-7"
              @click="getVideoList('홈트')"
            ></v-img>
            <v-img
              src="@/assets/sport.png"
              max-width="150"
              max-height="150"
              class="mx-10 my-7"
              @click="getVideoList('피트니스')"
            ></v-img>
            <v-img
              src="@/assets/meditation.png"
              max-width="150"
              max-height="150"
              class="mx-10 my-7"
              @click="getVideoList('요가')"
            ></v-img>
            <v-img
              src="@/assets/pilates.png"
              max-width="150"
              max-height="150"
              class="mx-10 my-7"
              @click="getVideoList('필라테스')"
            ></v-img>
          </v-row>
        </v-layout>

        <v-layout>
          <v-row align="center" justify="space-around">
            <v-spacer></v-spacer>
            <v-col cols="2">
              <v-select :items="orderBys" label="정렬 기준" v-model="orderBy">
              </v-select>
            </v-col>
            <v-col cols="2">
              <v-select
                class="mx-2"
                :items="orderDirs"
                label="정렬 방향"
                v-model="orderDir"
              >
              </v-select>
            </v-col>
            <v-btn
              color="deep-purple lighten-2"
              text
              class="mr-5"
              @click="getVideoList()"
            >
              정렬
            </v-btn>
          </v-row>
        </v-layout>

        <v-layout>
          <v-row justify="space-around">
            <div v-for="likedVideo in getLikedVideos" :key="likedVideo.videoId">
              <v-card
                @click="goUrl(likedVideo.videoId)"
                class="mx-3 my-12"
                max-width="374"
                min-height="430"
              >
                <v-img
                  height="250"
                  :src="`https://img.youtube.com/vi/${likedVideo.videoId}/hqdefault.jpg`"
                ></v-img>
                <v-card-title>{{ likedVideo.title }}</v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-card-text>
                  <v-row align="center" class="my-2 mx-2">
                    <div class="text-subtitle-1">
                      {{ likedVideo.channelName }}
                    </div>
                    <v-spacer></v-spacer>
                    <div class="text-subtitle-1">
                      👀 {{ likedVideo.viewCnt }} | 💜 {{ likedVideo.likeCnt }}
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "likedVideo-List",
  data() {
    return {
      orderBy: null,
      orderDir: null,
      orderBys: [
        "video_id",
        "video_title",
        "channel_name",
        "view_cnt",
        "like_cnt",
      ],
      orderDirs: ["ASC", "DESC"],
    };
  },
  computed: {
    ...mapGetters(["getLikedVideos", "getContentWidth"]),
  },
  created() {
    let id = sessionStorage.getItem("currentLogin_id");
    console.log(id);
    if (id == null) this.$router.go(-1);
    this.$store.dispatch("getLikedVideoList", id);
  },
  methods: {
    goUrl(videoId) {
      this.$router.push(`/video/${videoId}`).catch(() => {});
    },
    getVideoList(type) {
      let payload = {
        videoType: type,
        orderBy: this.orderBy,
        orderDir: this.orderDir,
      };
      this.$store.dispatch("setVideoList", payload);
    },
  },
};
</script>

<style></style>
