<template>
  <div class="container" id="home">
    <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">
      <div class="landing_info">
        <div class="landing_text">
          <h1>The <span>Flame Grilled </span> <span class="way">Way</span></h1>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>
          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline" v-scroll-to="'#menu_home'">SEE MENU
          </router-link>
        </div>
        <div class="landing_img">
          <img src="../assets/Images/Flame-Grilled-Way.jpeg" alt="slider Image">
        </div>
      </div>
      <div class="landing_info">
        <div class="landing_text">
          <h1>Citrus <span>  Marinated Chicken </span><span class="way">and Grilled Slow</span></h1>
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>

          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline">SEE MENU
           </router-link>

        </div>
        <div class="landing_img">
          <img src="../assets/Images/citrus-marinated-chicken.jpeg" alt="slider Image">
        </div>
      </div>
      <div class="landing_info">
        <div class="landing_text">
          <h1>Our Sides are <span>  Made Fresh </span><span class="way"> & Hand-Made Daily</span></h1>

          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>

          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline">SEE MENU
           </router-link>

        </div>
        <div class="landing_img">
          <img src="../assets/Images/Our-sides-are-made-fresh.jpeg" alt="slider Image">
        </div>
      </div>
      <div class="landing_info">
        <div class="landing_text">
          <h1>Our Handmade <span>  Crispy Chicken</span><span class="way"> Sandwich</span></h1>

          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>

          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline">SEE MENU
           </router-link>

        </div>
        <div class="landing_img">
          <img src="../assets/Images/Crispy-Chicken-Sandwhich.jpg" alt="slider Image">
        </div>
      </div>


      <div class="landing_info">
        <div class="landing_text">
          <h1> Flame-Grilled <span>  Ribs lightly glazed</span><span class="way">in housemade BBQ Sauce!</span></h1>

          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>

          <router-link :to="{name: 'Menu'}" class="routerlink btn_outline">SEE MENU
            <img src="https://img.icons8.com/material/24/000000/long-arrow-right--v2.png" alt="arrow-left"/>
          </router-link>

        </div>
        <div class="landing_img">
          <img src="../assets/Images/Flame-Grilled-Ribs-lightly-glazed-in-housemade-BBQ-Sauce.jpg" alt="slider Image">
        </div>
      </div>
    </VueSlickCarousel>


  </div>


</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: "LandingSection",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 3000,
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/Colors/colors.scss";
@import "./src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  color: $textColor;

  button.slick-prev:before, button.slick-next:before {
    background-color: red !important;
    color: white !important;
  }

  .landing_info {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    outline: none !important;
    margin-top: 10vh;

    .landing_text {
      padding: 0;
      text-align: start;
      margin: 20vh auto 0 0;
      width: 100%;
      outline: none !important;

      h1 {
        font-size: 50px;
        font-weight: normal;

        span {
          font-weight: bolder;
          color: $accentColor;
          font-style: italic;
        }

        .way {
          color: $textColor;
          font-weight: normal;
          font-style: normal;
          margin-left: 10px;
        }
      }

      p {
        line-height: 35px;
        margin-top: 20px;
      }

      //.btn_filled {
      //  @include homeButton;
      //  margin-top: 5vh;
      //  margin-right: 20px;
      //}
      .btn_filled {
        opacity: 1;
        text-align: center;
        @include homeButton;
        border-radius: 6px;

        padding: 12px 26px 12px 20px;
        background: $redFill;
        color: $textColor;
        font-weight: normal;
        display: inline-block;
        width: 160px;
        text-decoration: none;
        margin-right: 20px;

        &:before {
          color: $bgColor !important;
          background: $accentColor;
        }

        &:hover {
          color: $bgColor !important;
          opacity: 1;
          border-bottom: none;
        }


        &:hover {

          opacity: 1;
          border-bottom: none;
        }

      }

      .routerlink {
        @include seeMenu;
        color: $textColor;

        text-decoration: none;
        display: inline-block;
        width: 160px;
        text-align: center;
        font-size: 16px;

        img {
          background: none;
          position: absolute;
          top: 10px;
          right: 5px;
          display: none;
        }

        //&:hover {
        //  border: none;
        //
        //  img {
        //    display: block;
        //  }
        //}

      }

    }

    .landing_img {
      grid-column-start: 2;
      grid-column-end: 4;

      img {
        max-width: 100%;
        border-radius: 6px;

      }
    }
  }


}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";

      .landing_text {
        text-align: center;
        margin: 5vh auto;

        grid-area: b;

        h1 {
          font-size: 30px;
        }

        .btn_filled {
          width: 80% !important;
          margin: 2vh auto;
        }

        .routerlink {

          width: 80% !important;
          display: inline-block;
          text-align: center;

          &:hover {
            background: unset;
            color: unset;
          }

        }

      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }


  }

}

@media only screen and (min-width: 600px) and (max-width: 786px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";

      .landing_text {
        text-align: center;
        margin: 5vh auto;
        grid-area: b;

        h1 {
          font-size: 30px;
        }

        .btn_filled {
          display: inline-block;
          width: 80% !important;
          margin: 2vh auto;
        }

        .routerlink {

          width: 80% !important;
          display: inline-block;
          text-align: center;

        }
      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }


  }

}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";

      .landing_text {
        text-align: center;
        margin: 5vh auto;
        grid-area: b;

        h1 {
          font-size: 30px;
        }

        .btn_filled {
          width: 40% !important;
          margin: 2vh 20px 2vh auto;
        }

        .routerlink {

          width: 40% !important;
          display: inline-block;
          text-align: center;

        }
      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }


  }
}

@media only screen and (min-width: 1024px) and (max-width: 1366px) {
  .container {

    .landing_info {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-areas:
    "a a a"
    "b b b";

      .landing_text {
        text-align: center;
        margin: 5vh auto;
        grid-area: b;

        h1 {
          font-size: 30px;
        }


        .btn_filled {
          width: 40% !important;
          margin: 2vh 20px 2vh auto;
        }

        .routerlink {

          width: 40% !important;
          display: inline-block;
          text-align: center;

        }
      }

      .landing_img {
        grid-column-start: unset;
        grid-column-end: unset;

        img {
          width: 100% !important;
          border-radius: 6px;
        }
      }
    }


  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>