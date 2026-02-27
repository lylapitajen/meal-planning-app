<script lang="ts">
  import type { Ingredient } from '$lib/types';
  import { ICONS } from '$lib/constants/icons';
  import Button from './Button.svelte';
  import { X } from '@lucide/svelte';

  type Props = {
    ingredient: Ingredient;
    onRemove?: (ingredient: Ingredient) => void;
  };

  let { ingredient, onRemove }: Props = $props();

  let Icon = $derived(ICONS[ingredient?.ingredientType?.icon || 'other']);

  function handleRemove() {
    onRemove?.(ingredient);
  }
</script>

<div class="flex justify-between items-center p-2 border border-border-default rounded-sm">
  <div class="flex gap-2 items-center">
    <div class="rounded-sm p-2 bg-gray-50 text-gray-800">
      <Icon class="size-4" />
    </div>
    <span>
      {ingredient.name}
    </span>
  </div>
  <Button variant="tertiary" iconOnly size="xs" onclick={handleRemove}><X /></Button>
</div>
