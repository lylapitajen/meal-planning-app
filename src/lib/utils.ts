import type { Ingredient } from './types';
import { PUBLIC_STRAPI_URL } from '$env/static/public';

export const displayIngredientsInfo = (ingredients: Ingredient[], count: boolean = true): string => {
  if (count) {
    return `${ingredients.length} ingredient${ingredients.length > 1 ? 's' : ''}`;
  }

  return ingredients.map((ing) => ing.name).join(', ');
};

export function strapiImageUrl({ url }: { url: string }) {
  if (url.startsWith('/')) {
    return `${PUBLIC_STRAPI_URL}${url}`;
  }
  return url;
}
