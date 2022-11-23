<template>
  <div>
    <div class="col mt-12"></div>
    <v-container style="width: 450px">
      <v-layout align-center row wrap>
        <v-layout>
          <v-flex>
            <v-card>
              <v-toolbar flat color="indigo">
                <v-toolbar-title
                  ><span class="white--text">회원가입</span>
                </v-toolbar-title>
              </v-toolbar>
              <div class="pa-5">
                <v-form ref="form" lazy-validation>
                  <v-divider class="mx-4"></v-divider>
                  <v-text-field v-model="id" label="id"></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    label="password"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                  ></v-text-field>
                  <v-divider class="mx-4"></v-divider>

                  <v-text-field v-model="name" label="name"></v-text-field>
                  <v-text-field
                    v-model="nickname"
                    label="nickname"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="email"
                    type="email"
                  ></v-text-field>

                  <v-divider class="mx-4"></v-divider>

                  <v-text-field
                    v-model="age"
                    label="age"
                    type="number"
                  ></v-text-field
                  ><v-text-field
                    v-model="height"
                    label="height"
                    type="number"
                  ></v-text-field
                  ><v-text-field
                    v-model="weight"
                    label="weight"
                    type="number"
                  ></v-text-field>
                  <v-select
                    v-model="gender"
                    :items="genders"
                    label="gender"
                  ></v-select>
                  <div class="mt-3 d-flex flex-row-reverse">
                    <v-btn color="deep-purple lighten-2" text @click="goBack()">
                      취소
                    </v-btn>
                    <v-btn color="blue" class="mr-4" @click="register()">
                      회원가입
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
  name: "regist-form",
  data() {
    return {
      id: "",
      password: "",
      name: "",
      nickname: "",
      gender: "",
      age: 0,
      email: "",
      height: 0,
      weight: 0,
      genders: ["man", "woman"],
      show: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    register() {
      let user = {
        id: this.id,
        password: this.password,
        level: null,
        exp: null,
        name: this.name,
        nickname: this.nickname,
        gender: this.gender,
        age: this.age,
        email: this.email,
        height: this.height,
        weight: this.weight,
        InfoDisclose: null,
      };

      this.$store.dispatch("registUser", user);
    },
  },
};
</script>

<style></style>
