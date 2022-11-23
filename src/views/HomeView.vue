<template>
  <div>
    <div id="hovering">
      <v-hover v-slot="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
      >
        <v-banner id="banner" class="pa-0" dark>
        <v-carousel id="carousel" hide-delimiter
        cycle
        height="700"
        hide-delimiter-background
        show-arrows-on-hover>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src">
          </v-carousel-item>
        </v-carousel>
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out purple lighten-3 v-card--reveal text-h2 white--text align-self-center"
            style="height: 100%;"
          >
            SELFIT과 함께해요
          </div>
        </v-expand-transition>
        </v-banner>
      </v-card>
    </v-hover>
    </div>
    
    <!-- <div class="mx-auto my-12 align-center flex-column">
      <h3>셀핏에 오신 것을 환영합니다</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
      {
        src: require("../assets/yoga_illustrate.png")
      },
      {
        src: require("../assets/main1.jpg")
      },
      {
        src: require("../assets/main2.jpg"),
      },
      {
        src: require("../assets/yoga_park.jpg")
      },
      ]
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 80%;
  left: 10vw;
  margin-left: auto;
  margin-right: auto;
}
#hovering {
  margin: auto;
}
</style>
