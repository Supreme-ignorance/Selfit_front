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
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-divider class="mx-4"></v-divider>
                  <v-text-field v-model="user.id" label="id"></v-text-field>
                  <v-text-field
                    v-model="user.password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    label="password"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                  ></v-text-field>
                  <v-divider class="mx-4"></v-divider>

                  <v-text-field v-model="user.name" label="name"></v-text-field>
                  <v-text-field
                    v-model="user.nickname"
                    label="nickname"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.email"
                    label="email"
                    type="email"
                  ></v-text-field>

                  <v-divider class="mx-4"></v-divider>

                  <v-text-field
                    v-model="user.age"
                    label="age"
                    type="number"
                  ></v-text-field
                  ><v-text-field
                    v-model="user.height"
                    label="height"
                    type="number"
                  ></v-text-field
                  ><v-text-field
                    v-model="user.weight"
                    label="weight"
                    type="number"
                  ></v-text-field>
                  <v-select
                    v-model="user.gender"
                    :items="genders"
                    label="gender"
                  ></v-select>
                  <div class="mt-3 d-flex flex-row-reverse">
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
      user: {
        id: "",
        password: "",
        name: "",
        nickname: "",
        gender: "",
        age: 0,
      },
      genders: ["man", "woman"],
      show: false,
    };
  },
  methods: {
    register() {
      this.$store.dispatch("registUser", this.user);
    },
  },
};
</script>

<style></style>
