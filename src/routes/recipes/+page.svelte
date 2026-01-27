<script lang="ts">
  import type { Recipe } from "$lib/types";
  import RecipeCard from "$lib/components/RecipeCard.svelte";

  let { data } = $props();

  $inspect(data.recipes);
</script>

<h1>Recipes</h1>
<div class="flex flex-col gap-2">
  {#each data.recipes as recipe}
    <RecipeCard {...recipe} />
  {/each}
</div>
