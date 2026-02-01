<script lang="ts">
  import type { Recipe } from '$lib/types';
  import RecipeCard from '$lib/components/RecipeCard.svelte';
  import Button from '$lib/components/Button.svelte';
  import { Plus } from '@lucide/svelte';
  import { goto } from '$app/navigation';

  let { data } = $props();
  $inspect(data);
</script>

<div class="main-container">
  <div class="flex justify-between items-center">
    <h1>Recipes</h1>
    <Button onclick={() => goto('/recipes/add-recipe')}><Plus />New recipe</Button>
  </div>
  <div class="flex flex-col gap-2">
    {#each data.recipes as recipe}
      <RecipeCard {...recipe} />
    {/each}
  </div>
</div>
