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
          <div class="sidebar-image-wrapper" v-bind:style="{'background-image': 'url(./static/'+currentSidebarItem.imagePath+')'}"></div>
        </div>
        <div class="sidebar-details p-4 p-lg-5 d-flex flex-column">
          <div class="product mb-4" v-html="currentSidebarItem.productName"></div>
          
          <div class="d-flex flex-row"><div class="p-2 bg-info" v-for="tag in currentSidebarItem.tags">{{ tag }}</div></div>
          <div class="details mb-3" v-html="currentSidebarItem.description"></div>
          <div class="sidebar-details-entry">
            <div class="header p-4 d-flex flex-column">
              NUTRITIONAL INFO
            </div>
            <div class="contents" v-for="nutritionalInfo in currentSidebarItem.nutritionalInfo"><ul><li>{{ nutritionalInfo }}</li></ul></div>
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
<style scoped lang="less">
  @import './SidebarStyles';

  
</style>
