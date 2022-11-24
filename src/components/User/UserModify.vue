<template>
  <div v-if="getUserInfo">
    <div class="col mt-12"></div>
    <v-container style="width: 450px">
      <v-layout align-center row wrap>
        <v-layout>
          <v-flex>
            <v-card>
              <v-toolbar flat color="indigo">
                <v-toolbar-title
                  ><span class="white--text">회원 정보 수정</span>
                </v-toolbar-title>
              </v-toolbar>
              <div class="pa-5">
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    v-model="getUserInfo.password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    label="password"
                    :type="show ? 'text' : 'password'"
                    required
                    @click:append="show = !show"
                  ></v-text-field>

                  <v-text-field
                    v-model="getUserInfo.height"
                    label="height"
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    v-model="getUserInfo.weight"
                    label="weight"
                    type="number"
                  ></v-text-field>
                  <v-select
                    v-model="infoDisclose"
                    label="개인정보 공개여부"
                    :items="booleans"
                  ></v-select>

                  <div class="mt-3 d-flex flex-row-reverse">
                    <v-btn color="deep-purple lighten-2" text @click="goBack()">
                      취소
                    </v-btn>
                    <v-btn color="blue" class="mr-4" @click="modify()">
                      수정
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "regist-form",
  data() {
    return {
      infoDisclose: null,
      show: false,
      booleans: [true, false],
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    modify() {
      let user = {
        id: this.$route.params.id,
        password: this.getUserInfo.password,
        height: this.getUserInfo.height,
        weight: this.getUserInfo.weight,
        infoDisclose: this.infoDisclose,
      };

      this.$store.dispatch("modifyUser", user);
      this.$store.dispatch("logout");
    },
  },
  created() {
    this.$store.dispatch("setUserInfo", this.$route.params.id);
  },
};
</script>

<style></style>
