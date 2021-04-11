<template>
  <div class="container">
    <div class="desktopNav">
      <desktopNav/>
    </div>
    <div class="mobileNav">
      <mobileNav/>
    </div>
    <router-view/>
    <div class="footers">
      <footers/>
    </div>

  </div>
</template>
<script>

import footers from '@/components/layout/footers.vue'
import desktopNav from '@/components/layout/desktopNav.vue'
import mobileNav from '@/components/layout/mobileNav.vue'


export default {
  name: 'App',
  components: {
    desktopNav,
    footers,
    mobileNav

  },
  data() {
    return {
      dark_switch: true,
      scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

    mounted() {

      window.addEventListener('scroll', this.updateScroll);
    }
  }
}
</script>

<style lang="scss">
@import "../src/assets/Colors/colors.scss";
@import "../src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $textFont;

}

.container {
  color: $textColor;
  background: $bgColor;
  button.slick-prev:before, button.slick-next:before {
    background-color: red !important;
    color: white !important;
  }
  .slick-dots .slick-active button:before  {
    color: $textColor;
    opacity:1;
    padding-top: 40px;
    font-size:10px;
  }
  .slick-dots li button:before {
    color: $textColor;
    padding-top: 40px;
    font-size:10px;

  }
  .mobileNav {
    display: none;
  }

}

@media screen and (max-width: 823px) {
  .container {
    .slick-dots .slick-active button:before  {
      color: $textColor;
      opacity:1;
      padding-top: 0px;
      font-size:10px;
    }
    .slick-dots li button:before {
      color: $textColor;
      padding-top: 0px;
      font-size:10px;

    }
    .desktopNav {
      display: none;
    }

    .mobileNav {
      display: block;
    }
  }
}

</style>
