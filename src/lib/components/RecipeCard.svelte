<script lang="ts">
  import type { Recipe } from '$lib/types';
  import { displayIngredientsInfo } from '$lib/utils';
  import { strapiImageUrl } from '$lib/utils';

  let { id, title, ingredients, images, slug }: Recipe = $props();
  let thumbnail = $derived(images?.[0]);
</script>

<a href="/recipes/{slug}" class="flex gap-4 p-4 rounded-lg border border-border-default items-center shadow-2xs">
  {#if thumbnail}
    <img src={strapiImageUrl(thumbnail)} alt="Recipe" class="h-16! w-16! rounded object-cover" />
  {/if}
  <div>
    <h2 class="text-lg text-fg-default font-semibold">{title}</h2>
    <p class="text-fg-tertiary">{displayIngredientsInfo(ingredients, true)}</p>
  </div>
</a>
