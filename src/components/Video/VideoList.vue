<template>
  <div>
    <div class="col mt-12"></div>
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
      <br />
      <div>
        <v-layout style="width: 90%" justify-end>
          <select v-model="mode">
            <option value="1">제목</option>
            <option value="2">내용</option>
            <option value="3">제목+내용</option>
          </select>
          <input type="text" v-model="keyword" />
          <v-btn color="blue lighten-4" class="mr-4" @click="search">
            검색</v-btn
          >
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VideoList",
  computed: {
    ...mapGetters(["getVideos"]),
  },
  created() {
    this.$store.dispatch("setVideoList");
  },
};
</script>

<style></style>
