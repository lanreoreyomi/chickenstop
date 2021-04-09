<template>
  <div class="container" id="menu_home">
    <div class="menu_signature">
      <div class="signature_info" data-aos="fade-right">
        <div class="signature_img">
          <img src="../assets/Images/menu_food.jpeg" alt="marinated_chicken">
        </div>
        <div class="signature_text" data-aos="fade-left">
          <h3>
            Lorem ipsum dolor sit ame.

          </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <div class="btn">

            <Button class="btnSec">See Full Menu</Button>
          </div>

        </div>
      </div>

    </div>
    <hr>
    <div class="menu">
      <h3>Our Menu</h3>
      <div class="menu_list">
        <Menus v-for="(menus, i) in  our_menu" :key="i" :menu_name="menus.menu_name" :img="menus.img"
               :price="menus.price" :menu_desc="menus.menu_desc" :action="menus.btn_action" class="menus"/>
      </div>
    </div>
    <div class="gallery">
      <img src="../assets/Images/pic1.jpeg" alt="">
      <img src="../assets/Images/pic2.jpeg" alt="">
      <img src="../assets/Images/pic3.jpeg" alt="">
      <img src="../assets/Images/pic4.jpeg" alt="">
      <img src="../assets/Images/pic2.jpeg" alt="">
      <img src="../assets/Images/pic4.jpeg" alt="">
      <img src="../assets/Images/pic1.jpeg" alt="">
      <img src="../assets/Images/pic5.jpeg" alt="">
      <img src="../assets/Images/pic1.jpeg" alt="">
      <img src="../assets/Images/pic2.jpeg" alt="">
      <img src="../assets/Images/pic5.jpeg" alt="">
      <img src="../assets/Images/pic1.jpeg" alt="">
    </div>
  </div>

</template>

<script>
import Menus from '@/components/order_menu_comp'


export default {
  name: "Menu",
  components: {
    Menus
  },
  data() {
    return {
      our_menu: [
        {
          img: require('../assets/Images/f1.png'),
          menu_name: 'Chicken Wrap',
          price: "$ 12.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f2.png'),
          menu_name: 'Chicken Soup',
          price: "$ 1.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f3.png'),
          menu_name: 'Breaded Chicken',
          price: "$ 8.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f7.png'),
          menu_name: 'Roasted Chicken',
          price: "$ 73.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f9.png'),
          menu_name: 'Chicken Wrap',
          price: "$ 12.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f10.png'),
          menu_name: 'Chicken Soup',
          price: "$ 1.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f5.png'),
          menu_name: 'Breaded Chicken',
          price: "$ 8.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f6.png'),
          menu_name: 'Roasted Chicken',
          price: "$ 73.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f3.png'),
          menu_name: 'Breaded Chicken',
          price: "$ 8.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f1.png'),
          menu_name: 'Chicken Wrap',
          price: "$ 12.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f2.png'),
          menu_name: 'Chicken Soup',
          price: "$ 1.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f3.png'),
          menu_name: 'Breaded Chicken',
          price: "$ 8.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f1.png'),
          menu_name: 'Chicken Wrap',
          price: "$ 12.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f2.png'),
          menu_name: 'Chicken Soup',
          price: "$ 1.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f3.png'),
          menu_name: 'Breaded Chicken',
          price: "$ 8.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
        {
          img: require('../assets/Images/f7.png'),
          menu_name: 'Roasted Chicken',
          price: "$ 73.99",
          menu_desc: 'Lorem ipsum dolor sit amet, consectetur ',
          btn_action: "Order Now",
        },
      ]
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
  width: 93%;
  margin: 0 auto;

  hr {
    width: 50%;
    margin: 5vh auto;

  }

  .menu_signature {
    margin: 0 auto;

    h2 {
      padding: 40px;
      font-size: 40px;

    }

    width: 90%;
    padding-top: 14vh;

    .signature_info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }

    .signature_img {
      padding: 30px;

      img {
        width: 100%;
        border-radius: 2rem;
      }

    }

    .signature_text {
      position: relative;

      h3 {
        padding-top: 25px;
        text-align: start;
        font-size: 50px;
        margin-top: 10vh;
        opacity: 0.8;
        background: black;

      }

      p {
        padding-top: 25px;
        opacity: 0.8;
      }

      .btn {
        width: 60%;
        padding-top: 55px;

        .btnSec {
          @include orderBtn;
          border: none;
          background: lighten($bgColor, 10%);
          padding: 20px;
          width: 40%;
          margin-top: 55px;
          color: $accentColor;

          &:hover {
            background: lighten($bgColor, 10%);
          }
        }

      }


    }
  }

  .menu {
    h3 {
      padding-top: 25px;
      text-align: start;
      font-size: 50px;
      margin-top: 10vh;
      opacity: 0.8;
      background: black;
    }

    .menu_list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 0;
    }
  }

  .gallery {
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    img {
      max-width: 100%;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    .menu_signature {
      width: 100% !important;
      padding: 20px;
      margin-top: 5vh;

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
          width: 100%;
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
    .menu_signature {
      width: 100% !important;
      padding: 20px;
      margin-top: 5vh;

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
          width: 100%;
          border-radius: 2rem;
        }

      }

      .signature_text {
        position: relative;

        h3 {
          padding-top: 5px;
          font-size: 30px;
          margin-top: 2vh;
          text-align: center !important;
        }

        p {
          padding-top: 5px;
          text-align: center !important;
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
          width: 100%;
          border-radius: 2rem;
        }

      }

      .signature_text {
        position: relative;
        text-align: center;

        h3 {
          padding: 20px;
          font-size: 40px;
          margin-top: 2vh;
          text-align: center;
        }

        p {
          padding: 20px;
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

    .menu {

      .menu_list {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
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
    .menu_signature {
      width: 100% !important;
      margin-top: 5vh;
      margin-bottom: 5vh;

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
          width: 100%;
          border-radius: 2rem;
        }

      }

      .signature_text {
        position: relative;
        text-align: center;

        h3 {
          padding: 20px;
          font-size: 40px;
          margin-top: 2vh;
          text-align: center;
        }

        p {
          padding: 20px;
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

    .menu {

      .menu_list {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;

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