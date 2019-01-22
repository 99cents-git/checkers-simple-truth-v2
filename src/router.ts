import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/filtered',
      name: 'products',
      component: Products
    },{
      path: '/filtered/diet/:diet_Id',
      name: 'diet',
      component: Products
    },{
      path: '/filtered/category/:cat_Id',
      name: 'category',
      component: Products
    }
  ]
})

