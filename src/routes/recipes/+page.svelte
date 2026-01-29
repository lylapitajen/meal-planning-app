<script lang="ts">
  import type { Recipe } from '$lib/types';
  import RecipeCard from '$lib/components/RecipeCard.svelte';
  import Button from '$lib/components/Button.svelte';
  import { Plus } from '@lucide/svelte';

  let { data } = $props();
</script>

<div class="main-container">
  <div class="flex justify-between items-center">
    <h1>Recipes</h1>
    <Button><Plus />New recipe</Button>
  </div>
  <div class="flex flex-col gap-2">
    {#each data.recipes as recipe}
      <RecipeCard {...recipe} />
    {/each}
  </div>
</div>
