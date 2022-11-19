<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-simple-table style="width: 90%">
          <thead>
            <tr>
              <th>제목</th>
              <th>채널명</th>
              <th>운동 부위</th>
              <th>조회수</th>
              <th>좋아요</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="video in getVideos" :key="video.videoId">
              <td>
                <router-link :to="`/video/${video.videoId}`">
                  {{ video.title }}
                </router-link>
              </td>
              <td>{{ video.channelName }}</td>
              <td>{{ video.workoutPart }}</td>
              <td>{{ video.viewCnt }}</td>
              <td>{{ video.likeCnt }}</td>
            </tr>
          </tbody>
        </v-simple-table>
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
};
</script>

<style></style>
