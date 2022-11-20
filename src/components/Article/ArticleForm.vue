<template>
  <div>
    <v-app>
    <v-main>
      <v-container >
        <v-layout justify-center>
          <v-card>
            <v-form>
              <v-text-field v-model="title" dense outlined label="title" style="width: 80%; margin-left: 100px; padding-top: 50px; margin-right: 100px"
                ></v-text-field>
              <v-textarea v-model="content" label="content" outlined rows="13" style="width: 80%; margin-left: 100px; margin-right: 100px">
              </v-textarea>
              <v-btn width="100px" style="margin-left: 600px; margin-bottom:30px;" >취소</v-btn>
              <v-btn width="100px" style="margin-left: 30px; margin-bottom:30px; margin-right: 100px" type="submit">제출</v-btn>
            </v-form>
          </v-card>
          <v-col cols="12" md="1"/>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "ArticleForm",
};
</script>

<style></style>
