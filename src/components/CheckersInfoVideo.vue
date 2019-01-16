<template>
  <div class="info-video py-4 pt-lg-5 pb-lg-4">
    <div class="width-constrain">
      <div class="mb-3">
        <h1>
          <slot name="heading"></slot>
        </h1>
      </div>
      <div class="info-video-subheading mb-4">
        <slot name="subheading"></slot>
      </div>
      <div class="info-video-buttons">
        <ActionButton buttonType="video" buttonLabel="Watch the Video" @trigger-click="toggleVideo"></ActionButton>
      </div>
      <div id="collapse-video" :class="{visible: videoVisible}">
        <div class="video-space">
          <div class="spacer"></div>
          <div class="video-wrapper">
            <youtube @ready="ready" videoId="0-vHFIHulxU" player-width="100%" :player-height="videoPlayerHeight"></youtube>
          </div>
        </div>
        <ActionButton buttonType="text" buttonLabel="Hide Video" @trigger-click="toggleVideo"></ActionButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ActionButton from '@/components/ActionButton.vue';
  import * as $ from 'jquery';
  import VueYouTubeEmbed from 'vue-youtube-embed';

  Vue.use(VueYouTubeEmbed);

  @Component({
    components: {ActionButton},
    methods: {

    }
  })
  export default class CheckersInfoVideo extends Vue {

    public videoVisible: boolean = false;
    public videoPlayer: any;
    public videoPlayerHeight:number = 0;

    toggleVideo(_e: any): void {
      this.videoVisible = !this.videoVisible;
      if (this.videoVisible) {
        // @ts-ignore
        $("html, body").animate({scrollTop: $("#collapse-video").offset().top + 20}, 1000);
      } else {
        this.pauseVideo();
      }
    }

    mounted():void {
      //@ts-ignore
      this.videoPlayerHeight = $('#collapse-video').width() * (9 / 16);
    }

    ready (event:any) {
      this.videoPlayer = event.target;
    }

    pauseVideo(): void {
      this.videoPlayer.pauseVideo();
    }

    get videoToggled(): boolean {
      return this.videoVisible;
    }
  }
</script>
<style scoped lang="less">
  @import '../css/variables';

  .info-video {
    background: url('../assets/light-grey-texture.jpg') repeat;

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
      }
    }

    .video-close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
      height: 2rem;
      width: 2rem;
    }

    &-buttons {
      text-align: center;

    }

    .spacer {
      padding-top: 56.2%;
    }

    #collapse-video {
      width: 100%;
      max-height: 0;
      overflow: hidden;
      position: relative;
      transition: max-height 1s;
      margin-bottom: 1.5rem;
      text-align: center;

      &.visible {
        max-height: 1000px;
        transition: max-height 1s;
      }
    }

    .video-space {
      position: relative;
      margin: 2rem 0;
    }

    .video-wrapper, iframe {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }

  }
</style>
