import strapiAxios from './strapiAxios.server';
import type { Recipe } from '$lib/types';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  try {
    const res = await strapiAxios.get('/recipes', {
      params: {
        populate: {
          ingredients: true,
          images: true,
        },
      },
    });
    return res.data.data;
  } catch (err) {
    console.log('Failed to fetch recipes', err);
    throw err;
  }
};

export const getRecipe = async (slug: string): Promise<Recipe> => {
  try {
    const res = await strapiAxios.get('/recipes', {
      params: {
        filters: {
          slug: slug,
        },
        populate: {
          ingredients: true,
          images: true,
        },
      },
    });
    return res.data.data[0];
  } catch (err) {
    console.log('Failed to fetch recipes', err);
    throw err;
  }
};
