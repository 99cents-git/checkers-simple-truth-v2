<template>
  <div class="page products-page">
    <div class="content-filters ">

<div class="width-constrain">
      <div class="row">
  <div class="col"><div class="filter-wrapper width-constrain">
        <div class="select-label">BROWSE BY Dietary REQUIREMENT</div>
        <multiselect v-model="filterValue" placeholder="Add a filter" label="name" track-by="code" :options="dFilters" :multiple="true" :searchable="false" @input="updateFilters"></multiselect>
      </div></div>
  <div class="col">  <div class="filter-wrapper width-constrain">
        <div class="select-label">BROWSE BY Category</div>
        <multiselect v-model="categoryValue" placeholder="Add a filter" label="name" track-by="code" :options="cFilters" :multiple="true" :searchable="false" @input="updateFilters"></multiselect>
      </div></div>
</div>
</div>

      
    
    </div>
    <div class="width-constrain">
    <isotope :options='isoOptions' :list="filteredProducts">
      <CheckersProduct v-for="card in filteredProducts" :key="card.id" v-bind:productConfig="card"/>
    </isotope>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import CheckersProduct from '@/components/CheckersProduct.vue';
  import isotope from 'vueisotope';

  @Component({
    components: {CheckersProduct, isotope}
  })
  export default class ProductsController extends Vue {

    public filterValue: any = [];
    public categoryValue: any = [];
    public cFilters: any[] = this.categoryFilters;
    public dFilters: any[] = this.dietFilters;
    public activeFilters: string[] = [];
    public filteredProducts: any[] = this.allProducts;

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

    public updateFilters(_thing: any): void {
      console.log('The id is: ' + this.$route.params.diet_Id);
      //console.log(this.filterValue);
      //console.log(this.categoryValue);
      let _concatFilters: any[] = this.filterValue.concat(this.categoryValue);
      this.activeFilters = _concatFilters.map((_value:any) => {
        return _value.name;
      });
      console.log(this.activeFilters);
      this.filterProducts();
    }

    get isoOptions() {
      return {
        getFilterData: {
          isEven: function (itemElem: any): boolean {
            return itemElem.id % 2 === 0;
          },
          isOdd: function (itemElem: any): boolean {
            return itemElem.id % 2 !== 0;
          }
        }
      }
    }

    get dietFilters() {
      return this.$store.state.dietFilters
    }

    get categoryFilters() {
      return this.$store.state.tags
    }

    filterProducts(): void {
      if (!this.activeFilters || this.activeFilters.length === 0) {
        this.filteredProducts = this.$store.state.productCards;
        console.log(this.filteredProducts);
        this.$forceUpdate();
      } else {
        this.$nextTick(() => {
          this.filteredProducts = this.allProducts.filter((_product:any) => {
            let _found:boolean = true;
            this.activeFilters.forEach(_filter => {
              if (!_product.tags.includes(_filter)) {
                _found = _found && false
              } else {
                _found = _found && true
              }
            });
            return _found;
          });
          console.log(this.filteredProducts);
        });
      }
    }

    get allProducts() {
      return this.$store.state.productCards
    }
  }
</script>
<style lang="less">
  .products-page {
    background: url('../assets/main-bg.jpg') repeat;
  }

  .width-constrain {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}

  .clear {
    clear: both;
  }
</style>
