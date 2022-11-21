<template>
  <div v-if="getVideo">
    <v-card
      class="mx-auto my-12 align-start flex-column"
      max-width="500"
      tile
      outlined
    >
      <v-card-title>{{ getArticle.title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="grey--text">{{ getArticle.writerNickName }}</div>
          <div class="grey--text">&nbsp;| {{ getArticle.regDate }}</div>
          <v-spacer></v-spacer>
          <div class="grey--text">조회수 : {{ getArticle.viewCnt }}</div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="black--text">
        <div>
          {{ getArticle.content }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="goCommentForm()">
          댓글 작성
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="goUrl('ArticleModify')"
        >
          수정
        </v-btn>
        <v-btn color="deep-purple lighten-2" text> 삭제 </v-btn>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>

      <router-view />
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>