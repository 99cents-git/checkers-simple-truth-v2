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
        <div class="sidebar-image spinner" v-if="!videoVisible">
          <div class="sidebar-price px-3 py-2 px-lg-4 py-lg-3 d-flex">
            <div class="sidebar-price-rands pr-1" v-html="currentSidebarItem.priceRands"></div>
            <div class="sidebar-price-cents" v-html="currentSidebarItem.priceCents"></div>
          </div>
          <div class="sidebar-flash">
            <img :src="'https://s3.amazonaws.com/checkershosting/mealkits/flash-'+currentSidebarItem.flash+'.svg'" alt="">
          </div>
          <div class="sidebar-image-wrapper" v-bind:style="{'background-image': 'url(https://s3.amazonaws.com/checkershosting/mealkits/kits/'+currentSidebarItem.packshot+')'}"></div>
        </div>
        <div class="sidebar-details p-4 p-lg-5 d-flex flex-column">
          <div class="product mb-4" v-html="currentSidebarItem.sidebarHeading"></div>
          <div class="details mb-3" v-html="currentSidebarItem.descriptionText"></div>
          <div class="sidebar-details-entry">
            <div class="header">
              INGREDIENTS INSIDE THE BOX:
            </div>
            <div class="contents" v-html="currentSidebarItem.includedText"></div>
          </div>
          <div class="sidebar-details-entry">
            <div class="header">
              INGREDIENTS FROM YOUR PANTRY:
            </div>
            <div class="contents" v-html="currentSidebarItem.neededText"></div>
          </div>
          <div class="sidebar-details-entry">
            <div class="header">
              ALLERGENS:
            </div>
            <div class="contents" v-html="currentSidebarItem.allergenText"></div>
          </div>
          <div class="video-button">
            <ActionButton buttonType="video" buttonLabel="Step-by-step video" @trigger-click="showVideo"></ActionButton>
          </div>
          <div class="sidebar-tcs mt-3">Recipe card ALSO Included in the box</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import SidebarController from './SidebarController';

  export default SidebarController;
</script>
<style scoped lang="less">
  @import './SidebarStyles';
</style>
