import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Ingredient } from './types';
import { PUBLIC_STRAPI_URL } from '$env/static/public';

// SVELTE-SHADCN/TW UTILS

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

//CUSTOM UTILS
export const displayIngredientsInfo = (ingredients: Ingredient[], count: boolean = true): string => {
  if (count) {
    return `${ingredients.length} ingredient${ingredients.length > 1 ? 's' : ''}`;
  }

  return ingredients.map((ing) => ing.name).join(', ');
};

export function strapiImageUrl({ url }: { url: string }) {
  if (url.startsWith('/')) {
    return `${PUBLIC_STRAPI_URL}${url}`;
  }
  return url;
}
