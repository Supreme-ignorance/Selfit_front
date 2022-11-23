<template>
  <div>
    <v-container>
      <v-col cols="6">
        <v-row>
          <v-img src="@/assets/all.png" width="7" class="mx-10 my-7"></v-img>
          <v-img src="@/assets/house.png" width="7" class="mx-10 my-7"></v-img>
          <v-img src="@/assets/sport.png" width="7" class="mx-10 my-7"></v-img>
          <v-img src="@/assets/meditation.png" width="7" class="mx-10 my-7"></v-img>
          <v-img src="@/assets/pilates.png" width="7" class="mx-10 my-7"></v-img>
          
        </v-row>
      </v-col>


      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="4">
          <v-select :items="items" label="정렬 기준">
          </v-select>
          <v-select class="mx-2" :items="items" label="정렬 순서">
          </v-select>
        </v-col>
      </v-row>
      <v-layout justify-center style="width: 90%">
        <v-row>
          <div v-for="video in getVideos" :key="video.videoId">
            <v-card
              @click="goUrl(video.videoId)"
              class="mx-3 my-12"
              max-width="374"
              min-height="430"
            >
              <v-img
                height="250"
                :src="`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`"
              ></v-img>
              <v-card-title>{{ video.title }}</v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <v-row align="center" class="my-2 mx-2">
                  <div class="text-subtitle-1">{{ video.channelName }}</div>
                  <v-spacer></v-spacer>
                  <div class="text-subtitle-1">
                    👀 {{ video.viewCnt }} | 💜 {{ video.likeCnt }}
                  </div>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "video-List",
  computed: {
    ...mapGetters(["getVideos"]),
  },
  created() {
    this.$store.dispatch("setVideoList");
  },
  methods: {
    goUrl(videoId) {
      this.$router.push(`/video/${videoId}`).catch(() => {});
    },
  },
};
</script>

<style></style>
