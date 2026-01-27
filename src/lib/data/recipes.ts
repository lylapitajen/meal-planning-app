import roast_chicken from '$lib/assets/recipe-images/roast-chicken.avif';
import steak from '$lib/assets/recipe-images/steak.avif';
import pad_kra_pao from '$lib/assets/recipe-images/pad-kra-pao.jpg';

export const recipes = [
  {
    id: 1,
    title: 'Roast spatchcock chicken with coriander, red chilli and charred limes',
    slug: 'roast-chicken',
    ingredients: [
      { name: 'Coriander', quantity: '½ x 100g pack', type: 'vegetable' },
      { name: 'Mint', quantity: '25g pack', type: 'vegetable' },
      { name: 'Garlic', quantity: '6 cloves', type: 'vegetable' },
      { name: 'Fresh root ginger', quantity: '30g', type: 'vegetable' },
      { name: 'Red chillies', quantity: '2', type: 'vegetable' },
      { name: 'Limes', quantity: '5', type: 'vegetable' },
      { name: 'Soy sauce', quantity: '1 tbsp', type: 'seasoning' },
      { name: 'Sunflower oil', quantity: '2 tbsp', type: 'other' },
      { name: 'Whole chicken', quantity: '1 large', type: 'meat' },
      { name: 'Coconut cream', quantity: '160ml', type: 'other' },
      { name: 'Chicken stock', quantity: '150ml', type: 'other' },
    ],
    images: [roast_chicken],
    notes: 'Zest and juice of 3 limes, 2 halved to roast',
  },
  {
    id: 2,
    title: 'Pad Kra Pao (Thai basil chicken)',
    slug: 'pad-kra-pao',
    ingredients: [
      { name: 'Vegetable oil', quantity: '2 tbsp', type: 'other' },
      { name: 'Garlic', quantity: '4 cloves', type: 'vegetable' },
      { name: 'Red bird’s-eye chillies', quantity: '2-3', type: 'vegetable' },
      { name: 'Minced beef', quantity: '500g', type: 'meat' },
      { name: 'Soy sauce', quantity: '1 tbsp', type: 'seasoning' },
      { name: 'Oyster sauce', quantity: '1 tbsp', type: 'seasoning' },
      { name: 'Fish sauce', quantity: '1 tbsp', type: 'seasoning' },
      { name: 'Sugar', quantity: '1 tsp', type: 'other' },
      { name: 'Thai holy basil leaves', quantity: 'a large handful', type: 'vegetable' },
      { name: 'Rice', quantity: 'to serve', type: 'carbs' },
      { name: 'Fried eggs', quantity: '1-2', type: 'other' },
    ],
    images: [pad_kra_pao],
  },
];
