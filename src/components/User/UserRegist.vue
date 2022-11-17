<template>
  <div>
    <div class="col mt-12"></div>
    <v-container style="width: 450px">
        <v-layout align-center row wrap>
          <v-layout>
            <v-flex>
              <v-card>
                <v-toolbar flat color="indigo">
                  <v-toolbar-title><span class="white--text">회원가입</span>
                  </v-toolbar-title>
                </v-toolbar>
                <div class="pa-5">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="id" label="id"></v-text-field>
                    <v-text-field v-model="password" label="password"></v-text-field>
                    <v-text-field v-model="name" label="name"></v-text-field>
                    <v-text-field v-model="email" label="email"></v-text-field>
                    <v-text-field v-model="age" label="age"></v-text-field>
                    <v-text-field v-model="gender" label="gender"></v-text-field>
                    <div class="mt-3 d-flex flex-row-reverse">
                      <v-btn
                  color="blue"
                  class="mr-4"
                  @click="register()"
                >
                  회원가입
                </v-btn>
                    </div>
                  </v-form>
                </div>
              </v-card>
              <v-sheet>
                
              </v-sheet>
              
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
      

    
  </div>
  
</template>

<script>

export default {  };
</script>

<style></style>
