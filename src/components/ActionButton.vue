<template>
  <div @click="buttonLink ? null : triggerClick()" class="action-button py-3 px-4" :class="['action-button-'+buttonType, 'action-button-theme-'+buttonTheme]">
    <a :href="buttonLink" target="_blank">
      <div class="action-button-inner d-flex align-items-center">
        <div v-if="buttonType !== 'text'" class="action-button-icon mr-3">
          <img src="../assets/video-icon.svg" class="img-fluid" alt="">
        </div>
        <div class="action-button-label">
          {{buttonLabel}}
        </div>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
  import {EventBus} from "./EventBus";

  @Component({name: 'ActionButton'})
  export default class ActionButton extends Vue {
    @Prop() buttonType!: string;
    @Prop() buttonLabel!: string;
    @Prop() buttonLink!: string;
    @Prop() buttonTheme!: string;
    @Prop() buttonAction!: string;
    @Prop() buttonId!:number;

    @Emit()
    triggerClick():void {

    }
  }
</script>
<style scoped lang="less">
  @import '../css/variables';

  .action-button {
    display: inline-block;
    background: linear-gradient(180deg, #9EC44D 0%, #7AB629 100%);
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 2px;

    a:hover {
      text-decoration: none;
    }

    &:hover {

      &:after {
        transition: all @anim-speed;
        transform: translateY(0);

      }

      img {
        transition: all @anim-speed;
      }

      .action-button-label {
        pointer-events: none;
      }
    }

    &:after {
      content: " ";
      .cover-parent;
      background: linear-gradient(180deg, #aaC44D 0%, #7AB629 100%);
      transform: translateY(100%);
      pointer-events: none;
      transition: all @anim-speed;
      overflow: hidden;
    }

    &-icon {
      width: 30px;
      pointer-events: none;
      position: relative;
      z-index: 1;

      img {
        transition: all @anim-speed;
      }
    }

    &-label {
      position: relative;
      z-index: 1;
      color: white;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.2rem;
      transition: color @anim-speed;
    }

  }

  &.action-button-theme-light {
    background: linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%) !important;

    &:after {
      background: linear-gradient(0deg, #777 0%, #eee 100%) !important;
    }

    .action-button-label {
      color: @grey-333;
    }
  }
</style>
