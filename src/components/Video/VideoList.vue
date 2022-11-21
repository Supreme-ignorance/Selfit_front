<template>
  <div>
    <v-container>
      <v-layout justify-center style="width: 90%">
        <v-row>
          <div v-for="video in getVideos" :key="video.videoId">
            <v-card @click="goUrl(video.videoId)"   class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`"></v-img>
            <v-card-title>{{video.title}}</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <div class="text-subtitle-1">{{ video.channelName }} | 👀 {{video.viewCnt}} | 💜 {{video.likeCnt}}</div>
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
      this.$router.push(`/video/${videoId}`).catch(() => {})
    },
  },
};
</script>

<style></style>
