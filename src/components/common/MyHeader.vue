<template>
  <header>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link :to="{ name: 'home' }" id="nav_a">
          몸, 좋네요
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/video" id="nav_a"> 비디오 </router-link>

      <v-spacer></v-spacer>

      <a href="#" v-if="getUser" @click="logout" id="nav_a">로그아웃</a>
      <div v-else>
        <router-link :to="{ name: 'login' }" id="nav_a"> 로그인 </router-link>
        <router-link :to="{ name: 'regist' }" id="nav_a">
          회원가입
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            two-line
            v-for="board in getBoards"
            :key="board.boardSeq"
          >
            <v-list-item-content>
              <v-list-item-title>{{ board.boardName }}</v-list-item-title>
              <v-list-item-subtitle>{{
                board.boardDetail
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MyHeader",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapGetters(["getLoginUser", "getBoards"]),
    getUser() {
      if (this.getLoginUser) {
        return true;
      } else {
        return false;
      }
    },
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  created() {
    this.$store.dispatch("callBoards");
  },
};
</script>
<style scope>
#nav_a {
  margin: 10px;
  text-decoration: none;
  color: white;
}
</style>
