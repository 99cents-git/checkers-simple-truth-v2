<template>
  <div class="page products-page">
    <CheckersProduct v-for="card in allProducts" :key="card.id" v-bind:productConfig="card"/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from "vue-class-component";
  import CheckersProduct from '@/components/CheckersProduct.vue';

  @Component({
    components: {CheckersProduct}
  })
  export default class ProductsController extends Vue {

    constructor() {
      super();
    }

    public beforeCreate(): void {

    }

    public created(): void {

    }

    public beforeMount(): void {

    }

    public mounted(): void {

    }

    get allProducts() {
      return this.$store.state.productCards
    }
  }
</script>
<style lang="less">
  .products-page {
    border: 1px solid red;
  }
</style>
