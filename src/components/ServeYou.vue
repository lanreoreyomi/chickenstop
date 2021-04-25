<template>
  <div class="container">
    <div class="serve">
      <div class="serve_info">
        <div class="serve_text">
          <h3>Here to serve you !</h3>
          <h4>{{text_desc}}</h4>
          <h4>{{text_desc3}}</h4>
          <h4 class="deliver">{{text_desc2}}</h4>


        </div>
        <div class="serve_img">
          <img src="../assets/Images/serveyou.jpeg" alt="menu image">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ServeYou",
  props: {
    text_desc:{
      type: String,
      required: false
    } ,
    text_desc2:{
      type: String,
      required: false
    } ,
    text_desc3:{
      type: String,
      required: false
    } ,

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/Colors/colors";
@import "../assets/Fonts/fonts";
@import "../assets/Buttons/Buttons";

.container {
  .serve {
    .serve_info {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .serve_text {
        h3 {
          text-align: center;
          margin-top: 15vh;
          font-size: 50px;
          opacity: 0.7;
        }
        h4{
          text-align: center;
          font-size: 20px;
          opacity: 0.7;
          font-weight:normal;
          margin-top: 2vh;

        }
        .deliver{
          color: $accentColor;
          opacity:1;
        }
      }

      .serve_img {
        img {
          max-width: 100%;

        }
      }

    }
  }

  @media only screen and (max-width: 1366px) {
    .serve {
      .serve_info {
        margin-bottom: 3vh;
        grid-template-columns: 1fr;
        grid-template-areas: "a a a"
      "b b b";

        .serve_text {
          grid-area: b;

          h3 {
            margin-top: 0vh;
            font-size: 30px;
          }
        }

        .serve_img {
          grid-area: a;
        }

      }
    }
  }
}



</style>