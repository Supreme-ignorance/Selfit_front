<template>
  <div>
    <router-view :key="$route.fullPath" />
    <v-container id="outer">
      <v-divider></v-divider>
      <v-row align="center">
        <div class="my-7 d-flex flex-row-reverse">
          <v-btn
            color="deep-purple lighten-2"
            text
            class="mr-5 px-10"
            @click="goBoard($route.params.boardSeq)"
            >{{ getBoards[$route.params.boardSeq - 1].boardName }}
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="my-7 d-flex flex-row-reverse" v-if="getLoginUser.id">
          <v-btn color="deep-purple lighten-2" text class="mr-5">
            글 쓰기
          </v-btn>
        </div>
      </v-row>
      <v-divider></v-divider>
      <v-container>
        <v-layout justify-center class="my-10">
          <v-data-table
            :headers="headers"
            :items="getArticles"
            item-key="articleId"
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:[`item.sn`]="{ index }">
              {{ index + 1 }}
            </template>
            <template v-slot:[`item.title`]="{ item }">
              <v-chip color="">
                <router-link
                  :to="{
                    name: 'CommentList',
                    params: {
                      id: item.articleId,
                    },
                  }"
                  id="to"
                >
                  {{ item.title }}
                </router-link>
              </v-chip>
            </template>
            <template v-slot:[`item.writerNickName`]="{ item }">
              <v-chip color="">
                <router-link
                  :to="{
                    name: 'detail',
                    params: {
                      id: item.writerId,
                    },
                  }"
                  id="to"
                >
                  {{ item.writerNickName }}
                </router-link>
              </v-chip>
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
          width: 100,
        },
        {
          text: "제목",
          value: "title",
          width: 500,
        },
        { text: "작성자", value: "writerNickName", width: 100 },
        { text: "등록일", value: "regDate", width: 200 },
        { text: "조회수", value: "viewCnt", width: 100 },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getArticles",
      "getContentWidth",
      "getLoginUser",
      "getBoards",
    ]),
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
    goBoard(url) {
      this.$router
        .push({ name: "ArticleList", params: { boardSeq: url } })
        .catch(() => {});
    },
  },
};
</script>

<style scope>
#to {
  margin: 10px;
  text-decoration: none;
  color: black;
}
</style>
