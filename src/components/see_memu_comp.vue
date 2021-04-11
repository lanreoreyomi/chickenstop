<template>
  <div class="container">
    <div class="menu_items">
      <div class="menus" data-aos="zoom-in" data-aos-duration="800">
        <div class="menu_img">
          <img :src="img" alt="Brand Logo">
        </div>
        <div class="menu_text">
          <p class="menu_desc">
            {{ menu_name }}
          </p>
          <p class="menu_item_desc">{{ menu_desc }}</p>
          <div class="priceAndOrder">
            <p class="featured_price"><span>{{ price }}</span></p>

              <router-link to='Menu/' class="routerlink see_menu" exact>SEE MENU
              </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "see_menu",
  props: {
    img: {
      required: true,
    },
    menu_name: {
      required: true,
    },
    menu_desc: {
      required: true,
    },

    price: {
      required: true,
    },


  }
}
</script>

<style lang="scss" scoped>
@import "../assets/Colors/colors";
@import "../assets/Fonts/fonts";
@import "../assets/Buttons/Buttons";

.container {
  .menu_items {
    .menus {
      max-width: 100%;
      margin: 30px auto;
      grid-gap: 0;
      cursor: pointer;
      border-radius: 6px;
      padding: 20px;
      position: relative;
      //background: lighten($bgColor, 5%);
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
      transform: scale(1);
      z-index: 9;

      .menu_img {
        text-align: center;
        position: relative;

        img {
          width: 210px;
          padding: 10px;
          position: absolute;
          top: -120px;
          right: 50px;
          left: 50px;
        }

      }

      .menu_text {
        text-align: center;
        margin-top: 15vh;
        .menu_desc {
          padding: 10px;
          text-align: center;
          cursor: pointer;
          font-weight: bolder;
          opacity: 0.8;
          font-size: 20px;
          margin-top: 20px;
        }

        .menu_item_desc {
          opacity: 0.5;
          font-weight: normal;
          padding: 10px;
          margin-top: 20px;
        }

        .priceAndOrder {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;

          .featured_price {
            opacity: 0.8;
            color: $redFill !important;
            font-size: 16px;
            padding: 10px;

            span {
              color: $redFill;
              font-weight: normal;
            }
          }

          .see_menu {
            @include seeMenu();
            margin: 0 !important;
            width: 50%;
              color: $textColor;
              text-decoration: none;

            &:hover {
              .routerlink {
                color: $bgColor
              }

            }
          }

        }

      }

      &:hover {
        transform: scale(1.2) !important;
      }
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    .menu_items {

      .menus {
        width: 90%;
        margin: 4vh auto;
        padding: 20px;

        .menu_img {
          text-align: center;

          img {
            right: 0;
            left: 0;
            margin: 0 auto;
            text-align: center;
          }

        }

        .menu_text {
          text-align: center;
          margin-top: 15vh;
        }

        &:hover {
          transform: scale(1) !important;

        }
      }
    }
  }

}

@media only screen and (min-width: 600px) and (max-width:786px) {
  .container {
    .menu_items {

      .menus {
        width: 90%;
        margin: 15vh auto;
        padding: 20px;

        .menu_img {
          text-align: center;

          img {
            //right: 25px;
            //left: 25px;
            margin: 0 auto;
            text-align: center;
          }

        }

        .menu_text {
          text-align: center;
          margin-top: 23vh;
        }

        &:hover {
          transform: scale(1) !important;

        }
      }
    }
  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    margin-top: 0 !important;
    .menu_items {
      .menus {
        width: 100% !important;
        margin: 5vh auto;
        padding: 20px;

        .menu_img {
          text-align: center;

          img {
            //right: 25px;
            //left: 25px;
            margin: 0 auto;
            text-align: center;
          }

        }

        .menu_text {
          text-align: center;
          margin-top: 10vh;
        }

        &:hover {
          transform: scale(1) !important;

        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1366px) {
  .container {
    margin-top: 0 !important;

    .menu_items {

      .menus {
        width: 100% !important;
        margin: 4vh auto;
        padding: 20px;

        .menu_img {
          text-align: center;

          img {
            //right: 25px;
            //left: 25px;
            margin: 0 auto;
            text-align: center;
          }

        }

        .menu_text {
          text-align: center;
          margin-top: 10vh;
        }

        &:hover {
          transform: scale(1) !important;

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