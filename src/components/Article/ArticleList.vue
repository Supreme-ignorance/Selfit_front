<template>
  <div>
    <router-view :key="$route.fullPath" />
    <v-container id="outer">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="4">
          <v-select class="mx-2" :items="bytItems" label="정렬 기준">
          </v-select>
          <v-select class="mx-2" :items="dirItems" label="정렬 순서">
          </v-select>
        </v-col>
        <div class="mt-3 d-flex flex-row-reverse">
          <v-btn color="deep-purple lighten-2" text class="mr-5"> 정렬 </v-btn>
        </div>
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
          <v-simple-table style="width: 90%">
            <thead>
              <tr>
                <th>no.</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(article, index) in getArticles"
                :key="article.articleId"
              >
                <td>{{ getArticles.length - index }}</td>
                <td>
                  <router-link
                    :to="{
                      name: 'CommentList',
                      params: {
                        idx: index + 1,
                      },
                    }"
                  >
                    {{ article.title }}
                  </router-link>
                </td>
                <td>{{ article.writerNickName }}</td>
                <td>{{ article.viewCnt }}</td>
              </tr>
            </tbody>
          </v-simple-table>
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
    };
  },
  computed: {
    ...mapGetters(["getArticles", "getContentWidth", "getLoginUser"]),
  },
  created() {
    this.$store.dispatch("callArticlesPromise", this.$route.params.boardSeq);
  },
  watch: {},
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
