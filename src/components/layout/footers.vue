<template>
  <div class="container">
    <div class="map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-74.1197639579598!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1617203391862!5m2!1sen!2sca"
          height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="contact_us">
      <div class="contact_info">
        <div class="contact">
          <p>info@contact.com</p>
          <p class="phone">(213) 234- 7070</p>
          <div class="socialMedia">
            <img src="https://img.icons8.com/ios-filled/36/6E6E6E/facebook-new.png" alt="facebook"/>
            <img src="https://img.icons8.com/ios-filled/36/6E6E6E/instagram-new.png" alt="instagrem"/>
            <img src="https://img.icons8.com/ios-filled/36/6E6E6E/twitter.png" alt="twitter"/>
          </div>
        </div>


        <div class="contact_details">
          <div class="address">
            <h3>Address</h3>
            <p>No 2 Brian Street</p>
            <p>New York, New York</p>
            <p>1722342</p>
          </div>
          <div class="hours">
            <h3>Hours</h3>
            <p>Monday-Friday</p>
            <p>9am - 9pm</p>
            <p>Sunday</p>
            <p>10am - 8pm</p>
          </div>
          <div class="support">
            <h3>Customer Service</h3>
            <p class="phone">(213) 234- 7070</p>

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

    .contact_info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;
      width: 70%;
      margin: 5vh auto;
      position: relative;

      .socialMedia {
        position: absolute;
        bottom: 10px;

        img {
          margin-right: 30px;
          cursor: pointer;
          text-align: start;
        }

      }

      .contact {
        margin-top: 12vh;

        p {
          font-size: 30px;
          font-weight: bolder;
          line-height: 70px;
          opacity: 0.4;

        }
      }

      .contact_details {
        text-align: start;


        .address, .hours, .support {
          margin-top: 5vh;

          h3 {
            opacity: 0.4;

          }

          p {
            margin-top: 20px;
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

      .contact_info {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0px;
        width: 94%;
        margin: 5vh auto;
        position: relative;

        .socialMedia {

          top: 170px;

          img {
            width: 20px;
          }


        }

        .contact {
          margin-top: 1vh;

          p {
            font-size: 30px;
            font-weight: bolder;
            line-height: 70px;
            opacity: 0.4;

          }
        }

        .contact_details {
          text-align: start;
          margin-top: 8vh;

          .address, .hours, .support {
            margin-top: 5vh;

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
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) and (max-width:768px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width:1024px){
  .container {
    .contact_us {
      background: lighten($bgColor, 5%);
      padding: 10px;

      .contact_info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        width: 94%;
        margin: 0 auto;
        position: relative;

        .socialMedia {

         bottom:30px;

          img {
            width: 20px;
          }


        }

        .contact {
          margin-top: 6vh;

          p {
            font-size: 30px;
            font-weight: bolder;
            line-height: 70px;
            opacity: 0.4;

          }
        }

        .contact_details {
          text-align: start;
          margin-top: 2vh;

          .address, .hours, .support {
            margin-top: 5vh;

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
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>