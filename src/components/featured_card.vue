<template>
  <div class="container">
    <div class="featured_menu">
      <div class="menu_items">
        <div class="menus">
          <div class="menu_img">
            <img :src="img" alt="Brand Logo">
          </div>
          <div class="menu_text">
            <p class="menu_desc">
              {{ menu_name }}
            </p>
            <p class="menu_item_desc">{{ menu_desc }}</p>
            <p class="featured_price"><span>{{ price }}</span></p>
            <Button class="see_menu">Order Now
            </Button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featured_card",

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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/Colors/colors.scss";
@import "./src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

.container {
  .featured_menu {
    margin-top: 70px;
    width: 100%;

    h2 {
      text-align: center;
      font-size: 30px;
      opacity: 0.7;
    }
    .menu_items {
      .menus {
        width: 100%;
        margin: 0 auto;
        cursor: pointer;
        background: lighten($bgColor, 10%);
        border-radius: 6px;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
        padding: 20px;
        transition: 0.5s ease-in-out;

        .menu_img {
          text-align: center;

          img {
            width: 50%;
            padding: 10px;

          }
        }

        .menu_text {
          text-align: center;
          .menu_desc {
            padding: 10px;
            text-align: center;
            cursor: pointer;
            font-weight: bolder;
            opacity: 0.8;
            font-size: 20px;
          }

          p {
            opacity: 0.8;
            font-weight: normal;
          }

          .featured_price {
            opacity: 0.8;
            color: $redFill;
            font-size: 16px;
            padding: 10px;

            span {
              font-weight: normal;
              color: $accentColor;
            }
          }

          .see_menu {
            @include orderBtn;
            width: 60%;
            border-radius: 2rem ;
          }
        }

        &:hover {
          transform: scale(1.2) !important;

        }
      }
    }
  }
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    .featured_menu {
      margin-top: 10px;
      width: 100%;

      .menu_items {
        width: 100%;

        .menus {
          width: 100%;
          margin: 0 auto;
          padding: 0;

          .menu_img {
            text-align: center;

            img {
              max-width: 80%;
            }

          }

          .menu_text {
            text-align: center;

            .menu_desc {
              font-size: 20px;
            }


            .see_menu {
              @include orderBtn;
              width: 60%;
              margin-bottom: 5vh;
              border-radius: 2rem !important;
            }
          }

          &:hover {
            transform: unset !important;

          }
        }
      }
    }
  }

}

@media only screen and (min-width: 600px) and (max-width: 786px) {
  .container {

    .featured_menu {

      margin-top: 10px;
      width: 100%;

      .menu_items {
        width: 100%;

        .menus {
          width: 100%;
          margin: 0 auto;
          padding: 0;

          .menu_img {
            text-align: center;

            img {
              max-width: 80%;
            }

          }

          .menu_text {
            text-align: center;

            .menu_desc {
              font-size: 20px;
            }


            .see_menu {
              @include orderBtn;
              width: 60%;
              margin-bottom: 5vh;
              border-radius: 2rem !important;
            }
          }

          &:hover {
            transform: unset !important;

          }
        }
      }
    }
  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    .featured_menu {
      margin-top: 10px;
      width: 100%;

      .menu_items {
        width: 100%;

        .menus {
          width: 100%;
          margin: 0 auto;
          padding: 0;

          .menu_img {
            text-align: center;

            img {
              max-width: 80%;
            }

          }

          .menu_text {
            text-align: center;

            .menu_desc {
              font-size: 20px;
            }


            .see_menu {
              @include orderBtn;
              width: 60%;
              margin-bottom: 5vh;
              border-radius: 2rem !important;
            }
          }

          &:hover {
            transform: unset !important;

          }
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