<script lang="ts">
  import type { Recipe } from '$lib/types';
  import { displayIngredientsInfo } from '$lib/utils';

  let { id, title, ingredients, images, slug } = $props();
</script>

<a href="/recipes/{slug}" class="flex gap-4 p-4 rounded-lg border border-border-default items-center shadow-2xs">
  <img src={images?.[0]} alt="Recipe" class="h-16! w-16! rounded object-cover" />
  <div>
    <h2 class="text-lg text-fg-default font-semibold">{title}</h2>
    <p class="text-fg-tertiary">{displayIngredientsInfo(ingredients, true)}</p>
  </div>
</a>
