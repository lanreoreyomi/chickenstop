<template>
  <div class="container">

    <div class="our_info">

      <div class="our_info_img">
        <img src="../assets/Images/DSC05157a.jpeg" alt="restaurant image">
      </div>

      <div class="more_info">
        <div class="our_info_text">
          <h1>Our Story</h1>

          <p>Chicken Stop is fortunate to have first opened its doors in 2021 amidst a global pandemic. We are extremely
            grateful for our real-life Superheroes, our frontline workers!</p>

          <p>Our passion for grilling and our chicken’s signature family citrus recipe dates back 3-4 generations
            originating from South America, known for its BBQ grill or “asado”. We grill our quality chicken, ribs, and
            burgers using those same techniques; grilling-slow to provide you with juicy and healthier meat. </p>
          <p>Chicken Stop was founded by two friends with a combined total of 40 years’ experience in the restaurant
            industry. The co-founder started his journey as a delivery boy and worked his way up to Grill-Master.
            Through years of hard work and dedication, he is now the owner operator with an array of experience that
            ensures both quality in taste and great service experience to our customers. </p>
          <p>Once again, a big thank you to our selfless frontline workers and customers.
            We look forward to serving you and offering you a memorable experience, either in our store or delivering to
            your door !
          </p>

        </div>


      </div>
    </div>

    <div class="gallery">
             <img src="../assets/Images/DSC05151.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04729.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04768.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04744.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04808.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04903.jpeg" alt="menu image">
            <img src="../assets/Images/DSC05049.jpeg" alt="menu image">
            <img src="../assets/Images/DSC05009.jpeg" alt="menu image">
            <img src="../assets/Images/_DSA8874.jpeg" alt="menu image">
            <img src="../assets/Images/_DSA9054.jpeg" alt="menu image">
            <img src="../assets/Images/DSC05136.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04765.jpeg" alt="menu image">
            <img src="../assets/Images/DSC05015.jpeg" alt="menu image">
            <img src="../assets/Images/DSC04900.jpeg" alt="menu image">
            <img src="../assets/Images/DSC05115.jpeg" alt="menu image">
            <img src="../assets/Images/DSC05142.jpeg" alt="menu image">

    </div>
  </div>
</template>

<script>



export default {
  name: "About",
  components: {

  },
  data() {
    return {
      width: 1000,
      height: 600,
      currentId: null,

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/Colors/colors.scss";
@import "./src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

.container {
  width: 90%;
  margin: 0 auto;

  .our_info {
    padding-top: 15vh;

    .our_info_text {

      h1 {
        color: $accentColor;
        font-size: 20px;
        width: 10%;
        text-align: start;
        border-radius: 6rem;
        margin-top: 20px;


      }

      h2 {
        width: 70%;
        font-size: 50px;
        opacity: 0.7;
        margin-top: 40px;
        margin-bottom: 40px;
        line-height: 90px;
      }
    }

    .our_info_img {

      img {
        width: 100%;


      }
    }

    .more_info {
      width: 80%;
      position: absolute;
      top: 90%;
      left: 10%;
      background-color: lighten($bgColor, 10%);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      border-radius: 2rem;
      padding: 40px;


      p {
        opacity: 0.8;
        text-align: start;
        line-height: 40px;
        font-weight: normal;
        margin-top: 20px;

      }
    }


    opacity: 0.8;
  }

  .gallery {
    margin-top: 40vh;
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


@media only screen and (max-width: 600px) {

  .container {

    width: 90%;
    margin: 0 auto;

    .our_info {
      padding-top: 15vh;

      .our_info_text {

        h1 {
          color: $accentColor;
          width: 50%;
        }

        h2 {
          width: 100%;
          font-size: 30px;
          line-height: 50px;
        }

        h4 {
          opacity: 0.8;
          text-align: center;
          line-height: 40px;
          font-weight: normal;


        }
      }

      .our_info_img {

        img {
          width: 100%;

        }
      }

      .more_info {
        position: unset;
        width: 100%;
        margin-top: 50px;
        padding: 15px;

        h3 {
          width: 100%;
          padding: 10px;
        }


      }

      opacity: 0.8;
    }

    .gallery {
      margin-top: 10vh;
      display: grid;
      grid-template-columns: 1fr 1fr;

      img {
        max-width: 100%;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

  }
}

@media only screen and (min-width: 600px) and (max-width: 786px) {
  .container {

    width: 90%;
    margin: 0 auto;

    .our_info {
      padding-top: 15vh;

      .our_info_text {

        h1 {
          color: $accentColor;
          width: 50%;
        }

        h2 {
          width: 100%;
          font-size: 30px;
          line-height: 50px;
        }

        h4 {
          opacity: 0.8;
          text-align: center;
          line-height: 40px;
          font-weight: normal;


        }
      }

      .our_info_img {

        img {
          width: 100%;

        }
      }

      .more_info {
        position: unset;
        width: 100%;
        margin-top: 50px;

        h3 {
          width: 100%;
          padding: 10px;
        }


      }

      .info_card {
        grid-template-columns: 1fr;
        padding: 5px;
        left: 0%;

        .cards {
          margin-bottom: 50px;

          width: 100%;
          padding: 20px;

          h2 {
            text-align: center;
            margin-top: 40px;
            margin-bottom: 40px;
          }

          p {
            line-height: 40px;
            opacity: 0.8;
            text-align: center;

          }

        }

      }

      opacity: 0.8;
    }

    .gallery {
      margin-top: 10vh;
      display: grid;
      grid-template-columns: 1fr 1fr;

      img {
        max-width: 100%;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {

    width: 90%;
    margin: 0 auto;

    .our_info {
      padding-top: 15vh;

      .our_info_text {

        h1 {
          color: $accentColor;
          width: 50%;
        }

        h2 {
          width: 100%;
          font-size: 30px;
          line-height: 50px;
        }

        h4 {
          opacity: 0.8;
          text-align: center;
          line-height: 40px;
          font-weight: normal;


        }
      }

      .our_info_img {

        img {
          width: 100%;

        }
      }

      .more_info {
        position: unset;
        width: 100%;
        margin-top: 50px;

        h3 {
          width: 100%;
          padding: 10px;
        }


      }

      opacity: 0.8;
    }

    .gallery {
      margin-top: 10vh;
      display: grid;
      grid-template-columns: 1fr 1fr;

      img {
        max-width: 100%;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1633px) {
  .container {

    width: 90%;
    margin: 0 auto;

    .our_info {
      padding-top: 15vh;

      .our_info_text {

        h1 {
          color: $accentColor;
          width: 50%;
        }

        h2 {
          width: 100%;

        }

        h4 {
          opacity: 0.8;
          text-align: center;
          line-height: 40px;
          font-weight: normal;


        }
      }

      .our_info_img {

        img {
          width: 100%;

        }
      }

      .more_info {
        //position: unset;
        padding: 20px;
        top: 30%;
        margin-top: 50px;

        h3 {
          width: 100%;
          padding: 10px;
        }
      }

      opacity: 0.8;
    }

    .gallery {
      margin-top: 15vh;
      display: grid;
      grid-template-columns: 1fr 1fr;

      img {
        max-width: 100%;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}


</style>