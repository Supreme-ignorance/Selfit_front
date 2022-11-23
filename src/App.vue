<template>
  <v-app>
    <myHeader :key="getLoginUser"></myHeader>
    <router-view />
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
  },
};
</script>
