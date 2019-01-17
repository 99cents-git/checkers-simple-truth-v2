<template>
  <div @click="triggerClick" class="checkers-card">
    <div class="checkers-card-spacer" v-if="cardConfig.cardProportion" :style="{paddingTop: cardConfig.cardProportion + '%'}"></div>
    <div class="checkers-card-content d-flex flex-column">
      <div class="checkers-card-image" v-if="cardConfig.hasImage">
        <div class="checkers-card-image-wrapper">
          <img :src="'./static/'+cardConfig.imagePath" class="img-fluid" alt="">
        </div>
      </div>
      <div class="checkers-card-footer d-flex flex-column p-4">
        <h2 class="checkers-card-header-text" v-html="cardConfig.headerText"></h2>
        <div class="checkers-card-subheader-text" v-html="cardConfig.subheaderText"></div>
        <div class="checkers-card-cta" v-if="cardConfig.hasCTA">
          <ActionButton buttonType="text" buttonAction="show-info" buttonLabel="View full range" :buttonId="cardConfig.id"></ActionButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /// <reference path="../interfaces.ts" />
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
  import ActionButton from '@/components/ActionButton.vue';
  import {EventBus} from "./EventBus";

  @Component({
    components: {ActionButton}
  })
  export default class CheckersCard extends Vue {
    @Prop() cardConfig!: HomeCard;

    triggerClick():void {
      EventBus.$emit('button-clicked', {buttonAction: 'show-info', card: this.cardConfig});
    }
  }
</script>
<style lang="less">
  @import '../css/variables';

  .checkers-card {
    position: relative;
    background: @grey-ed;
    transform: scale(1);
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.05);

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

      @media @smart-phone {
        position: relative;
      }
    }

    &-header-text {
      margin: 0;
    }


    &-subheader-text {
      font-size: 1.1rem;
      line-height: 1.4rem;
      padding: 0 20px;

      @media @high-res-laptop {
        font-size: 1.1rem;
      }

      @media @medium-res-laptop {
        font-size: 1rem;
      }

      @media @low-res-laptop {
        font-size: 1rem;
      }
    }

    &-description {

    }

    &-price {
      position: absolute;
      bottom: 7%;
      left: 4%;
      background: linear-gradient(180deg, #333333 0%, #282828 100%);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      font-weight: 900;
      color: @orange-e5;
      border-radius: 40px;

      &-rands {
        font-size: 2.8rem;
        line-height: 2.8rem;

        @media @smart-phone {
          font-size: 2rem;
        }
      }

      &-cents {
        font-size: 1.8rem;
        line-height: 2rem;

        @media @smart-phone {
          font-size: 1.2rem;
        }
      }
    }

    &-spacer {
      @media @smart-phone {
        display: none;
      }
    }

    &-image {
      flex: 33;
      position: relative;

      @media @smart-phone {
        flex: 30;
      }

      &-wrapper {
        width: 100%;
      }
    }

    &-flash {
      position: absolute;
      bottom: 1%;
      right: 1%;
    }

    &-footer {
      flex: 27;
      text-align: center;
      display: flex;
      justify-content: space-between;

      @media @smart-phone {
        flex: 40;
      }
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
