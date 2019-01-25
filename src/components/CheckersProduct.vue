<template>

  <div @click="triggerClick" class="checkers-product" :class="productConfig.tags">
    <div class="checkers-product-spacer"></div>
    <div class="checkers-product-content d-flex flex-column">
      <div class="checkers-product-image" v-if="productConfig.imagePath">
        <div class="checkers-product-image-wrapper">
          <img :src="'./static/'+productConfig.imagePathThumbnail" class="img-max-100" alt="">
        </div>
      </div>
      <div class="checkers-product-footer">
        <div class="checkers-product-cta">
          <ActionButton buttonType="text" buttonAction="show-info" buttonLabel="Learn More" :buttonId="productConfig.id"></ActionButton>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
  /// <reference path="../interfaces.ts" />
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ActionButton from '@/components/ActionButton.vue';
  import {EventBus} from "./EventBus";

  @Component({
    components: {ActionButton}
  })
  export default class CheckersProduct extends Vue {
    @Prop() productConfig!: any;

    triggerClick():void {
      console.log('remove routing');
        this.$router.push(
        { 
          path: '/filtered'
        })
      EventBus.$emit('button-clicked', {buttonAction: 'show-info', card: this.productConfig});
    }
  }
</script>
<style lang="less">
  @import '../css/variables';

  .checkers-product {
    position: relative;
    width: 23%;
    background: white;
    transform: scale(1);
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.05);
    margin: 1%;

    @media @smart-phone {
      width: 96%;
      margin: 2%;
    }

    &:hover {
      transform: scale(1.02);
      transition: all 0.5s;
    }

    &-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-spacer {
      padding-top: 127.5%;

      @media @smart-phone {
        padding-top: 105%;
      }
    }

    &-image {

      flex: 7;

      @media @smart-phone {
        flex: 30;
      }

      &-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &-flash {
      position: absolute;
      bottom: 1%;
      right: 1%;
    }

    &-footer {
      flex: 1;
      text-align: center;

    }

  }

  .description {
    &-label {
      font-weight: 700;
    }
    &-divider {
      margin-left: 0.75rem;
      padding-right: 0.75rem;
      border-left: 1px solid black;

      @media @smart-phone {
        margin-left: 0;
        padding-right: 0;
        border: none;
        display: block;
      }
    }
  }
</style>
