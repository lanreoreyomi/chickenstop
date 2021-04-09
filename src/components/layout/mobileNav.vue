<template>
  <div class="mobileNav">
    <div class="menu" :class="{db: scrollPosition>800}">
      <div class="brandName">
        <router-link :to="{name: 'Home'}" class="router-link" exact>
          <img :src="logo" alt="Brand Logo" v-on:click="toggleMenu = 'false'"></router-link>

      </div>
      <div class="menuIcon">
        <img src="https://img.icons8.com/metro/26/fa314a/menu.png" v-on:click="toggleMenu =!toggleMenu"
             alt="menu_icon"/>
      </div>
      <div class="navBar" :class="{'expandMenu': !toggleMenu}">
        <div class="closeNavBar">
          <img src="https://img.icons8.com/ios-glyphs/30/fa314a/macos-close.png" v-on:click="toggleMenu =!toggleMenu"
               alt="close_nav"/>
        </div>

        <div class="navLinks">
          <ul>
            <li v-on:click="toggleMenu =!toggleMenu">
              <router-link :to="{name: 'Home'}" class="router-link" exact>Home</router-link>
            </li>

            <li @click="toggleMenu=!toggleMenu">
            <li v-on:click="toggleMenu =!toggleMenu">
              <router-link :to="{name: 'Menu'}" class="router-link" exact>Menu</router-link>
            </li>

            <li @click="toggleMenu=!toggleMenu">
              <a class="button1">Location </a>
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
      logo: require('/src/assets/Images/mobileLogo.png'),
      scrollPosition: null,
      toggleMenu: true,
    }
  },
  components: {
    // socialButton,
  },
  methods: {},
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
    z-index: 9;
    width: 100%;
    background: $bgColor;
    //height: 10vh;
    font-family: 'Poppins', sans-serif;


    .menu {
      display: flex;
      justify-content: space-between;

      .openNavbar {
        cursor: pointer;
        top: 0;
        right: 0;
      }

      .brandName {

        img {
          padding-top: 5px;
          width: 40px;

        }
      }

      .menuIcon {
        margin: 0;
        text-align: end;
        padding-right: 20px;
        padding-top: 10px;

      }
    }

    .navBar {
      height: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: $bgColor;
      overflow-x: hidden;
      transition: 0.9s;
      width: 0;

      .navLinks {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;

        ul {
          animation-name: slide-anim;
          animation-duration: 4s;

          li {
            list-style: none;

            a {
              cursor: pointer;
              padding: 8px;
              text-decoration: none;
              font-size: 16px;
              display: block;
              transition: 0.3s;
              color: $accentColor;
            }

            .router-link-active {
              border-radius: 6px;
              color: $redFill;
              border-bottom: none !important;
              padding: 8px;

              &:hover {
                color: $bgColor;
              }
            }

          }
        }
      }

      .closeNavBar {
        cursor: pointer;

        img {
          padding: 10px;
        }

      }
    }
  }
  .expandMenu {
    width: 70% !important;
  }
}
</style>