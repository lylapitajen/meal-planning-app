import strapiAxios from '$lib/api/strapiAxios.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Ingredient } from '$lib/types';

const getIngredientsSearch = async (filters: any): Promise<Ingredient[]> => {
  try {
    const res = await strapiAxios.get('/ingredients', {
      params: {
        filters,
        populate: {
          ingredientType: true,
        },
      },
    });
    return res.data.data;
  } catch (err) {
    console.log('Failed to fetch ingredients', err);
    throw err;
  }
};

export const GET: RequestHandler = async ({ url }) => {
  const query = url.searchParams.get('q');

  if (!query || query.length < 3) {
    return json([]);
  }

  try {
    // Create search filter for Strapi
    const searchFilter = {
      name: {
        $containsi: query,
      },
    };

    const results = await getIngredientsSearch(searchFilter);
    return json(results);
  } catch (error) {
    console.error('Search failed:', error);
    return json({ error: 'Search failed' }, { status: 500 });
  }
};
