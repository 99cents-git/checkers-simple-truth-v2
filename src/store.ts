import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dietFilters: [
      {code: 1, label: 'Gluten Free', name: 'gluten-free', selected: false},
      {code: 2, label: 'Vegan', name: 'vegan', selected: false},
      {code: 3, label: 'NO ADDED SUGAR/<br>Reduced Sugar', name: 'sugar-conscious', selected: false},
      {code: 4, label: 'raw', name: 'raw', selected: false},
      {code: 5, label: 'ORGANIC', name: 'organic', selected: false},
      {code: 6, label: 'VEGETARIAN', name: 'vegetarian', selected: false},
      {code: 7, label: 'DAIRY FREE', name: 'dairy-free', selected: false},
      {code: 8, label: 'HIGH PROTEIN', name: 'high-protein', selected: false}
    ],
    homeCards: [
      {
        id: 1,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `meals.jpg`,
        headerText: `meal solutions`,
        subheaderText: `Our selection of convenient vegan and vegetarian meals is packed with flavour and goodness. Browse our selection to enjoy a fuss-free meal perfect for lunch or dinner.`,
        category:'meals'
      },
      {
        id: 2,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `breakfast.jpg`,
        headerText: `BREAKFAST SOLUTIONS`,
        subheaderText: `Kick-start your day with a nutritious and tasty breakfast, with none of the guilt. Discover our healthier options to satisfy your palate and lifestyle needs.`,
        category:'breakfast'
      },
      {
        id: 3,
        cardProportion: 85,
        hasCTA: true,
        hasImage: true,
        imagePath: `essentials.jpg`,
        headerText: `pantry essentials`,
        subheaderText: `Keep your pantry stocked with the best assortment of raw, organic and gluten-free products at supermarket prices. Our selection includes pasta, raw honey and more.`,
        category:'essentials'
      },
      {
        id: 4,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `snacks.jpg`,
        headerText: `snacks`,
        subheaderText: `Healthy snacking is easier when you have tasty treats like these. Browse our variety of snacks that are simple, delicious and will easily complement your diet and lifestyle.`,
        category:'snacks'
      }
    ,
      {
        id: 5,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `sweet-snacks.jpg`,
        headerText: `SWEET SNACKS & DESSERTS`,
        subheaderText: `Treat your taste buds without compromising on nutrition with delicious snacks and desserts. Choose from reduced sugar, gluten free, vegan options and more.`,
        category:'sweet-snacks'

      }
    ,
      {
        id: 6,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `drinks.jpg`,
        headerText: `drinks`,
        subheaderText: `Quench your thirst with great-tasting refreshments perfectly suited to your lifestyle requirements. Your choices include organic, sugar free and more.`,
        category:'meals'
      }
    ,
      {
        id: 7,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `condiments.jpg`,
        headerText: `condiments & oils`,
        subheaderText: `For cooking, baking and roasting – there's no better choice! Our selection includes products which are unrefined, have no added preservatives and reduced sugar.`,
        category:'meals'
      }
    ,
      {
        id: 8,
        cardProportion: 85,
        hasImage: true,
        hasCTA: true,
        imagePath: `cleaning.jpg`,
        headerText: `ECO-FRIENDLY CLEANING PRODUCTS`,
        subheaderText: `Our range of affordable cleaning products is eco-friendly, cruelty-free and made with biodegradable materials.`,
        category:'meals'
      }
    ],
    productCards: [
      {
        id: 1,
        cardProportion: 127.5,
        imagePath: 'toasted_berry_muesli.png',
        flash: 'new',
        tags: ['meals', 'vegetarian', 'sweet-snacks', 'gluten-free'],
        productName: 'Toasted Berry Muesli',
        description: 'Lorem ipsum dolor sit amet.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 2,
        cardProportion: 127.5,
        imagePath: 'buttermilk_rusks.png',
        flash: 'new',
        tags: ['vegan', 'vegetarian', 'dairy-free', 'snacks'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 3,
        cardProportion: 127.5,
        imagePath: 'seed_crackers.png',
        flash: 'new',
        tags: ['high-protein', 'organic', 'dairy-free', 'raw'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 4,
        cardProportion: 127.5,
        imagePath: 'peanut_butter_protien_balls.png',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'gluten-free', 'vegan', 'meals'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 5,
        cardProportion: 127.5,
        imagePath: 'pretzel_knots.png',
        flash: 'new',
        tags: ['organic', 'snacks', 'sugar-conscious'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 6,
        cardProportion: 127.5,
        imagePath: 'rolled-oats.png',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      }
    ],
    tags: [
      {code: 1, label: 'Meal Solutions', name: 'meals', selected: false},
      {code: 2, label: 'Breakfast Solutions', name: 'breakfast', selected: false},
      {code: 3, label: 'Pantry Essentials', name: 'essentials', selected: false},
      {code: 4, label: 'Snacks', name: 'snacks', selected: false},
      {code: 5, label: 'Sweet Snacks', name: 'sweet-snacks', selected: false}
    ],
    sideDrawerOpen: false,
    sideDrawerId: 1,
    videoId: 'pga8mV8LJnE'
  },
  mutations: {
    openDrawer(_state, _payload) {
      _state.sideDrawerOpen = true;
      _state.sideDrawerId = _payload.id;
      _state.videoId = _payload.videoLink;
    },
    closeDrawer(_state) {
      _state.sideDrawerOpen = false;
    },
    updateVideoId(_state, _id) {
      _state.videoId = _id;
    }
  },
  getters: {
    sideDrawerState(_state) {
      return _state.sideDrawerOpen;
    },
    sideDrawerId(_state) {
      return _state.sideDrawerId;
    },
    sideDrawerCard(_state) {
      return _state.homeCards[_state.sideDrawerId - 1];
    },
    videoId(_state) {
      return _state.videoId;
    }
  },
  actions: {

  }
})
