<template>
  <div>
    <v-container>
      <v-layout justify-center style="width: 90%">
        <v-row>
          <div v-for="likedVideo in getLikedVideos" :key="likedVideo.videoId">
            <v-card
              @click="goUrl(likedVideo.videoId)"
              class="mx-auto my-12"
              max-width="374"
            >
              <v-img
                height="250"
                :src="`https://img.youtube.com/vi/${likedVideo.videoId}/hqdefault.jpg`"
              ></v-img>
              <v-card-title>{{ likedVideo.title }}</v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <v-row align="center" class="my-2 mx-2">
                  <div class="text-subtitle-1">{{ likedVideo.channelName }}</div>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "likedVideo-List",
  computed: {
    ...mapGetters(["getLikedVideos"]),
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
  },
};
</script>

<style></style>
