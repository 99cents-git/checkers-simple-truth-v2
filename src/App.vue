<template>
  <div id="app">
    <Sidebar config="is-right is-portrait has-video"></Sidebar>
    <CheckersHeader/>
    <div class="breadcrumbs">
      <div class="width-constrain h-100">
        <div class="breadcrumbs-back-button">
          <a href="https://www.checkers.co.za">< Back</a>
        </div>
        <div class="breadcrumbs-crumbs h-100 d-flex align-items-center justify-content-center">
          <ul class="d-flex flex-row">
            <li><a href="https://www.checkers.co.za">Home</a></li>
            <li>Meal Kits</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-header">
      <div class="page-header-text w-100 d-flex align-items-center justify-content-center">
        <img src="./assets/ready-to-chef-header-text.svg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="promise d-flex align-items-center">
      <ul class="width-constrain d-flex justify-content-between flex-column flex-lg-row w-100 pb-3 pb-lg-0">
        <li class="promise-label">OUR QUALITY PROMISE</li>
        <li class="promise-item"><span class="d-none d-xl-inline-block">LOCALLY SOURCED,&nbsp;</span>FRESH INGREDIENTS
        </li>
        <li class="promise-item">NO WASTAGE</li>
        <li class="promise-item">SEASONAL INGREDIENTS</li>
      </ul>
    </div>
    <div class="intro">
      <CheckersInfoVideo>
        <template slot="heading">GET YOUR PERFECTLY PORTIONED MEAL KITS IN-STORE NOW!</template>
        <template slot="subheading">With Ready to Chef Meal Kits, you can cook gourmet meals at home with confidence.
          With over 20 new easy to follow recipes with all the main ingredients you need, your meal times will always be
          effortless and delicious!
        </template>
      </CheckersInfoVideo>
    </div>
    <router-view/>
    <div class="page-footer">
      <div class="page-footer-content d-flex flex-column justify-content-between">
        <div class="page-footer-header">
          Stand to Win 1 of 5 Meal Kit Vouchers!
        </div>
        <div class="page-footer-details pt-3 pt-lg-0">
          <p>Share a photo of yourself with a Meal Kit you purchased, use
            <strong><a class="link-text" href="https://twitter.com/search?q=%23ReadyToChef&src=typd" target="_blank">#ReadyToChef</a></strong>
            and tag Checkers SA and your foodie obsessed friend. You’ll then be entered for a chance to win 1 of 5 Meal
            Kit vouchers worth R250 each. </p>
          <p><strong>Entries open on
            <br class="d-block d-lg-none"/><a class="link-text" href="https://www.facebook.com/checkerssa" target="_blank">Facebook</a>,
            <a class="link-text" href="https://twitter.com/CheckersSA" target="_blank">Twitter</a> and
            <a class="link-text" href="https://www.instagram.com/checkers_sa/?hl=en" target="_blank">Instagram</a>!</strong>
          </p>
          <p>Competition ends 10 February 2019.</p>
        </div>
        <div class="page-footer-buttons d-flex align-items-center flex-column flex-lg-row">
          <span class="page-footer-tcs"><a class="link-text" href="http://www.termsconditions.co.za/index.aspx" target="_blank">T&Cs apply</a></span>
        </div>
      </div>
    </div>
    <div class="page-newsletter py-4">
      <div class="page-newsletter-content w-100 width-constrain d-flex justify-content-between align-items-center flex-column flex-lg-row">
        <div class="page-newsletter-signup">
          <div class="page-newsletter-signup-bold">
            SIGN UP TO OUR NEWSLETTER
          </div>
          <div class="page-newsletter-signup-description">
            Stay up to date with all of our specials, promotions and more.
          </div>
        </div>
        <div class="page-newsletter-button">
          <ActionButton buttonLabel="Sign Up Now" buttonType="text" buttonTheme="light" buttonLink="https://www.checkers.co.za/specials/newsletter.html"></ActionButton>
        </div>
      </div>
    </div>
    <CheckersFooter></CheckersFooter>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CheckersHeader from '@/components/CheckersHeader.vue';
  import ActionButton from '@/components/ActionButton.vue';
  import Sidebar from '@/components/sidebar/Sidebar.vue';
  import CheckersInfoVideo from '@/components/CheckersInfoVideo.vue';
  import CheckersFooter from '@/components/CheckersFooter.vue';

  import {EventBus} from "./components/EventBus";
  import {EVENTS} from "./components/Constants";
  import '../node_modules/normalize.css/normalize.css';


  @Component({
    components: {
      CheckersHeader,
      CheckersInfoVideo,
      CheckersFooter,
      ActionButton,
      Sidebar
    },
  })
  export default class App extends Vue {

    public mounted(): void {
      EventBus.$on('button-clicked', (a: any) => {
        switch (a.buttonAction) {
          case 'show-info':
            this.$store.commit('openDrawer', a.card);
            EventBus.$emit(EVENTS.UIEVENTS.SIDEBAR_SHOW);
            break;
        }
      })
    }

    public closeSidebar(): void {
      this.$store.commit('closeDrawer');
      document.body.classList.remove('no-scroll');
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');
  @import './css/overrides.less';
</style>
<style lang="less">
  @import './css/variables';

  html {

    @media @high-res-laptop {
      font-size: 14.5px !important;
    }
    @media @desktop {
      font-size: 17px;
    }
    @media @smart-phone {
      font-size: 13px !important;
    }

  }

  body {
    font-family: 'Roboto', sans-serif !important;
  }

  #app {
  }

  .sidebar-cover {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    background: fade(black, 70%);
    z-index: 90;
    opacity: 0;
    pointer-events: none;
    transition: all @anim-speed;

    &.visible {
      opacity: 1;
      pointer-events: all;
      transition: all @anim-speed;
    }
  }

  .page-header {
    height: 550px;
    background: url('./assets/left-hero-pic.png') left center no-repeat, url('./assets/right-hero-pic.png') right center no-repeat, url('./assets/header-bg.jpg') center center repeat;
    position: relative;

    @media @medium-res-laptop {
      background: url('./assets/left-hero-pic.png') -20% center no-repeat, url('./assets/right-hero-pic.png') 120% center no-repeat, url('./assets/header-bg.jpg') center center repeat;
    }

    @media @smart-phone {
      background: url('./assets/mobile-hero-pic.jpg') top left no-repeat;
      background-size: cover;
      height: 64vh;
    }
  }

  .hero-pics {
    overflow: hidden;

    &-left {
      @media @medium-res-laptop {
        transform: translateX(-10%);
      }
      @media @smart-phone {
        transform: translateX(-25%)
      }
    }
    &-right {
      @media @medium-res-laptop {
        transform: translateX(10%);
      }
      @media @smart-phone {
        transform: translateX(25%)
      }
    }
  }

  .page-header-text {
    .cover-parent;

    @media @smart-phone {
      height: 50%;
    }

    img {
      width: 50%;
      max-width: 950px;
      transition: transform 1s;

      &:hover {
        transform: scale(1.04);
        transition: transform 1s;
      }

      @media @smart-phone {
        width: 90%;
      }
    }
  }

  .page-footer {
    height: 550px;
    background-image: url('./assets/hero-footer-right.png'), url('./assets/hero-footer.jpg');
    background-position: top right, top center;
    background-repeat: no-repeat, no-repeat;
    background-size: contain, cover;
    padding: 7vh 0 7vh 48vw;

    @media @smart-phone {
      height: unset;
      background-image: url('./assets/mobile-footer-item.png'), url('./assets/mobile-bg.jpg');
      background-position: 0px 20px, top center;
      background-repeat: no-repeat, repeat;
      background-size: contain, contain;
      padding: 38vh 5vw 7vh 5vw;
      text-align: center;
    }

    &-content {
      width: 36vw;
      height: 100%;

      @media @smart-phone {
        width: 100%;
      }
    }

    &-header {
      font-weight: 900;
      font-size: 3.2rem;
      line-height: 3rem;
      text-transform: uppercase;
      color: #333333;
      text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);

      @media @smart-phone {
        font-size: 2.6rem;
        line-height: 2.3rem;
      }
    }

    &-details {
      font-size: 1.3rem;

      @media @smart-phone {
        font-size: 1.2rem;
      }
    }

    &-buttons {

    }

    &-tcs {
      font-weight: 700;
      font-size: 1.2rem;
    }

  }

  .page-newsletter {
    background: @grey-333;

    @media @smart-phone {
      text-align: center;
    }

    &-signup {
      color: white;

      &-bold {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 1.8rem;
      }

      &-description {
        font-size: 0.8rem;
        color: @grey-82;

        @media @smart-phone {
          font-size: 1.2rem;
          line-height: 1.4rem;
          padding: 1.2rem 0;
        }
      }
    }
  }

  .width-constrain {
    max-width: @max-content-width;
    margin: 0 auto;
    padding: 0;

    @media only screen and (max-width: @max-content-width) {
      padding: 0 3vw;
    }

    @media @smart-phone {
      padding: 0 5vw;
    }
  }

  .promise {
    height: 80px;
    background: @grey-333;
    color: white;
    font-size: 1.2rem;
    white-space: nowrap;
    cursor: default;

    @media @tablets {
      height: 60px;
    }

    @media @smart-phone {
      height: unset;
      font-size: 1rem;
    }

    &-item {
      padding-left: 3.5rem;
      position: relative;
      line-height: 45px;

      @media @tablets {

      }

      @media @smart-phone {
        padding: 0 0 0.5rem 2rem;
        line-height: 26px;
        margin-left: 20vw;
      }

      &:before {
        content: " ";
        background: url('./assets/checkmark.svg') no-repeat center center;
        background-size: contain;
        position: absolute;
        left: 0;
        width: 40px;
        height: 40px;
        top: 6%;

        @media @smart-phone {
          width: 20px;
          height: 20px;
        }
      }
    }

    &-label {
      color: @orange-e5;
      font-weight: 700;
      line-height: 45px;

      @media @smart-phone {
        font-size: 1.4rem;
        text-align: center;
      }
    }

  }

  .breadcrumbs {
    background: @grey-333;
    color: white;
    height: 60px;
    position: relative;

    @media @smart-phone {
      height: 40px;
    }

    &-crumbs {
      text-align: center;
    }

    &-back-button {
      position: absolute;
      left: 3vw;
      top: 0;
      color: @grey-82;
      height: 100%;
      background: #1d1d1d;
      text-align: center;
      text-transform: uppercase;

      @media @smart-phone {
        display: none;
      }

      a {
        .zoom-anim;
        color: @grey-82;
        transition: all @anim-speed;
        height: 100%;
        display: flex;
        padding: 0 2rem;
        align-items: center;

        &:hover {
          cursor: pointer;
          text-decoration: none;
          color: white;
          transition: all @anim-speed;
        }
      }
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {

    }

    li:not(:last-of-type) {
      color: @grey-82;
      padding-right: 2rem;
      position: relative;
      .zoom-anim;

      a {
        color: @grey-82;
        transition: color @anim-speed;

        &:hover {
          color: white;
          text-decoration: none;
          transition: color @anim-speed;
        }
      }

      &:after {
        content: ">";
        position: absolute;
        right: 0.8rem;
        top: 0;
      }
    }
  }

  ul {

    li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }

  a.link-text {
    color: @grey-333 !important;
    text-decoration: none;
    padding-bottom: 0.05rem;
    border-bottom: 1px solid @grey-333;
    transition: all 0.15s;

    &:hover {
      text-decoration: none !important;
      border-bottom: 1px solid transparent;
      color: black;
      text-shadow: 0 0 3px white;
      transition: all 0.15s;
    }
  }

  h1 {
    font-weight: 900 !important;
    font-size: 2.4rem !important;
    color: @grey-333 !important;
    line-height: 2.1rem !important;
    padding: 0 !important;
    margin: 0 0 0.5rem 0 !important;
    text-align: center;

    @media @smart-phone {
      font-size: 2rem !important;
    }
  }

  h2 {
    font-weight: 900 !important;
    font-size: 1.8rem !important;
    text-transform: uppercase;
    color: @grey-333 !important;
    line-height: 1.8rem !important;
    padding: 0 !important;
    margin: 0 0 0.5rem 0 !important;
    text-align: center;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
</style>
