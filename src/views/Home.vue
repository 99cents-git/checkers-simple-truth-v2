<template>
  <div class="home width-constrain py-5">
    <h1 class="mb-4">EXPLORE THIS WEEK’S TASTY MENU</h1>
    <div class="card-grid" >
      <CheckersCard v-for="card in homeCards" :key="card.id" v-bind:cardConfig="card"/>
    </div>
  </div>
</template>
<script lang="ts">
  /// <reference path="../interfaces.ts" />
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import CheckersCard from "@/components/CheckersCard.vue";

  @Component({
    components: {
      CheckersCard,
    },
  })

  export default class Home extends Vue {

    get homeCards() {
      return this.$store.state.homeCards
    }
  }
</script>
<style scoped lang="less">

  @import '../css/variables';

  .width-constrain {
    max-width: 1440px;
    margin: 0 auto;
  }

  .home {

  }

  .card-grid {
    display: flex;
    flex-wrap: wrap;

    .checkers-card {
      width: 48%;
      margin: 1%;

      @media @smart-phone {
        width: 100%;
        margin: 3% 0;
      }
    }
  }
</style>
