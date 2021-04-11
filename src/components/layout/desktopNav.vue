<template>
  <div class="container">
    <div class="header" :class="{changeNav: scrollPosition>400}">
      <div class="brand_logo">
        <img :src="logo" alt="Brand Logo">
      </div>
      <div class="header_menu">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}" exact class="router-link"> Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Menu'}" exact class="router-link"> Menu</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Menu'}" exact class="router-link"> Our Story</router-link>
          </li>

          <li>Location</li>
          <li id="order_now">
            <a class="btn_filled">Order Now</a>
          </li>
        </ul>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      dark_switch: true,
      scrollPosition: null,
      logo: require('/src/assets/Images/logo.svg'),
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./src/assets/Colors/colors.scss";
@import "./src/assets/Fonts/fonts.scss";
@import "./src/assets/Buttons/Buttons.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $textFont;

}

.changeNav {
  background-color: $bgColor;

}

.container {
  color: $textColor;
  background: $bgColor;

  .header {
    z-index: 99;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    top: 0;
    position: fixed;
    margin: 0 auto;
    background: $bgColor;

    .brand_logo {
      margin-left: 100px;

      img {
        max-width: 100px;
      }
    }

    .header_menu {
      width: 89%;
      padding: 0;
      margin: 0 auto;
      grid-column-start: 2;
      grid-column-end: 4;

      ul {
        text-align: end;
        margin-top: 30px;
        margin-right: 29px;

        li {
          list-style: none;
          text-align: start;
          display: inline-block;
          cursor: pointer;
          padding: 10px;
          margin: 0 auto 0 30px;
          text-decoration: none;
          opacity: 0.6;
          color: $textColor;
          font-weight: bold;

          .router-link {
            list-style: none;
            text-align: start;
            display: inline-block;
            cursor: pointer;
            text-decoration: none;
            color: $textColor;
            padding: 10px;
            font-weight: bold;

            &:hover {
              color: red;
              border-bottom: 1px solid $accentColor;
            }
          }

          &:hover {

            border-bottom: none;
          }
        }

        #order_now {
          opacity: 1;

          a {
            text-align: center;
            @include homeButton;
            opacity: 1;
            border-radius: 6px;
            margin-left: 2px;
            background: $redFill;
            color: $textColor;
            font-weight: bold;
            padding: 12px 20px 12px 20px;

            &:before {
              color: $bgColor !important;
              background: $accentColor;
            }

            &:hover {
              color: $bgColor !important;
              opacity: 1;
              border-bottom: none;
            }
          }

          &:hover {

            opacity: 1;
            border-bottom: none;
          }

        }
      }
    }

  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {

  .container {
    .header {
      .header_menu {
        width: 100%;

        ul {
          li {
            margin: 0 auto 0 20px;
          }
        }
      }
    }
  }
}
</style>
