<template>
  <div>
    <v-card
      class="mx-auto my-12 align-center flex-column"
      :max-width="getContentWidth"
      tile
      outlined
    >
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="text-h5"> Level {{}} </v-card-title>

              <v-container>
                <v-progress-linear
                  color="light-blue"
                  height="20"
                  value="10"
                  striped
                ></v-progress-linear>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5"> Unlimited music now </v-card-title>

              <v-container>
                <CalendarHeatmap :end-date="Date.now()" 
                :range-color="['#F5F5F5', '#D1C4E9', '#B39DDB', '#9575CD', '#673AB7']"
                :values="getDaily"
              /></v-container>

              <v-card-subtitle
                >Listen to your favorite artists and albums whenever and
                wherever, online and offline.</v-card-subtitle
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { CalendarHeatmap } from "vue-calendar-heatmap";
import { mapGetters } from "vuex";

export default {
  name: "userDetail",
  components: {
    CalendarHeatmap,
  },
  computed: {
    ...mapGetters(["getDaily", "getContentWidth"]),
  },
  created() {
    let id = sessionStorage.getItem("currentLogin_id");
    console.log(id);
    if (id == null) this.$router.go(-1);
    this.$store.dispatch("setDaily", "ssafy");
  },
};
</script>

<style></style>
