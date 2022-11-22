<template>
  <header>
    <v-app-bar color="deep-purple accent-4" height="90" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <router-link :to="{ name: 'home' }" id="nav_a">
        <v-img
          src="@/assets/selfit_logo_smallest.png"
          transition="scale-transition"
          max-width="170"
          max-height="55"
        />
      </router-link>

      <v-spacer></v-spacer>
      <div v-if="getUser">
        <router-link :to="{ name: 'detail' }" id="nav_a">
          {{ getNickName }}님 안녕하세요
        </router-link>
        <a href="#" @click="logout" id="nav_a">로그아웃</a>
      </div>
      <div v-else>
        <router-link :to="{ name: 'login' }" id="nav_a"> 로그인 </router-link>
        <router-link :to="{ name: 'regist' }" id="nav_a">
          회원가입
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-3"
        >
          <v-list-item>
            <v-list-item-content @click="goUrl('/video')">
              <v-list-item-title class="text-h6"> 비디오 </v-list-item-title>
              <v-list-item-subtitle>
                이것만 따라하면 당신도 몸짱
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            two-line
            v-for="board in getBoards"
            :key="board.boardSeq"
          >
            <v-list-item-content @click="goBoard(board.boardSeq)">
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
    goUrl(url) {
      this.$router.push(url).catch(() => {});
    },
    goBoard(url) {
      this.$router
        .push({ name: "ArticleList", params: { boardSeq: url } })
        .catch(() => {});
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
    getNickName() {
      return sessionStorage.getItem("currentLogin_nickname");
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
    this.$store.dispatch("callBoardsPromise");
  },
};
</script>
<style scope>
#nav_a {
  margin: 10px;
  text-decoration: none;
  color: white;
}

#title {
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-weight: bold;
}
</style>
