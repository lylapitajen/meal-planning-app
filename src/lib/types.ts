export type Ingredient = {
  name: string;
  quantity?: string;
  type?: 'meat' | 'vegetable' | 'carbs' | 'dairy' | 'seasoning' | 'other';
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
