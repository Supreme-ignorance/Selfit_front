<template>
  <div>
    <div class="col mt-12"></div>
    <v-container style="width: 450px">
      <v-layout align-center row wrap>
        <v-layout>
          <v-flex>
            <v-card>
              <v-toolbar flat color="deep-purple lighten-2">
                <v-toolbar-title
                  ><span class="white--text">로그인</span>
                </v-toolbar-title>
              </v-toolbar>
              <div class="pa-5">
                <v-form ref="form" lazy-validation>
                  <v-text-field v-model="id" label="id" required></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    required
                  ></v-text-field>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <v-btn color="deep-purple lighten-2" text @click="goBack()">
                      취소
                    </v-btn>
                    <v-btn color="blue lighten-4" class="mr-4" @click="login()">
                      로그인
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
export default {
  name: "LoginForm",
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    login() {
      let user = {
        id: this.id,
        password: this.password,
      };

      this.$store.dispatch("setLoginUser", user);
    },
  },
};
</script>

<style></style>
