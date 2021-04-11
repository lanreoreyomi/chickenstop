<template>
  <div class="container">
    <div class="signature">
      <h2>Signature Menu</h2>
      <div class="signature_info" data-aos="zoom-in-up" data-aos-offset="300"
           data-aos-easing="ease-in-sine">
        <div class="signature_img">
          <img src="../assets/Images/marinated.png" alt="marinated_chicken">
        </div>
        <div class="signature_text">
          <h3>
            Signature citrus marinade chicken.
          </h3>
          <div class="signature_description">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="btn">
            <Button class="btnPrim">Order Now</Button>

            <router-link to='Menu/#menuSection' class="routerlink btnSec" exact>SEE MENU
            </router-link>

          </div>

        </div>
      </div>
    </div>
    <div class="signature">
      <div class="signature_info2" data-aos="zoom-in-up" data-aos-offset="300"
           data-aos-easing="ease-in-sine">
        <div class="signature_text">
          <h3>
            Space for Another Signature Meal
          </h3>
          <div class="signature_description">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div class="btn">
            <Button class="btnPrim">Order Now</Button>

            <router-link to='Menu' class="routerlink btnSec" exact>SEE MENU
            </router-link>

          </div>

        </div>
        <div class="signature_img">
          <img src="../assets/Images/marinated2.jpeg" alt="marinated_chicken">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "signature",
  methods: {
    scrollToPosition() {
      var section = this.$router.currentRoute.hash.replace("#", "");
      if (section)
        this.$nextTick(() => window.document.getElementById(section).scrollIntoView());
    },
  },

  mounted() {
    // this.scrollToPosition();
  }
}
</script>


<style lang="scss" scoped>
@import "./src/assets/Colors/colors.scss";
@import "./src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

.container {

  .signature {
    width: 100%;
    margin: 18vh auto;


    h2 {
      padding: 40px;
      font-size: 50px;
      opacity: 0.8;

    }

    .signature_info, .signature_info2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }

    .signature_img {

      img {
        width: 100%;
        border-radius: 2rem;
      }

    }

    .signature_text {
      position: relative;
      margin-top: 5vh;

      h3 {
        padding-top: 5px;
        text-align: start;
        font-size: 50px;
        margin-top: 5vh;
        opacity: 0.8;
        background: black;

      }

      .signature_description {
        padding-top: 25px;
        opacity: 0.8;

        p {
          padding-top: 15px;
          opacity: 0.8;
        }
      }


      .btn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        width: 70%;
        text-align: start;
        margin-top: 5vh;

        .routerlink {
          color: $textColor;
          text-decoration: none;
          text-align: center;

          &:hover {
            color: $bgColor;
          }
        }

        .btnPrim {
          @include orderBtn;
          border-radius: 2rem !important;
        }

        .btnSec {

          @include seeMenu;

          &:hover {
            .routerlink {
              color: $bgColor;

            }
          }
        }


      }
    }
  }

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    .signature {

      width: 90%;
      margin: 5vh auto;

      h2 {
        padding: 10px;
        font-size: 30px;

      }

      .signature_info, .signature_info2 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
            "a a a"
            "b b b";
        grid-gap: 0;

      }

      .signature_img {
        grid-area: a;

        img {
          width: 100%;
          border-radius: 2rem;
        }

      }

      .signature_text {
        grid-area: b;
        position: relative;
        margin-top: 2vh;

        h3 {

          font-size: 30px;
          text-align: center;
        }

        .signature_description {
          p {
            padding-top: 5px;
            opacity: 0.8;
            text-align: center;
          }
        }


        .btn {
          width: 100%;
          margin: 5vh auto;

          .btnPrim {
            @include orderBtn;
          }

          .btnSec {
            @include seeMenu;

          }

        }
      }
    }

  }
}

@media only screen and (min-width: 600px) and (max-width: 786px) {
  .container {

    .signature {

      width: 90%;
      margin: 5vh auto;

      h2 {
        padding: 10px;
        font-size: 30px;

      }

      .signature_info, .signature_info2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        //grid-template-areas:
        //    "a a a"
        //    "b b b";
        grid-gap: 0;
        margin-top: 10vh;
      }

      .signature_img {
        //grid-area: a;

        img {
          width: 80%;
          border-radius: 2rem;
        }

      }

      .signature_text {
        //grid-area: b;
        position: relative;
        margin-top: 0vh;

        h3 {
          padding: 0;
          margin: 0;
          font-size: 30px;

        }

        .signature_description {
          p {
            padding-top: 5px;
            opacity: 0.8;
          }
        }


        .btn {
          width: 100%;
          margin: 5vh auto;

          .btnPrim {
            @include orderBtn;
          }

          .btnSec {
            @include seeMenu;

          }

        }
      }
    }

  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;

    .signature {

      width: 90%;
      margin: 5vh auto;

      h2 {
        padding: 10px;
        font-size: 30px;

      }

      .signature_info, .signature_info2 {
        display: grid;
        grid-template-columns: 1fr 1fr;

        grid-gap: 0;
        margin-top: 10vh;

      }

      .signature_img {

        text-align: center;

        img {
          width: 90%;
          border-radius: 2rem;
          height: 100%;
        }

      }

      .signature_text {

        position: relative;
        margin-top: 0;

        h3 {

          font-size: 30px;

        }

        .signature_description {
          p {
            padding-top: 5px;
            opacity: 0.8;
          }
        }


        .btn {
          width: 100%;
          margin: 5vh auto;

          .btnPrim {
            @include orderBtn;
          }

          .btnSec {
            @include seeMenu;

          }

        }
      }
    }

  }

}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1024px) and (max-width: 1366px) {

  .container {
    margin: 0 auto !important;
    padding: 0 !important;
    width: 100%;

    .signature {

      width: 100%;
      margin: 5vh auto 15vh;

      h2 {
        padding: 10px;
        font-size: 30px;

      }

      .signature_info, .signature_info2 {
        display: grid;
        grid-template-columns: 1fr 1fr;

        grid-gap: 40px;
        margin-top: 10vh;

      }

      .signature_img {

        text-align: center;

        img {
          width: 100%;
          border-radius: 2rem;
          height: 100%;
        }

      }

      .signature_text {
        text-align: center;
        position: relative;
        margin-top: 0;

        h3 {
          text-align: center;
          font-size: 30px;

        }

        .signature_description {
          p {
            padding-top: 5px;
            opacity: 0.8;
          }
        }


        .btn {
          width: 100%;
          margin: 5vh auto;

          .btnPrim {
            @include orderBtn;
          }

          .btnSec {
            @include seeMenu;

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