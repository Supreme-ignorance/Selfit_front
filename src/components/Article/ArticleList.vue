<template>
  <div>
    <v-container>
      <v-row align="center">
          <v-col class="d-flex" cols="12" sm="4">
            <v-select :items="items" label="정렬 기준">
            </v-select>
            <v-select class="mx-2" :items="items" label="정렬 순서">
            </v-select>
          </v-col>
        </v-row>
      <router-view />
      <v-divider></v-divider>
      <v-container>
        <div class="mt-3 d-flex flex-row-reverse">
          <v-btn
            color="deep-purple lighten-2"
            text
            class="mr-5"
            @click="goUrl('ArticleWrite')"
          >
            글 쓰기
          </v-btn>
        </div>
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
    return {};
  },
  computed: {
    ...mapGetters(["getArticles"]),
    Seq() {
      return this.$route.params.boardSeq;
    },
  },
  created() {
    this.$store.dispatch("callArticlesPromise", this.$route.params.boardSeq);
  },
  watch: {
    Seq: function (newVal) {
      this.$store.dispatch("callArticlesPromise", newVal);
    },
    getArticles: function () {
      this.$store.dispatch("callArticlesPromise", this.Seq);
    },
  },
  methods: {
    goUrl(url) {
      this.$router.push({ name: url }).catch(() => {});
    },
  },
};
</script>

<style></style>
