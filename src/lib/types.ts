export type IngredientType = 'protein' | 'carbs' | 'produce' | 'seasoning' | 'dairy' | 'other';

export type Ingredient = {
  id: number;
  name: string;
  quantity?: string;
  ingredientType?: {
    name: IngredientType;
    icon?: string;
    color?: string;
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
