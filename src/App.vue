<template>
  <div id="app" >
    <div v-if="!appConfig" class="loader spinner"></div>
    <Sidebar config="is-right is-portrait has-video" :is-open="sidebarOpen" :card="sidebarCard"></Sidebar>
    <div v-if="appConfig" class="loaded-wrapper">
      <CheckersHeader/>
      <div class="breadcrumbs">
        <div class="width-constrain h-100">
          <div class="breadcrumbs-back-button">
            <a href="https://www.checkers.co.za">< Back</a>
          </div>
          <div class="breadcrumbs-crumbs h-100 d-flex align-items-center justify-content-center">
            <ul class="d-flex flex-row">
              <li><a href="https://www.checkers.co.za">Home</a></li>
              <li><a href="https://www.checkers.co.za/food/live-better.html">Live Better</a></li>
              <li>Simple Truth</li>
            </ul>

          </div>
        </div>
      </div>
      <div class="page-header">
        <div class="page-header-text w-100">
          <picture>
            <source media="(max-width: 640px)" srcset="./assets/simple-truth-logo-m.svg">
            <img src="./assets/simple-truth-logo.svg">
          </picture>
        </div>
      </div>
      <div class="promise d-flex align-items-center">
        <ul class="width-constrain d-flex justify-content-around flex-column flex-lg-row w-100 py-3 py-sm-0 pb-lg-0">
          <li class="promise-item">NO ARTIFICIAL COLOURS OR FLAVOURS</li>
          <li class="promise-item">NO ARTIFICIAL SWEETENERS</li>
          <li class="promise-item">NO ADDED MSG</li>
        </ul>
      </div>
      <div class="intro">
        <div class="py-4 px-3 pt-lg-5 pb-lg-4">
          <div class="width-constrain">
            <div class="mb-3">
              <h1>
                EXPLORE THE SIMPLE TRUTH RANGE </h1>
            </div>
            <div class="info-subheading mb-4">
              Our Simple Truth range is designed to give you a variety of healthier choices to complement your lifestyle
              and it includes no artificial colours, flavours or sweeteners and no added MSG. Explore our gluten free,
              organic and eco-friendly products – and so much more – below.
            </div>
          </div>
        </div>
      </div>
      <router-view :configuration="appConfig"/>
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
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CheckersHeader from '@/components/CheckersHeader.vue';
  import ActionButton from '@/components/ActionButton.vue';
  import Sidebar from '@/components/sidebar/Sidebar.vue';
  import CheckersFooter from '@/components/CheckersFooter.vue';
  import {EventBus} from "./components/EventBus";
  import {EVENTS} from "./components/Constants";
  import Multiselect from 'vue-multiselect';
  import '../node_modules/normalize.css/normalize.css';
  import NinjaComms from "./ninja/NinjaComms";
  import * as $ from 'jquery';

  declare var $gtm: any;
  declare var $ga: any;

  @Component({
    components: {
      CheckersHeader,
      CheckersFooter,
      ActionButton,
      Sidebar,
      Multiselect
    }
  })
  export default class App extends Vue {

    public appConfig: any = null;
    public sidebarOpen: boolean = false;
    public sidebarCard: any = {};

    private $gtm: any;
    private $ga: any;
    private $:any;

    public created() {
      NinjaComms.fetchConfiguration().done((data: any) => {

        this.appConfig = data;
        this.appConfig.forEach(_product => {
          _product.ingredientsinfo = _product.ingredientsinfo.replace(/Ê/g, '');
          _product.tags = _product.category.split(' ').concat(_product.tags.split(' '));
          _product.nutritionalInfo = _product.nutritionalinfo.split('|');
        });
        this.appConfig.sort((a, b) => (a.category.split(' ')[0] > b.category.split(' ')[0]) ? 1 : -1)
      })
    }

    public mounted(): void {
      EventBus.$on('button-clicked', (a: any) => {
        switch (a.buttonAction) {
          case 'show-info':
            this.sidebarCard = a.card;
            this.sidebarOpen = true;
            this.trackGTAEvent({
              action: 'click',
              category: 'Simple Truth',
              event: 'Clicked on product',
              label: 'Sidebar open',
              value: a.card.productName
            });
            break;
          case 'close-sidebar':
            this.sidebarOpen = false;
            break;
        }
      });
      EventBus.$on('track-click', (_event: any) => {
        this.trackGTAEvent({
          action: 'click',
          category: 'Simple Truth',
          label: _event.label,
          value: _event.value
        })
      });
    }

    public closeSidebar(): void {
      this.sidebarOpen = false;
    }

    private trackGTMEvent(_config:any):void {
      this.$gtm.trackEvent({
        event: _config.event,
        category: _config.category,
        action: _config.action,
        label: _config.label,
        value: _config.value
      });
    }

    private trackGTAEvent(_config:any):void {
      console.log(_config);
      this.$ga.event({
        eventCategory: _config.category,
        eventAction: _config.action,
        eventLabel: _config.label,
        eventValue: _config.value
      })
    }

    private trackGTMPage(_config:any):void {
      this.$gtm.trackView(_config.pageTitle, _config.pageURL);
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');
  @import './css/overrides.less';
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="less">
  @import './css/variables.less';

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

    &.no-scroll {

    }
  }

  #app {

  }

  .loaded-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    z-index: 5;

    @media @smart-phone {
      position: relative;
      height: unset;
      width: unset;
    }
  }

  .loader {
    .cover-parent;
    background: url('./assets/checkers-loader-text.svg') no-repeat center center #E5A339;
    background-size: 220px;

    @media @smart-phone {
        background-size: 220px;
    }
  }

  @keyframes loader {
    0% {
      opacity: 0.2
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0.2
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 250px;
    margin-top: -125px;
    margin-left: -125px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: rgba(255, 255, 255, 1);
    animation: spinner .6s linear infinite;
  }

  .img-max-100 {
    max-width: 100%;
    height: auto;
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
    position: relative;
    background: url('./assets/hero-left.png') left center no-repeat, url('./assets/hero-right.png') right center no-repeat, url('./assets/hero-tile.jpg') center center repeat;
    display: flex;
    align-items: center;

    @media @desktop {
      background-position: left center, right center, center center;
    }

    @media @high-res-laptop {
      background-position: -10vw center, 127% center, center center;
    }

    @media @medium-res-laptop {
      background-position: -40% center, 140% center, center center;
    }

    @media @smart-phone {
      background: url('./assets/hero-left-m.png') left top no-repeat, url('./assets/hero-right-m.png') right center no-repeat, url('./assets/hero-tile.jpg') center center repeat;
      background-size: contain, 25%, cover;
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .page-header-text {

    text-align: center;

    img {
      height: 80%;
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
    background-image: url('./assets/footer-right.jpg'), url('./assets/footer-left.jpg'), url('./assets/footer-tile.jpg');
    background-position: top right, top left, center center;
    background-repeat: no-repeat, no-repeat, repeat;
    display: flex;
    justify-content: center;
    padding: 70px 200px 100px;

    @media @high-res-laptop {
      background-position: 150% 0%, -10% 10%, center;
    }

    @media @medium-res-laptop {
      background-position: 220% 0%, -20% 10%, center;
    }

    @media @low-res-laptop {
      background-position: 150% 0%, -10% 10%, center;
    }

    @media @smart-phone {
      height: unset;
      padding: 21rem 2rem 9rem 2rem;
      text-align: center;
      background-image: url('./assets/footer-top-m.jpg'), url('./assets/footer-bottom-m.jpg'), url('./assets/footer-tile-m.jpg');
      background-position: top, bottom, center;
      background-repeat: no-repeat, no-repeat, repeat;
      background-size: contain, contain, contain;
    }

    &-content {
      max-width: 700px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      @media @smart-phone {
        height: 33vh;
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
      font-weight: bold;

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
    font-weight: 900;
    color: @green-light;
    font-size: 1.2rem;
    white-space: nowrap;
    cursor: default;

    @media @tablets {
      height: auto;
    }

    @media @smart-phone {
      height: unset;
      font-size: 1rem;
      padding-left: 5vw;
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

  .info {
    &-heading {
      text-align: center;
      font-weight: 900;
      font-size: 1.8rem;
      color: #333;
      line-height: 1.8rem;
    }

    &-subheading {
      text-align: center;
      max-width: @narrow-content-width;
      margin: 0 auto;
      font-size: 1.1rem;

      @media @smart-phone {
        margin: 0 6vw;
      }
    }
  }

  .content-filters {
    margin: 0 auto;
    background: url('assets/filter-bg.jpg') repeat;
    padding: 1rem 0;

    @media @smart-phone {
      padding: 6vw;
    }

    .multiselect__tag {
      background: @dark-green;
      margin-bottom: 0px;
    }

    .filters {
      display: flex;

      @media @smart-phone {
        flex-direction: column;
      }
    }

    .filter-wrapper {
      flex: 1;
      margin: 30px;
      justify-content: center;

      @media @smart-phone {
        margin: 0 0 6vw 0;
      }
    }

    .filter-item {
      background: fade(#3A6500, 30);
      height: 70px;
      width: 17%;
      border-radius: 35px;
      color: white;
      text-transform: uppercase;
      margin: 0.5rem;
      display: flex;
      padding: 0 30px;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      line-height: 1.4rem;

      @media @smart-phone {
        font-size: 1rem;
        line-height: 1.2rem;
        width: 100%;
        height: 50px;
      }

      &.selected {
        background: white;
      }

      &:hover {
        background: white;
        color: #7AB629;
        cursor: pointer;
      }
    }

    .select-label {
      font-weight: 900 !important;
      font-size: 1.8rem !important;
      color: white !important;
      line-height: 1.9rem !important;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 1rem;
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
    text-align: center;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
</style>
