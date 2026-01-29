import type { Ingredient } from './types';

export const displayIngredientsInfo = (ingredients: Ingredient[], count: boolean = true): string => {
  if (count) {
    return `${ingredients.length} ingredient${ingredients.length > 1 ? 's' : ''}`;
  }

  return ingredients.map((ing) => ing.name).join(', ');
};
