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
            <Button class="order_btn">Order Now
            </Button>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "order_menu",
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
  margin-top: 40px;
  .menu_items {
    .menus {
      max-width: 94%;
      margin: 80px auto;
      grid-gap: 0;
      cursor: pointer;
      border-radius: 6px;
      padding: 20px;
      position: relative;
      background: lighten($bgColor, 10%);
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
      transform: scale(1);
      z-index: 9;
      .menu_img {
        text-align: center;
        position: relative;

        img {
          max-width: 210px;
          padding: 10px;
          position: absolute;
          top: -120px;
          right: 50px;
          left: 50px;
        }

      }

      .menu_text {
        text-align: center;
        margin-top: 12vh;

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
            border-radius:40%;
            background: $bgColor;
            span {
              color: $redFill;
              font-weight: normal;
            }
          }


          .order_btn {
            @include orderBtn();
            margin: 0 !important;
            width: 50%;

          }
        }

      }

      &:hover {
        transform: scale(1.2) !important;
      }
    }
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width:  600px) {
  .container {

    .menu_items {

      .menus {
        width: 90%;
        margin: 10vh auto;
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
@media only screen and (min-width:  600px) and (max-width:786px) {
  .container {

    .menu_items {

      .menus {
        width: 90%;
        margin: 10vh auto;
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
          margin-top: 24vh;
          .menu_item_desc{
            margin: 10px;
            padding: 0;
          }

        }

        &:hover {
          transform: scale(1) !important;

        }
      }
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width:1024px){
  .container {

    .menu_items {

      .menus {
        width: 90%;
        margin: 0 auto;
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
          margin-top: 10vh;
        }

        &:hover {
          transform: scale(1) !important;

        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) and (max-width:1366px){
  .container {

    .menu_items {

      .menus {
        width: 90%;
        margin: 6vh auto;
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