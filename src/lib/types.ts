import type { EnumDeclaration } from 'typescript';

export type IngredientType = 'protein' | 'carbs' | 'produce' | 'seasoning' | 'dairy' | 'other';

export type Ingredient = {
  id: number;
  name: string;
  ingredientType?: {
    name: IngredientType;
    icon?: string;
    color?: string;
  };
};

export type RecipeIngredient = {
  id: number;
  quantity: number;
  ingredient: Ingredient;
  unit: string;
  recipe: [];
};

export type Recipe = {
  id: number;
  title: string;
  slug: string;
  images?: Array<{
    url: string;
    alternativeText: string;
  }>;
  recipeIngredients: RecipeIngredient[];
  notes?: string;
};
