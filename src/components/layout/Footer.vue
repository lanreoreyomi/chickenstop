<template>
  <div class="container">
    <div class="map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d756.3222961589028!2d-73.9783091!3d40.6896283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25be8cf7e861d%3A0x4bc6faa1ce76030f!2sChicken%20Stop!5e0!3m2!1sen!2sca!4v1619124527411!5m2!1sen!2sca"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="contact_us">
      <div class="contact_info">
        <div class="contact_details">
          <div class="contact">
            <h3 class="name">Chicken Stop</h3>
            <p class="phone">
              <a href="tel:123-456-7890">917-909-1599</a></p>
            <div class="socialMedia">

              <p>
                <img src="https://img.icons8.com/ios-filled/18/FFDB16/instagram-new.png" alt="instagrem"/>
                <a
                    href="https://www.instagram.com/chickenstopnyc/" target="_blank">
                  Follow Us </a>
              </p>
            </div>
          </div>
          <div class="address">
            <h3>Address</h3>
            <p>110 Dekalb Avenue</p>
            <p> Brooklyn NY</p>
            <p> 11201</p>
          </div>
          <div class="hours">
            <h3>Hours</h3>
            <p>MON-SUNDAY</p>
            <p>11am - 10pm</p>
          </div>
          <div class="support">
            <h3>Contact Us</h3>
            <p class="phone">
              <a href="tel:123-456-7890">917-909-1599</a></p>
            <p>
              <a href="mailto:info@chickenstopnyc.com">info@chickenstopnyc.com</a>
            </p>


          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "footers"
}
</script>

<style lang="scss" scoped>
@import "./src/assets/Colors/colors.scss";
@import "./src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

.container {

  .contact_us {
    background: lighten($bgColor, 5%);
    padding: 20px;
    text-align: start;

    .contact_details {
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      padding: 40px;
      margin: 0 auto;
      width: 70%;

      .contact {
        color: $accentColor;

        .socialMedia {

          p {
            text-align: center;
            position: relative;
            color: $accentColor;

            img {

               cursor: pointer;

            }

            a {
              text-align: center;
              color: $accentColor;


              &:hover {
                opacity: 1 !important;
              }
            }

          }

        }

        .name {
          opacity: 1;
          text-align: center;

        }

        p {
          color: $accentColor;
          text-align: center;

          line-height: 40px;
          opacity: 0.8;

          a {
            display: inline-block;
            text-align: center;
            color: $accentColor;
            text-decoration: none;
            position: relative;

            img {


            }

          }
        }
      }

      .address, .hours, .support {
        text-align: center;

        h3 {
          color: $accentColor;
          text-decoration: underline;

        }

        p {
          color: $accentColor;
          margin-top: 20px;
          opacity: 0.8;

          a {
            color: $accentColor;
            text-decoration: none;
          }
        }
      }
    }

  }

  .map {
    iframe {
      width: 100%;
    }

  }

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    .contact_us {
      background: lighten($bgColor, 5%);
      padding: 10px;


      .contact {
        margin-top: 5vh;

        p {

          font-weight: bolder;
          line-height: 60px;
          opacity: 0.4;

        }
      }

      .contact_details {
        text-align: center;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0px;
        padding: 10px;
        margin: 5vh auto;
        position: relative;

        .address, .hours, .support {
          margin-top: 5vh;


        }
      }


    }

    .map {
      iframe {
        width: 100%;
      }

    }

  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    .contact_us {
      background: lighten($bgColor, 5%);
      padding: 10px;


      .contact {
        margin-top: 2vh;

        p {

          font-weight: bolder;
          line-height: 70px;
          opacity: 0.4;

        }
      }

      .contact_details {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        width: 94%;
        margin: 2vh auto;
        position: relative;

        .address, .hours, .support {
          margin-top: 2vh;

        }
      }


    }

    .map {
      iframe {
        width: 100%;
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