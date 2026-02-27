import { Ham, Wheat, Carrot, Milk, Utensils } from '@lucide/svelte';

// Used in ingredientType.icon - stored in Strapi
export const ICONS: Record<string, typeof Ham> = {
  ham: Ham,
  wheat: Wheat,
  carrot: Carrot,
  milk: Milk,
  utensils: Utensils,
  other: Utensils,
};
