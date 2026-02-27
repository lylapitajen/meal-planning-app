export type IngredientType = 'protein' | 'carbs' | 'produce' | 'seasoning' | 'dairy' | 'other';

export type Ingredient = {
  id: number;
  name: string;
  quantity?: string;
  color?: string;
  icon: string;
  ingredientType?: {
    name: IngredientType;
  };
};

export type Recipe = {
  id: number;
  title: string;
  slug: string;
  images?: Array<{
    url: string;
    alternativeText: string;
  }>;
  ingredients: Ingredient[];
  notes?: string;
};
