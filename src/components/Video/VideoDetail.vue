<template>
  <div v-if="getVideo">
    <v-card
      class="mx-auto my-12 align-start flex-column"
      :max-width="getContentWidth"
      tile
      outlined
    >
      <v-row align="center" class="my-2 mx-2">
        <v-card-title>
          {{ getVideo.title }} &nbsp; | &nbsp;
          {{ getVideo.videoType }}</v-card-title
        >
        <v-spacer></v-spacer>
        <div v-if="getLoginUser.id">
          <v-btn
            color="deep-purple lighten-2"
            text
            icon
            class="mx-3"
            v-if="isCheck"
            @click="like(getVideo.videoId)"
          >
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-btn
            color="grey"
            text
            icon
            class="mx-3"
            v-else
            @click="unlike(getVideo.videoId)"
          >
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </div>
      </v-row>
      <v-divider class="mx-4 my-3"></v-divider>
      <div>
        <v-col align="center" class="mx-0">
          <iframe
            width="700"
            height="400"
            :src="`https://www.youtube.com/embed/${getVideo.videoId}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </v-col>
      </div>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-row align="center" class="my-2 mx-2">
          <div class="grey--text">채널 : {{ getVideo.channelName }}</div>
          <v-spacer></v-spacer>
          <div class="grey--text">
            조회수 : {{ getVideo.viewCnt }} &nbsp; | &nbsp; 좋아요 :
            {{ getVideo.likeCnt }}
          </div>
        </v-row>
      </v-card-text>

      <router-view />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "video-Detail",
  data() {
    return {
      isCheck: this.getIsLiked,
    };
  },
  computed: {
    ...mapGetters([
      "getVideo",
      "getContentWidth",
      "getLoginUser",
      "getIsLiked",
    ]),
  },
  methods: {
    like(videoId) {
      let payload = {
        id: sessionStorage.getItem("currentLogin_id"),
        videoId: videoId,
      };
      this.$store.dispatch("setLikedVideo", payload);
      this.isCheck = !this.isCheck;
    },
    unlike(videoId) {
      let payload = {
        id: sessionStorage.getItem("currentLogin_id"),
        videoId: videoId,
      };
      this.$store.dispatch("deleteLikedVideo", payload);
      this.isCheck = !this.isCheck;
    },
  },
  created() {
    let payload = {
      id: sessionStorage.getItem("currentLogin_id"),
      videoId: this.$route.params.videoId,
    };

    this.$store.dispatch("setVideo", payload.videoId);
    this.$store.dispatch("isLikedVideo", payload).then(() => {
      this.isCheck = this.getIsLiked;
    });
  },
};
</script>

<style></style>
