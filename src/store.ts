import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterCategories: [
      {id: 1, label: 'Gluten Free'},
      {id: 2, label: 'Vegan'},
      {id: 3, label: 'NO ADDED SUGAR/<br>Reduced Sugar'},
      {id: 4, label: 'raw'},
      {id: 5, label: 'ORGANIC'},
      {id: 6, label: 'VEGETARIAN'},
      {id: 7, label: 'DAIRY FREE'},
      {id: 8, label: 'HIGH PROTEIN'}
    ],
    homeCards: [
      {
        id: 1,
        cardProportion: 88.6,
        hasImage: true,
        hasCTA: true,
        imagePath: `meals.jpg`,
        headerText: `meal solutions`,
        subheaderText: `Our selection of convenient vegan and vegetarian meals is packed with flavour and goodness. Browse our selection to enjoy a fuss-free meal perfect for lunch or dinner.`,
        ctaText: "Do it now",
        allergenText: `Dairy (cow’s milk), gluten (wheat), eggs.`,
        includedText: `Aubergines, Napolitana sauce, basil, grated mozzarella, bread crumbs and Pecorino powder.`,
        neededText: `Vegetable oil (Canola or sunflower), salt and coarse black pepper.`,
        packshot: 'italian-bake.jpg',
        sidebarHeading: 'ITALIAN AUBERGINE BAKE'
      },
      {
        id: 2,
        cardProportion: 88.6,
        hasImage: true,
        hasCTA: true,
        imagePath: `breakfast.jpg`,
        headerText: `BREAKFAST SOLUTIONS`,
        subheaderText: `Kick-start your day with a nutritious and tasty breakfast, with none of the guilt. 
Discover our healthier options to satisfy your palate and lifestyle needs.`,
        ctaText: "Do it now",
        allergenText: `Gluten (wheat), dairy (cow’s milk).`,
        includedText: `Gnocchi, portabellini mushrooms, bacon bits, garlic clove, garden peas, parsley and cream.`,
        neededText: `Salt, vegetable oil (Canola or sunflower), butter and coarse black pepper.`,
        flash: 'new',
        videoLink: 'VVKWRZht9P4',
        packshot: 'gnocchi-mushrooms.jpg',
        sidebarHeading: 'GNOCCHI WITH MUSHROOMS, Peas, Bacon and a Creamy Parsley Sauce'
      },
      {
        id: 3,
        cardProportion: 88.6,
        hasCTA: true,
        hasImage: true,
        imagePath: `essentials.jpg`,
        headerText: `pantry essentials`,
        subheaderText: `Keep your pantry stocked with the best assortment of raw, organic and gluten-free products at supermarket prices. Our selection includes pasta, raw honey and more.`,
        ctaText: "Do it now",
        allergenText: `Dairy (cow’s milk), gluten (wheat), eggs, tree nuts.`,
        includedText: `Beetroot, butternut, pumpkin seeds, quinoa crust, chicken fillets, feta, wild rocket and basil pesto.`,
        neededText: `Vegetable oil (Canola or sunflower), salt, coarse black pepper, egg and butter.`,
        flash: 'new',
        videoLink: '6C4fyFGbims',
        packshot: 'quinoa-chicken.jpg',
        sidebarHeading: 'QUINOA COATED CHICKEN FILLETS With Roasted Beetroot, Butternut and Pumpkin Seed Salad'
      },
      {
        id: 4,
        cardProportion: 88.6,
        hasImage: true,
        hasCTA: true,
        imagePath: `snacks.jpg`,
        headerText: `snacks`,
        subheaderText: `Healthy snacking is easier when you have tasty treats like these. Browse our variety of snacks that are simple, delicious and will easily complement your diet and lifestyle.`,
        ctaText: "Do it now",
        allergenText: `Dairy (cow’s milk).`,
        includedText: `Double cream yoghurt, biryani spice, leg of lamb chops, Basmati rice, brown onion, potato, tomato paste, crushed whole peeled tomatoes, tomato, small cucumber, coriander and green bullet chilli.`,
        neededText: `Salt, vegetable oil (Canola or sunflower).`,
        flash: 'new',
        videoLink: 'pRGcU1FXeN0',
        packshot: 'lamb-biryani.jpg',
        sidebarHeading: 'HOME-STYLE LAMB BIRYANI With Basmati Rice and Tomato, Cucumber & Mint Salsa'
      }
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
