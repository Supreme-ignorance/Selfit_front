<template>
  <div>
    <router-view :key="$route.fullPath" />
    <v-container id="outer">
      <v-row align="center">
        <v-spacer></v-spacer>
        <div class="mt-3 d-flex flex-row-reverse">
          <v-btn
            color="deep-purple lighten-2"
            text
            class="mr-5"
            @click="ArticleWrite()"
          >
            글 쓰기
          </v-btn>
        </div>
      </v-row>
      <v-divider></v-divider>
      <v-container>
        <v-layout justify-center>
          <v-data-table
            :headers="headers"
            :items="getArticles"
            single-expand
            :expanded.sync="expanded"
            item-key="articleId"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:[`item.sn`]="{ index }">
              {{ index + 1 }}
            </template>
            <template v-slot:[`item.title`]="{ item }">
              <router-link
                :to="{
                  name: 'CommentList',
                  params: {
                    id: item.articleId,
                  },
                }"
              >
                {{ item.title }}
              </router-link>
            </template>
          </v-data-table>
        </v-layout>
        <br />
        <div></div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "article-List",
  data() {
    return {
      bytItems: ["제목", "작성자", "등록일", "조회수"],
      dirItems: ["ASC", "DESC"],
      headers: [
        {
          text: "번호",
          align: "start",
          sortable: false,
          value: "sn",
        },
        {
          text: "제목",
          value: "title",
        },
        { text: "작성자", value: "writerNickName" },
        { text: "등록일", value: "regDate" },
        { text: "조회수", value: "viewCnt" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getArticles", "getContentWidth", "getLoginUser"]),
  },
  created() {
    this.$store.dispatch("callArticlesPromise", this.$route.params.boardSeq);
  },
  methods: {
    ArticleWrite() {
      if (this.getLoginUser.id) {
        this.$router.push({ name: "ArticleWrite" }).catch(() => {});
      } else {
        alert("로그인 해주세요.");
      }
    },
  },
};
</script>

<style></style>
