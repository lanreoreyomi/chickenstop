<template>
  <div class="container">
    <div class="serve">
      <serve-you :text_desc="serve_text" :text_desc2="deliver" :text_desc3="sitting"/>
    </div>

  </div>
</template>

<script>
import ServeYou from '@/components/ServeYou'


export default {
  name: "Location",
  components: {
    ServeYou,
  },
  data() {
    return {
      serve_text: "110 Dekalb Avenue " +
          "Brooklyn NY 11201",
      deliver: "We Deliver 7 Days",
      sitting: "Backyard Seating"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/Colors/colors";
@import "../assets/Fonts/fonts";
@import "../assets/Buttons/Buttons";

.container {
  padding-top: 8vh;

  .serve{
    width: 94% !important;
  }
}

</style>