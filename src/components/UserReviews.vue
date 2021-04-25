<template>
  <div class="container">
    <h2>What our Customers are saying</h2>
    <div class="reviews" data-aos="zoom-in-up">
      <div class="review-arrow">
        <img src="https://img.icons8.com/material/36/FFDB16/long-arrow-left--v2.png" alt="arrow-left"
             @click="previousReviews"/>
      </div>

      <div class="review-text">
        <p v-html="currentReview">
          {{ currentReview }}
        </p>
      </div>
      <div class="review-arrow">

        <img src="https://img.icons8.com/material/36/FFDB16/long-arrow-right--v2.png" alt="arrow-left"
             @click="nextReviews"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserReviews",
  data() {
    return {
      currentReview: "Excellent service!  Friendly people and delicious food, literally the best chicken." +
          "<br>" +
          " <span style='color: #FFDB16; font-weight: bold; font-size:20px; '>-Debora</span>",
      indexToSearch: 0,
      isHidden: true,
      reviews: [
        {
          review: "Great food! Best chicken in town no doubt!\n" +
              "Staff absolutely fantastic." +
              "<br>" +
              " <span style='color: #FFDB16; font-weight: bold; font-size:20px; '>-Daniel</span>"
        },
        {
          review: "Hands down BEST Chicken and Ribs in the area! My go to spot..love all their food options..Outdoor sitting too, cozy ambiance!! " +
              "<br>" +
              " <span style='color: #FFDB16; font-weight: bold; font-size:20px; '>-Catherine</span>"
        },
        {
          review: " Absolutely loved this place, best food i’ve had in brooklyn." +
              "<br>" +
              " <span style='color: #FFDB16; font-weight: bold; font-size:20px; '>-Izzy</span>"
        },
        {
          review: "Excellent food and the staff are amazing\n" +
              "<br>" +
              " <span style='color: #FFDB16; font-weight: bold; font-size:20px; '>-Dianna</span>"
        },


      ],
    }
  },
  methods: {
    nextReviews() {
      this.indexToSearch += 1;
      if (this.indexToSearch === this.reviews.length) {
        this.indexToSearch = 0;
      }
      this.currentReview = this.reviews[this.indexToSearch].review
    },
    previousReviews() {
      this.indexToSearch -= 1;
      if (this.indexToSearch <= 0) {
        this.indexToSearch = 0;
      }
      this.currentReview = this.reviews[this.indexToSearch].review
    },
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
  background: url("../assets/Images/newsize.jpeg") fixed center/cover no-repeat;
  background-position: left top;
  height: 100%;


  h2 {
    padding: 20px;
    text-align: start;
    font-size: 30px;
    margin-bottom: 12vh;
    margin-top: 2vh;
    opacity: 0.8;
    //background: black;


  }

  .reviews {
    width: 60%;
    margin: 0 auto;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    line-height: 38px;
    text-align: center;
    padding: 100px;
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.8);


    .review-arrow {
      cursor: pointer;

      img {
        margin-top: 10px;
        padding: 10px;
        border-radius: 50%;

        &:hover {
          background: lighten($bgColor, 30%);
        }
      }
    }
  }

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    h2 {
      font-size: 30px;
    }

    .reviews {
      width: 98%;
      margin: 0 auto;
      padding: 30px;

      .review-arrow {
        img {
          margin-top: 40px;
          padding: 10px;
          border-radius: 50%;

          &:hover {
            background: lighten($bgColor, 10%);
          }
        }
      }
    }

  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  .container {
    h2 {
      font-size: 30px;
    }

    .reviews {
      width: 98%;
      margin: 0 auto;
      padding: 40px;

      .review-arrow {
        img {
          margin-top: 40px;
          padding: 10px;
          border-radius: 50%;

          &:hover {
            background: lighten($bgColor, 10%);
          }
        }
      }
    }

  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1024px) and (max-width: 1366px) {
  .container {
    h2 {
      font-size: 30px;
    }

    .reviews {
      width: 98%;
      margin: 0 auto;
      padding: 10px;

      .review-arrow {
        img {
          margin-top: 40px;
          padding: 10px;
          border-radius: 50%;

          &:hover {
            background: lighten($bgColor, 10%);
          }
        }
      }
    }

  }

}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    h2 {
      font-size: 30px;
    }

    .reviews {
      width: 98%;
      margin: 0 auto;
      padding: 10px;

      .review-arrow {
        img {
          margin-top: 40px;
          padding: 10px;
          border-radius: 50%;

          &:hover {
            background: lighten($bgColor, 10%);
          }
        }
      }
    }

  }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>