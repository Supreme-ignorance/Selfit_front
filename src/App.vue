<template>
  <v-app>
    <myHeader></myHeader>
    <router-view />
  </v-app>
</template>

<script>
import myHeader from "@/components/common/MyHeader.vue";

export default {
  name: "app",
  components: {
    myHeader,
  },
};
</script>
