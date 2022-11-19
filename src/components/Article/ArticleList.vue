<template>
  <div>
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
                    name: 'ArticleDetail',
                    params: {
                      boardSeq: article.boardSeq,
                      id: article.articleId,
                    },
                  }"
                >
                  {{ article.title }}
                </router-link>
              </td>
              <td>{{ article.writer }}</td>
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
  computed: {
    ...mapGetters(["getArticles"]),
  },
  created() {
    this.$store.dispatch("callArticles", this.$route.params.boardSeq);
  },
  methods: {},
};
</script>

<style></style>
