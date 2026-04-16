<script lang="ts">
  import type { Recipe } from '$lib/types';
  import { displayIngredientsInfo } from '$lib/utils';
  import { strapiImageUrl } from '$lib/utils';
  import { CookingPot } from '@lucide/svelte';
  import FallbackImage from './FallbackImage.svelte';

  let { id, title, ingredients, images, slug }: Recipe = $props();
  let thumbnail = $derived(images?.[0]);
</script>

<a href="/recipes/{slug}" class="flex items-center gap-4 pb-6 border-b border-neutral-900 items-centerß">
  {#if thumbnail}
    <img src={strapiImageUrl(thumbnail)} alt="Recipe" class="h-20! w-20! border border-neutral-900 object-cover" />
  {:else}
    <FallbackImage className="h-20 w-20" />
  {/if}

  <div>
    <h2 class="text-lg text-fg-default font-semibold">{title}</h2>
    <p class="text-fg-tertiary">{displayIngredientsInfo(ingredients, true)}</p>
  </div>
</a>
