<template>
  <div class="container">
    <div class="desktopNav">
      <desktop-nav/>
    </div>
    <div class="mobileNav">
      <mobile-nav/>
    </div>
    <router-view/>
    <div class="footers">
      <Footer/>
    </div>

  </div>
</template>
<script>

import Footer from '@/components/layout/Footer.vue'
import DesktopNav from '@/components/layout/TheDesktopNav.vue'
import MobileNav from '@/components/layout/TheMobileNav.vue'


export default {
  name: 'App',
  components: {
    DesktopNav,
    Footer,
    MobileNav

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
  },
  metaInfo() {
    return {
      title: "Chicken Stop | Flame Grilled Way",
      titleTemplate: ' %s | Best Grilled Chicken in New York',
      meta: [
        {charset: 'utf-8'},
        {name: 'description', content: 'gator'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          vmid: "description",
          name: "description",
          content:
              " Casual setting specializing in Flame-Grilled Chicken, Ribs, Wings & Burgers. " +
              "Enjoy Our fresh Salads & Bowls, Sandwiches & Gyros, Wraps & Burritos, and Family Meals ! Our side orders " +
              "and sauces are made by hand ! Join us either indoors, our backyard or delivery to your door"

        }
      ]
    };
  },
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
