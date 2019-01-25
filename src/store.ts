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
        imagePath: 'almonds_mint.png',
        imagePathThumbnail: 'almonds_mint.jpg',
        flash: 'new',
        tags: ['meals', 'vegetarian', 'sweet-snacks', 'gluten-free'],
        productName: 'Toasted Berry Muesli',
        description: 'Lorem ipsum dolor sit amet.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 2,
        cardProportion: 127.5,
        imagePath: 'almonds_plain.jpg',
        imagePathThumbnail: 'almonds_plain.jpg',
        flash: 'new',
        tags: ['vegan', 'vegetarian', 'dairy-free', 'snacks'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 3,
        cardProportion: 127.5,
        imagePath: 'almonds_raspberry.png',
        imagePathThumbnail: 'almonds_raspberry.jpg',
        flash: 'new',
        tags: ['high-protein', 'organic', 'dairy-free', 'raw'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 4,
        cardProportion: 127.5,
        imagePath: 'almonds_slated_caramel.png',
        imagePathThumbnail: 'almonds_slated_caramel.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'gluten-free', 'vegan', 'meals'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 5,
        cardProportion: 127.5,
        imagePath: 'apple_cider_vinegar.png',
        imagePathThumbnail: 'apple_cider_vinegar.jpg',
        flash: 'new',
        tags: ['organic', 'snacks', 'sugar-conscious'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 6,
        cardProportion: 127.5,
        imagePath: 'asian_bowl.png',
        imagePathThumbnail: 'asian_bowl.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 7,
        cardProportion: 127.5,
        imagePath: 'bar_coconut_lemon.png',
        imagePathThumbnail: 'bar_coconut_lemon.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 8,
        cardProportion: 127.5,
        imagePath: 'bar_raw_pecan_salted_caramel.png',
        imagePathThumbnail: 'bar_raw_pecan_salted_caramel.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 9,
        cardProportion: 127.5,
        imagePath: 'brown_rice_crackers_black_white_sesame.png',
        imagePathThumbnail: 'brown_rice_crackers_black_white_sesame.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 10,
        cardProportion: 127.5,
        imagePath: 'brown_rice_crackers_flaxseed_sesame.png',
        imagePathThumbnail: 'brown_rice_crackers_flaxseed_sesame.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 11,
        cardProportion: 127.5,
        imagePath: 'brown_rice_crackers_sea_salt.png',
        imagePathThumbnail: 'brown_rice_crackers_sea_salt.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 12,
        cardProportion: 127.5,
        imagePath: 'buttermilk_rusks.png',
        imagePathThumbnail: 'buttermilk_rusks.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 13,
        cardProportion: 127.5,
        imagePath: 'cheese_cheddar.png',
        imagePathThumbnail: 'cheese_cheddar.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 14,
        cardProportion: 127.5,
        imagePath: 'cheese_gouda.png',
        imagePathThumbnail: 'cheese_gouda.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 15,
        cardProportion: 127.5,
        imagePath: 'chipotle_sauce.png',
        imagePathThumbnail: 'chipotle_sauce.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 16,
        cardProportion: 127.5,
        imagePath: 'choc_chip_shortbread.png',
        imagePathThumbnail: 'choc_chip_shortbread.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 17,
        cardProportion: 127.5,
        imagePath: 'coconut_sugar.png',
        imagePathThumbnail: 'coconut_sugar.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 18,
        cardProportion: 127.5,
        imagePath: 'coconut-water.png',
        imagePathThumbnail: 'coconut-water.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 19,
        cardProportion: 127.5,
        imagePath: 'cocopine.png',
        imagePathThumbnail: 'cocopine.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 20,
        cardProportion: 127.5,
        imagePath: 'vanilla_shortbread.png',
        imagePathThumbnail: 'vanilla_shortbread.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'Vanilla shortbread',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 21,
        cardProportion: 127.5,
        imagePath: 'cookies_choc_chip.png',
        imagePathThumbnail: 'cookies_choc_chip.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 22,
        cardProportion: 127.5,
        imagePath: 'cookies_coconut.png',
        imagePathThumbnail: 'cookies_coconut.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 23,
        cardProportion: 127.5,
        imagePath: 'cookies_crunchies.png',
        imagePathThumbnail: 'cookies_crunchies.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 24,
        cardProportion: 127.5,
        imagePath: 'dark_chocolate_brownie.png',
        imagePathThumbnail: 'dark_chocolate_brownie.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 25,
        cardProportion: 127.5,
        imagePath: 'date_balls_apple_pecan_chia.png',
        imagePathThumbnail: 'date_balls_apple_pecan_chia.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 26,
        cardProportion: 127.5,
        imagePath: 'date_balls_coconut_macadamia.png',
        imagePathThumbnail: 'date_balls_coconut_macadamia.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 27,
        cardProportion: 127.5,
        imagePath: 'date_balls_cranberry_beetroot_cashew.png',
        imagePathThumbnail: 'date_balls_cranberry_beetroot_cashew.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 28,
        cardProportion: 127.5,
        imagePath: 'elbow_macaroni.png',
        imagePathThumbnail: 'elbow_macaroni.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 29,
        cardProportion: 127.5,
        imagePath: 'Flakes.png',
        imagePathThumbnail: 'Flakes.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 30,
        cardProportion: 127.5,
        imagePath: 'fruit_chutney.png',
        imagePathThumbnail: 'fruit_chutney.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 31,
        cardProportion: 127.5,
        imagePath: 'fruit_juice_apple.png',
        imagePathThumbnail: 'fruit_juice_apple.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 32,
        cardProportion: 127.5,
        imagePath: 'fruit_juice_berry.png',
        imagePathThumbnail: 'fruit_juice_berry.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 33,
        cardProportion: 127.5,
        imagePath: 'fruit_juice_orange.png',
        imagePathThumbnail: 'fruit_juice_orange.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 34,
        cardProportion: 127.5,
        imagePath: 'gums_mango.png',
        imagePathThumbnail: 'gums_mango.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 35,
        cardProportion: 127.5,
        imagePath: 'jam_apricot.png',
        imagePathThumbnail: 'jam_apricot.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 36,
        cardProportion: 127.5,
        imagePath: 'jam_strawberry.png',
        imagePathThumbnail: 'jam_strawberry.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 37,
        cardProportion: 127.5,
        imagePath: 'jam-mixed-berry.png',
        imagePathThumbnail: 'jam-mixed-berry.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 38,
        cardProportion: 127.5,
        imagePath: 'mexican_bowl.png',
        imagePathThumbnail: 'mexican_bowl.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 39,
        cardProportion: 127.5,
        imagePath: 'noodles_moringa.png',
        imagePathThumbnail: 'noodles_moringa.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 40,
        cardProportion: 127.5,
        imagePath: 'noodles_purple_sweet_potato.png',
        imagePathThumbnail: 'noodles_purple_sweet_potato.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 41,
        cardProportion: 127.5,
        imagePath: 'oats_instant.png',
        imagePathThumbnail: 'oats_instant.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 42,
        cardProportion: 127.5,
        imagePath: 'oats_steel_cut.png',
        imagePathThumbnail: 'oats_steel_cut.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 43,
        cardProportion: 127.5,
        imagePath: 'orange_marmalade.png',
        imagePathThumbnail: 'orange_marmalade.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 44,
        cardProportion: 127.5,
        imagePath: 'orange-raspberry.png',
        imagePathThumbnail: 'orange-raspberry.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 45,
        cardProportion: 127.5,
        imagePath: 'peanut_butter_blondie.png',
        imagePathThumbnail: 'peanut_butter_blondie.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 46,
        cardProportion: 127.5,
        imagePath: 'peanut_butter_crunchy.png',
        imagePathThumbnail: 'peanut_butter_crunchy.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 47,
        cardProportion: 127.5,
        imagePath: 'peanut_butter_protien_balls.png',
        imagePathThumbnail: 'peanut_butter_protien_balls.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 48,
        cardProportion: 127.5,
        imagePath: 'peanut_butter_smooth.png',
        imagePathThumbnail: 'peanut_butter_smooth.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 49,
        cardProportion: 127.5,
        imagePath: 'pomegranate.png',
        imagePathThumbnail: 'pomegranate.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 50,
        cardProportion: 127.5,
        imagePath: 'pretzel_knots.png',
        imagePathThumbnail: 'pretzel_knots.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 51,
        cardProportion: 127.5,
        imagePath: 'protein_balls_cocoa_almont.png',
        imagePathThumbnail: 'protein_balls_cocoa_almont.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 52,
        cardProportion: 127.5,
        imagePath: 'protein_balls_very_bery.png',
        imagePathThumbnail: 'protein_balls_very_bery.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 53,
        cardProportion: 127.5,
        imagePath: 'raw_honey.png',
        imagePathThumbnail: 'raw_honey.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 54,
        cardProportion: 127.5,
        imagePath: 'red_alaea_sea_salt.jpg',
        imagePathThumbnail: 'red_alaea_sea_salt.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 55,
        cardProportion: 127.5,
        imagePath: 'roll_apricot_butternut.png',
        imagePathThumbnail: 'roll_apricot_butternut.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 56,
        cardProportion: 127.5,
        imagePath: 'roll_very_berry.png',
        imagePathThumbnail: 'roll_very_berry.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 57,
        cardProportion: 127.5,
        imagePath: 'rub_chipotle.png',
        imagePathThumbnail: 'rub_chipotle.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 58,
        cardProportion: 127.5,
        imagePath: 'rub_garlic_herb.png',
        imagePathThumbnail: 'rub_garlic_herb.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 59,
        cardProportion: 127.5,
        imagePath: 'rub_italian.png',
        imagePathThumbnail: 'rub_italian.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 60,
        cardProportion: 127.5,
        imagePath: 'rub_steak_house.png',
        imagePathThumbnail: 'rub_steak_house.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 61,
        cardProportion: 127.5,
        imagePath: 'rub_sweet_spicy_bbq.png',
        imagePathThumbnail: 'rub_sweet_spicy_bbq.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 62,
        cardProportion: 127.5,
        imagePath: 'rusks_muesli.png',
        imagePathThumbnail: 'rusks_muesli.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 63,
        cardProportion: 127.5,
        imagePath: 'salt_cypriot.png',
        imagePathThumbnail: 'salt_cypriot.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 64,
        cardProportion: 127.5,
        imagePath: 'salt_hawaiian_black.png',
        imagePathThumbnail: 'salt_hawaiian_black.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 65,
        cardProportion: 127.5,
        imagePath: 'salt_persian_blue.png',
        imagePathThumbnail: 'salt_persian_blue.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 66,
        cardProportion: 127.5,
        imagePath: 'seed_crackers_garlic_herb.png',
        imagePathThumbnail: 'seed_crackers_garlic_herb.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 67,
        cardProportion: 127.5,
        imagePath: 'seed_crackers.png',
        imagePathThumbnail: 'seed_crackers.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 68,
        cardProportion: 127.5,
        imagePath: 'ST_All-Purpose-Cleaner_01.png',
        imagePathThumbnail: 'ST_All-Purpose-Cleaner_01.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 69,
        cardProportion: 127.5,
        imagePath: 'ST_Chickpea_Bowl.png',
        imagePathThumbnail: 'ST_Chickpea_Bowl.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 70,
        cardProportion: 127.5,
        imagePath: 'ST_Laundry-Liquid_01.png',
        imagePathThumbnail: 'ST_Laundry-Liquid_01.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 71,
        cardProportion: 127.5,
        imagePath: 'ST_Mediterranean_Bowl.png',
        imagePathThumbnail: 'ST_Mediterranean_Bowl.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 72,
        cardProportion: 127.5,
        imagePath: 'ST_Muesli_FruitNut.jpg',
        imagePathThumbnail: 'ST_Muesli_FruitNut.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 73,
        cardProportion: 127.5,
        imagePath: 'ST_Muesli_Tropical.png',
        imagePathThumbnail: 'ST_Muesli_Tropical.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 74,
        cardProportion: 127.5,
        imagePath: 'ST_Roasted_Veggie_Bowl.png',
        imagePathThumbnail: 'ST_Roasted_Veggie_Bowl.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 75,
        cardProportion: 127.5,
        imagePath: 'ST-Almond.png',
        imagePathThumbnail: 'ST-Almond.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 76,
        cardProportion: 127.5,
        imagePath: 'ST-Coconut-Oil-Spray.png',
        imagePathThumbnail: 'ST-Coconut-Oil-Spray.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 77,
        cardProportion: 127.5,
        imagePath: 'ST-Dishwashing-Liquid.png',
        imagePathThumbnail: 'ST-Dishwashing-Liquid.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 78,
        cardProportion: 127.5,
        imagePath: 'ST-FabricSoftner.png',
        imagePathThumbnail: 'ST-FabricSoftner.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 79,
        cardProportion: 127.5,
        imagePath: 'ST-MultiPurpose.png',
        imagePathThumbnail: 'ST-MultiPurpose.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 80,
        cardProportion: 127.5,
        imagePath: 'ST-Rub.png',
        imagePathThumbnail: 'ST-Rub.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 81,
        cardProportion: 127.5,
        imagePath: 'swiss_style_muesli.png',
        imagePathThumbnail: 'swiss_style_muesli.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 82,
        cardProportion: 127.5,
        imagePath: 'toasted_berry_muesli.png',
        imagePathThumbnail: 'toasted_berry_muesli.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 83,
        cardProportion: 127.5,
        imagePath: 'tomato_sauce.png',
        imagePathThumbnail: 'tomato_sauce.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 84,
        cardProportion: 127.5,
        imagePath: 'triple_choc_cookie.png',
        imagePathThumbnail: 'triple_choc_cookie.jpg',
        flash: 'new',
        tags: ['organic', 'sweet-snacks', 'organic', 'sugar-conscious', 'high-protein'],
        productName: 'BUTTERMILK RUSKS',
        description: 'Buttermilk Rusks are a South African favourite and now you can enjoy this Simple Truth treat which is made by hand and is gluten free.',
        nutritionalInfo: ['30% reduced sugar', 'Source of fibre', 'Lacto-ovo-vegetarian', 'No added preservatives']
      },
      {
        id: 85,
        cardProportion: 127.5,
        imagePath: 'vanilla_shortbread.png',
        imagePathThumbnail: 'vanilla_shortbread.jpg',
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
    sideDrawerId: 2,
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
      return _state.productCards[_state.sideDrawerId - 1];
    },
    videoId(_state) {
      return _state.videoId;
    }
  },
  actions: {

  }
})
