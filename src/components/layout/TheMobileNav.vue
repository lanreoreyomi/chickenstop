<template>
  <div class="mobileNav">
    <div class="menu" :class="{db: scrollPosition>800}">
      <div class="mobile_header">
        <div class="order">
          <a class="orderbtn" href="https://store.goparrot.ai/chicken-stop/menu">Order Now</a>
        </div>
        <div class="brandName">
          <router-link :to="{name: 'Home'}" class="router-link" v-scroll-to="'#home'">
            <img :src="logo" alt="Brand Logo" v-on:click="toggleMenu = 'false'"></router-link>

        </div>

        <div class="menuIcon">
          <img :src="navIcon" @click="toggleMenu"
               alt="menu_icon"/>
        </div>
      </div>


      <div class="navBar" :class="{'expandMenu': !toggle}">
        <div class="navLinks">
          <ul>
            <li @click="toggleMenu">
              <router-link :to="{name: 'Home'}" class="router-link" exact>Home</router-link>
            </li>
            <li @click="toggleMenu">
            <li @click="toggleMenu">
              <router-link :to="{name: 'Menu'}" class="router-link" exact>Menu</router-link>
            </li>
            <li @click="toggleMenu">
              <router-link :to="{name: 'OurStory'}" exact class="router-link"> Our Story</router-link>

            </li>
            <li @click="toggleMenu">
              <router-link :to="{name: 'Location'}" exact class="router-link"> Location</router-link>
            </li>
          </ul>
          <div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      logo: require('/src/assets/Images/logo.svg'),
      scrollPosition: null,
      toggle: true,
      navIcon: "https://img.icons8.com/metro/26/ffffff/menu.png",
    }
  },
  components: {
    // socialButton,
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
      if (this.navIcon === "https://img.icons8.com/metro/26/ffffff/menu.png") {
        this.navIcon = "https://img.icons8.com/pastel-glyph/30/ffffff/cancel--v1.png";
      } else {
        this.navIcon = "https://img.icons8.com/metro/26/ffffff/menu.png"
      }

    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/Colors/colors";

.desktopNav {
  display: none !important;
}

@keyframes slide-anim {
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: rotateY(0);
  }
}

@media only screen and(min-device-width: 375px) and (max-device-width: 667px) {
  .mobileNav {
    display: block !important;
  }
}

@media (max-width: 823px) {
  .mobileNav {
    display: block !important;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    background: $bgColor;
    font-family: 'Poppins', sans-serif;

    .menu {

      .mobile_header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .order {

          width: 100%;
          right: 0;

          .orderbtn {
            background: $redFill !important;
            display: block;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;

            text-align: center;
            color: $textColor;
            text-decoration: none;
            height: 100%;
            padding-top:30px;
          }


        }

        .brandName {

          text-align: center;
          padding-left:30px;
          margin-top: 1vh;

          img {
            width: 60px;

          }

        }

        .menuIcon {

          padding-right: 20px;
          padding-top: 28px;
          text-align: end;
        }
      }

      .openNavbar {
        cursor: pointer;
        top: 0;
        right: 0;
      }

    }


    .navBar {
      height: 100%;
      position: fixed;
      z-index: 99999;
      top: 75px;
      right: 0;
      background-color: lighten($bgColor, 7%);
      overflow-y: hidden;
      transition: 0.9s;
      width: 0;

      .navLinks {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;
        height: 100%;

        ul {
          animation-name: slide-anim;
          animation-duration: 4s;

          li {
            list-style: none;

            a {
              cursor: pointer;
              padding: 8px;
              text-decoration: none;
              font-weight: bold;
              display: block;
              transition: 0.3s;
              color: $accentColor;
              font-size: 30px;

              &:hover {
                color: $textColor;
              }
            }

            .router-link-active {
              border-radius: 6px;
              color: $redFill;
              border-bottom: none !important;
              padding: 8px;


            }

          }
        }
      }


    }
  }
  .expandMenu {
    width: 100% !important;
  }
}
</style>