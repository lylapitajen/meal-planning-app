import { recipes } from '$lib/data/recipes.js';
import { error } from '@sveltejs/kit';
import { getRecipe } from '$lib/api/recipes.server.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const recipe = await getRecipe(slug);
  if (!recipe) error(404);
  return { recipe };
};
