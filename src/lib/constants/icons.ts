import { Ham, Wheat, Carrot, Milk, Utensils } from '@lucide/svelte';

// Used in ingredientType.icon - stored in Strapi
export const ICONS: Record<string, typeof Ham> = {
  //ingredientType === 'protein'
  ham: Ham,
  //ingredientType === 'carb'
  wheat: Wheat,
  //ingredientType === 'produce'
  carrot: Carrot,
  //ingredientType === 'dairy'
  milk: Milk,
  utensils: Utensils,
};
