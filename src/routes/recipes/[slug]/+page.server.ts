import { recipes } from '$lib/data/recipes.js';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
  const { slug } = params;
  const recipe = recipes.find((recipe) => recipe.slug === slug);
  if (!recipe) error(404);
  return { recipe };
};
