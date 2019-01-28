<template>
  <div class="page products-page">
    <div class="content-filters ">
      <div class="width-constrain">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="filter-wrapper width-constrain">
              <div class="select-label">BROWSE BY Dietary REQUIREMENT</div>
              <multiselect v-model="filterValue" placeholder="Add a filter" label="label" track-by="code" :options="dFilters" :multiple="true" :searchable="false" @input="updateFilters"></multiselect>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="filter-wrapper width-constrain">
              <div class="select-label">BROWSE BY Category</div>
              <multiselect v-model="categoryValue" placeholder="Add a filter" label="label" track-by="code" :options="cFilters" :multiple="true" :searchable="false" @input="updateFilters"></multiselect>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="width-constrain checkers-grid">
      <CheckersProduct v-for="card in filteredProducts" :key="card.id" v-bind:productConfig="card"/>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import CheckersProduct from '@/components/CheckersProduct.vue';

  @Component({
    components: {CheckersProduct}
  })

  export default class ProductsController extends Vue {


    public filterValue: any = [];
    //public filterValue: any = [{lable: '',name: ''}];
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

    public mounted(filterValue, categoryValue) {
      if (this.$route.params.diet_Id) {
        this.filterValue = this.dietFilters.filter(_value => {
          return _value.name === this.$route.params.diet_Id;
        });
      } else if (this.$route.params.cat_Id) {
        this.categoryValue = this.categoryFilters.filter(_value => {
          return _value.name === this.$route.params.cat_Id;
        });
      }
      this.updateFilters();
    }

    public updateFilters(): void {
      let _concatFilters: any[] = this.filterValue.concat(this.categoryValue);
      this.activeFilters = _concatFilters.map((_value: any) => {
        return _value.name;
      });
      this.filterProducts();
    }

    get dietFilters() {
      return this.$store.state.dietFilters
    }

    get categoryFilters() {
      return this.$store.state.tags
    }

    public filterProducts() {
      if (!this.activeFilters || this.activeFilters.length === 0) {
        this.$nextTick(() => {
          this.filteredProducts = this.$store.state.productCards;
        });
      } else {
        this.$nextTick(() => {
          this.filteredProducts = this.allProducts.filter((_product: any) => {
            let _found: boolean = true;
            this.activeFilters.forEach(_filter => {
              if (!_product.tags.includes(_filter)) {
                _found = _found && false
              } else {
                _found = _found && true
              }
            });
            return _found;
          });
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

  .checkers-grid {
    display: flex;
    flex-wrap: wrap;
  }

  .clear {
    clear: both;
  }
</style>
