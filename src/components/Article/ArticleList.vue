<template>
  <div>
    <router-view />
    <v-divider></v-divider>
    <div class="mt-3 d-flex flex-row-reverse">
      <v-btn
        color="blue lighten-4"
        elevation="2"
        class="mr-4"
        @click="goUrl('ArticleWrite')"
      >
        글 쓰기
      </v-btn>
    </div>
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
              <td>{{ index + 1 }}</td>
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
  },
  methods: {
    goUrl(url) {
      this.$router.push({ name: url }).catch(() => {});
    },
  },
};
</script>

<style></style>
