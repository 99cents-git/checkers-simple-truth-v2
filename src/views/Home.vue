<template>
  <div class="home">
    <div class="content-filters">
      <div class="filter-wrapper width-constrain flex-wrap d-none d-sm-flex">
        <div v-for="filter in dietFilters" :key="filter.id" class="filter-item" v-html="filter.label" @click="dietaryClick(filter.name)" data-target="1"></div>
      </div>
    </div>
    <div class="card-grid  width-constrain  py-5" >
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

    get dietFilters() {
      return this.$store.state.dietFilters
    }

    toggleItem (diet_Id) {
      this.$router.push(
        { 
          path: '/filtered/diet/$diet_Id'
        })   
    }

     dietaryClick (diet_Id) {
      alert(diet_Id);
      this.$router.push(
        { 
          path: `/filtered/diet/${diet_Id}`
        }) 
      
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
    background: url('../assets/main-bg.jpg') repeat;
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
