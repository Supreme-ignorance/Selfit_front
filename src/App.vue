<template>
  <v-app>
    <myHeader :key="isNull"></myHeader>
    <router-view />
    <myFooter></myFooter>
  </v-app>
</template>

<script>
import myHeader from "@/components/common/MyHeader.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    myHeader,
  },
  computed: {
    ...mapGetters(["getLoginUser"]),
    isNull() {
      let chk = this.getLoginUser;
      return chk === undefined || chk === null ? true : false;
    },
  },
};
</script>
