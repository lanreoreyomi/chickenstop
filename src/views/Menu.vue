<template>
  <div class="container" id="menu_home">

    <div class="menu" id="menu">
      <h3>Our Menu</h3>

      <div class="featured">

        <!--        <div class="menu_list" data-aos="zoom-in" data-aos-duration="3000">-->
        <!--          <feature-card v-for="(menus, i) in our_menu" :key="i" :menu_name="menus.menu_name" :img="menus.img"/>-->
        <!--        </div>-->

      </div>
      <div class="menu_img">
        <img src="../assets/Images/TAKEOUT_MENU_1.jpg" alt="">
        <div class="order">
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>
        </div>
      </div>
           <div class="menu_img">
        <img src="../assets/Images/TAKEOUT_MENU_2.jpg" alt="">
        <div class="order">
          <a class="btn_filled" href="https://direct.chownow.com/order/33509/locations/50235">Order Now</a>
        </div>
      </div>


    </div>

  </div>

</template>

<script>
// import FeatureCard from '@/components/FeaturedMenu'


export default {
  name: "Menu",
  components: {
    // OrderMenu,
    // FeatureCard

  },
  data() {
    return {
      our_menu: [
        {
          img: require('../assets/Images/halfchicken.jpeg'),
          menu_name: '1/2 Chicken',
          // price: "$ 12.99",
          // menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
        },
        {
          img: require('../assets/Images/ChickenandRibsCombo2.jpeg'),
          menu_name: 'Chicken Ribs and Combo',
          // price: "$ 1.99",
          // menu_desc: 'Lorem ipsum dolor sit amet, consectetur '
        },
        {
          img: require('../assets/Images/SSS.jpeg'),
          menu_name: 'Crispy Chicken Sandwich',
          // price: "$ 8.99",
          // menu_desc: 'Lorem ipsum dolor sit amet, consectetur '
        },
        {
          img: require('../assets/Images/GoAvocadoSalad2.jpeg'),
          menu_name: 'Go Avocado Salad',
          // price: "$ 73.99",
          // menu_desc: 'Lorem ipsum dolor sit amet, consectetur '
        }
      ],
    }
  },
  methods: {
    scrollToPosition() {
      var section = this.$router.currentRoute.hash.replace("#", "");
      if (section)
        this.$nextTick(() => window.document.getElementById(section).scrollIntoView());
    },


  },

  mounted() {
    this.scrollToPosition();

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
  width: 100%;
  margin: 0 auto;

  .menu_img {
    text-align: center;
    margin-top: 1vh;

    img {
      max-width: 100%;
    }

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
     margin: 50px;

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

  }

  .menu {
    width: 90%;
    margin: 0 auto;

    h3 {
      padding-top: 50px;
      text-align: start;
      font-size: 50px;
      margin-top: 10vh;
      opacity: 0.8;
      background: black;
      padding-left: 20px;
    }

    .menu_list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 40px;
      margin-bottom: 5vh;
    }
  }


}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {

    .menu {
      h3 {
        padding-top: 7vh !important;
        padding-bottom: 8vh !important;
        font-size: 30px !important;
        text-align: center
      }
    }

    .menu_signature {
      width: 100% !important;

      padding-top: 10vh;

      h2 {
        padding: 10px;
        font-size: 30px;

      }


      .signature_info {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0;
      }

      .signature_img {
        padding: 0;
        margin: 0 auto;
        text-align: center;

        img {
          margin: 0 auto;
          width: 90%;
          border-radius: 2rem;
        }

      }

      .signature_text {
        position: relative;

        h3 {
          padding-top: 5px;
          font-size: 30px;
          margin-top: 2vh;
        }

        p {
          padding-top: 5px;

        }

        .btn {
          padding: 5px;
          margin: 0 auto;
          text-align: center;

          .btnSec {
            width: 80%;
            margin: 10px auto;
          }

        }


      }
    }

    .menu_img {
      .order{
        .orderbtn{
          width: 100%;
        }
    }

    }

    .menu {
      h3 {
        padding-top: 0px;

        font-size: 30px;
        margin-top: 5vh;

      }

      .menu_list {

        grid-template-columns: 1fr;

      }
    }

    .gallery {
      margin-top: 4vh;
      grid-template-columns: 1fr 1fr;

    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 786px) {
  .container {


    .pdf_menu {
      a {

        width: 100%;

        &:hover {
          background-color: $accentColor;
          color: $bgColor;
        }
      }

    }

    .menu {
      h3 {
        padding-top: 0px;
        font-size: 30px;
        margin-top: 5vh;
        margin-bottom: 15vh;

      }

      .menu_list {
        position: relative;
        grid-template-columns: 1fr 1fr;

        .menus {
          margin-bottom: 15vh;
        }
      }
    }

    .gallery {
      margin-top: 4vh;
      grid-template-columns: 1fr 1fr;

    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    .menu_signature {
      width: 100% !important;
      margin-top: 5vh;
      margin-bottom: 5vh;

      h2 {
        padding: 10px;
        font-size: 30px;
      }


    }

    .pdf_menu {


      a {

        width: 100%;

        &:hover {
          background-color: $accentColor;
          color: $bgColor;
        }
      }

    }

    .menu {

      h3 {
        padding-top: 10vh;
        padding-bottom: 0;
        margin-bottom: 4vh;
        font-size: 40px;
      }

      .menu_list {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

      }
    }

    .gallery {
      margin-top: 4vh;
      grid-template-columns: 1fr 1fr;

    }
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1366px) {
  .container {
    margin-top: 0;
    padding-top: 0;

    .menu {
      margin-top: 0;
      padding-top: 0;

      h3 {
        margin-top: 0;
        padding-top: 200px;
      }

      .menu_list {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

      }
    }

    .gallery {
      margin-top: 4vh;
      grid-template-columns: 1fr 1fr;

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