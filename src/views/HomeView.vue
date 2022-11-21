<template>
  <div>
    <div>
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
      </v-banner>
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
