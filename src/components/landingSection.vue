<template>
  <div class="container">
    <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">
      <div class="landing_info" data-aos="zoom-in" data-aos-duration="1200">
        <div class="landing_text">
          <h1>The <br><span>Flame Grilled </span> <br><span class="way">Way</span></h1>
          <Button type="button" class="btn_filled">Order Now</Button>
          <Button class="btn_outline">
            <router-link :to="{name: 'Menu'}" class="routerlink">SEE MENU
              <img src="https://img.icons8.com/material/24/FFDB16/long-arrow-right--v2.png" alt="arrow-left"/>
            </router-link>
          </Button>
        </div>


        <div class="landing_img">
          <img src="../assets/Images/slide1.png" alt="Brand Logo">
        </div>
      </div>
      <div class="landing_info">
        <div class="landing_text">
          <h1>Citrus <span>  Marinated Chicken </span><span class="way">and Grilled Slow</span></h1>
          <Button type="button" class="btn_filled">Order Now</Button>
          <Button class="btn_outline">
            <router-link :to="{name: 'Menu'}" class="routerlink">SEE MENU
              <img src="https://img.icons8.com/material/24/FFDB16/long-arrow-right--v2.png" alt="arrow-left"/>
            </router-link>
          </Button>
        </div>
        <div class="landing_img">
          <img src="../assets/Images/slide2.png" alt="Brand Logo">
        </div>
      </div>
      <div class="landing_info">
        <div class="landing_text">
          <h1>Our Sides are <span>  Made Fresh </span><span class="way"> & Hand-Made Daily</span></h1>

          <Button type="button" class="btn_filled">Order Now</Button>
          <Button class="btn_outline">
            <router-link :to="{name: 'Menu'}" class="routerlink">SEE MENU
              <img src="https://img.icons8.com/material/24/FFDB16/long-arrow-right--v2.png" alt="arrow-left"/>
            </router-link>
          </Button>
        </div>
        <div class="landing_img">
          <img src="../assets/Images/slide3.png" alt="Brand Logo">
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
  name: "landingSection",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
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

  .landing_info {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    outline: none;
    margin-top: 10vh;

    .landing_text {
      padding: 0;
      text-align: start;
      margin: 15vh auto 0 0;
      width: 100%;

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

      Button {
        text-align: center;
        @include homeButton;
        margin-top: 5vh;
        margin-right: 20px;
        border-radius: 6px;
        margin-left: 2px;
        width: 30%;

      }

      .btn_outline {
        @include seeMenu;
        width: 30%;
        color: $textColor;

        .routerlink {
          color: $textColor;
          width: 30%;
        }

        img {
          background: none;
          position: absolute;
          top: 10px;
          right: 5px;
          display: none;
        }

        &:hover {
          border: none;

          img {
            display: block;
          }
        }

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

        Button {
          margin: 2vh auto;
          width: 90%;
        }

        .btn_outline {
          width: 90%;
          margin-top: 1vh;

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

        Button {
          margin: 2vh auto;
          width: 90%;
        }

        .btn_outline {
          width: 90%;
          margin-top: 1vh;

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

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .container {
    display: block;
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

        Button {
          margin: 2vh auto;
          width: 90%;
        }

        .btn_outline {
          width: 90%;
          margin-top: 1vh;

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

        Button {
          margin: 2vh auto;
          width: 90%;
        }

        .btn_outline {
          width: 90%;
          margin-top: 1vh;

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