import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeCards: [
      {
        id: 1,
        cardProportion: 85.7,
        hasPrice: true,
        hasCTA: true,
        hasImage: true,
        imagePath: `italian.jpg`,
        priceRands: 139,
        priceCents: 99,
        headerText: `ITALIAN AUBERGINE BAKE`,
        subheaderText: ``,
        descriptionText: `<span class="description-label">SERVES:</span> 2<span class="description-divider"></span><span class="description-label">COOKING TIME:</span> 30-45 minutes`,
        ctaText: "Do it now",
        allergenText: `Dairy (cow’s milk), gluten (wheat), eggs.`,
        includedText: `Aubergines, Napolitana sauce, basil, grated mozzarella, bread crumbs and Pecorino powder.`,
        neededText: `Vegetable oil (Canola or sunflower), salt and coarse black pepper.`,
        flash: 'new',
        videoLink: 'veBY8n0U2I4',
        packshot: 'italian-bake.jpg',
        sidebarHeading: 'ITALIAN AUBERGINE BAKE'
      },
      {
        id: 2,
        cardProportion: 85.7,
        hasPrice: true,
        hasCTA: true,
        hasImage: true,
        imagePath: `gnocchi.jpg`,
        priceRands: 159,
        priceCents: 99,
        headerText: `GNOCCHI`,
        subheaderText: ` with Mushrooms, Peas, Bacon and a Creamy Parsley Sauce`,
        descriptionText: `<span class="description-label">SERVES:</span> 2<span class="description-divider"></span><span class="description-label">COOKING TIME:</span> 30-45 minutes`,
        ctaText: "Do it now",
        allergenText: `Gluten (wheat), dairy (cow’s milk).`,
        includedText: `Portabellini mushrooms, bacon bits, garlic clove, garden peas, parsley and cream.`,
        neededText: `Salt, vegetable oil (Canola or sunflower), butter and coarse black pepper.`,
        flash: 'new',
        videoLink: 'VVKWRZht9P4',
        packshot: 'gnocchi-mushrooms.jpg',
        sidebarHeading: 'GNOCCHI WITH MUSHROOMS, Peas, Bacon and a Creamy Parsley Sauce'
      },
      {
        id: 3,
        cardProportion: 85.7,
        hasPrice: true,
        hasCTA: true,
        hasImage: true,
        imagePath: `quinoa.jpg`,
        priceRands: 169,
        priceCents: 99,
        headerText: `QUINOA COATED CHICKEN FILLETS`,
        subheaderText: `with Roasted Beetroot, Butternut and Pumpkin Seed Salad`,
        descriptionText: `<span class="description-label">SERVES:</span> 2<span class="description-divider"></span><span class="description-label">COOKING TIME:</span> 30-45 minutes`,
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
        cardProportion: 85.7,
        hasPrice: true,
        hasCTA: true,
        hasImage: true,
        imagePath: `lamb.jpg`,
        priceRands: 199,
        priceCents: 99,
        headerText: `HOME-STYLE LAMB BIRYANI`,
        subheaderText: `With Basmati Rice and Tomato, Cucumber & Mint Salsa`,
        descriptionText: `<span class="description-label">SERVES:</span> 2<span class="description-divider"></span><span class="description-label">COOKING TIME:</span> 45-50 minutes`,
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
