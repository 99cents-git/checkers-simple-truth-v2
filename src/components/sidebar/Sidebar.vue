<template>
  <div class="sidebar-wrapper" ref="sideBar">
    <div class="sidebar-cover" :class="{visible: isOpen}" @click="closeSidebar"></div>
    <div class="sidebar" :class="[{visible: isOpen}, config]">
      <div @click="closeSidebar" class="sidebar-close">
        <img src="@/assets/close.svg" alt="">
      </div>
      <div class="sidebar-content">
        <div class="sidebar-video" v-if="videoVisible">
          <youtube :videoId="currentVideoId" player-width="100%" :player-height="videoHeight"></youtube>
        </div>
        <div class="sidebar-image" v-bind:class="{spinner: !imageLoaded}" v-if="!videoVisible">
          <div class="sidebar-image-wrapper" v-bind:style="{'background-image': 'url(./static/products-bg.png)'}">
            <img v-show="imageLoaded" class="product-shot" v-bind:src="'./static/'+card.imagePath+''" @load="imgLoaded">
          </div>
        </div>
        <div class="sidebar-details p-4">
          <div class="product mb-4" v-html="card.productName"></div>
          <div class="d-flex flex-row flex-wrap justify-content-center">
            <div class="bg-info tags tag-justice" v-for="tag in card.tags" v-if="tag !== ''">
              <img src="@/assets/tags-tick.svg" alt=""> {{ tag.replace(/-/g, ' ') }}
            </div>
          </div>
          <div class="details product-desc p-4 p-lg-4" v-html="card.description"></div>
          <div class="sidebar-details-entry">
            <div class="contents" >
              <ul>
                <li v-for="nutritionalInfo in card.nutritionalInfo" class="nutritional-info">
                  <img src="@/assets/tags-tick.svg" alt="">
                  {{ nutritionalInfo }}
                </li>
              </ul>
            </div>
            <div v-if="card.ingredientsinfo">
              <div class="header p-4">
                NUTRITIONAL INFO
              </div>
              <table v-html="card.ingredientsinfo" class="nutrition-table"></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import SidebarController from './SidebarController';

  export default SidebarController;
</script>
<style lang="less">
  @import './SidebarStyles';

  .sidebar-wrapper {

    .tag-justice {
      justify-content: space-evenly;
    }

    .tags {

      background-color: #F0ECE6 !important;
      height: 3em;
      border-radius: 35px;
      color: #333333;
      text-transform: uppercase;
      margin: 0.5rem;

      display: flex;
      padding: 0 15px;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: bold;
      text-align: center;
      line-height: 1.4rem;

      @media @smart-phone {
        font-size: 0.8rem;
      }
    }


    .tags > img {
      padding-right: 0.3rem;
    }

    .sidebar-text-colour {
      color: #828282;
    }

    .nutritional-info {
      color: #4F4F4F;
      font-size: 1rem;
      text-align: left;
      padding-left: 0;
    }

    .nutritional-info > img {
      margin-top: -.1em;
      padding-right: 0.3rem;
    }

    .nutrition-table {
      width: 100%;
      font-size: 0.8rem;
      border-right: 1px solid grey;
      border-top: 1px solid grey;
    }

    tr {

    }

    td {
      border-left: 1px solid grey;
      border-bottom: 1px solid grey;
      padding: 3px;

      &:first-of-type {
        text-align: left;
      }
    }

    .product-desc {
      color: #828282;
      font-size: 1.2rem;
    }

    .product-shot {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
</style>
