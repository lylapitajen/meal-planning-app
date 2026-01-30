import { recipes } from '$lib/data/recipes';
import type { PageServerLoad } from './$types';
import { getAllRecipes } from '$lib/api/recipes.server';

export const load: PageServerLoad = async () => {
  return { recipes: await getAllRecipes() };
};
