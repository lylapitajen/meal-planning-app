import strapiAxios from '$lib/api/strapiAxios.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Recipe } from '$lib/types';

// Helper function to create a slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Create a new recipe
const createRecipe = async (recipeData: {
  title: string;
  ingredients: number[]; // Array of ingredient IDs
  notes?: string;
}): Promise<Recipe> => {
  try {
    const slug = createSlug(recipeData.title);

    const res = await strapiAxios.post('/recipes', {
      data: {
        title: recipeData.title,
        slug: slug,
        notes: recipeData.notes,
        ingredients: recipeData.ingredients, // Strapi will handle the relation
        publishedAt: new Date().toISOString(),
      },
    });

    return res.data.data;
  } catch (err: any) {
    console.log('Failed to create recipe', err.response?.data || err.message);
    throw err;
  }
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const { title, ingredients, notes } = body;

    // Validate required fields
    if (!title || !title.trim()) {
      return json({ error: 'Recipe title is required' }, { status: 400 });
    }

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return json({ error: 'At least one ingredient is required' }, { status: 400 });
    }

    // Extract ingredient IDs from ingredient objects
    const ingredientIds = ingredients.map((ingredient: any) => ingredient.id);

    const recipeData = {
      title: title.trim(),
      ingredients: ingredientIds,
      notes: notes?.trim() || '',
    };

    const newRecipe = await createRecipe(recipeData);
    return json(newRecipe, { status: 201 });
  } catch (error: any) {
    console.error('Recipe creation failed:', error.response?.data || error.message);
    return json(
      {
        error: 'Failed to create recipe',
        details: error.response?.data || error.message,
      },
      { status: 500 }
    );
  }
};
