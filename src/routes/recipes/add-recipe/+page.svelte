<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { ArrowLeft } from '@lucide/svelte';
  import { goto } from '$app/navigation';
  import Chip from '$lib/components/Chip.svelte';
  import IngredientCard from '$lib/components/IngredientCard.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';

  let formData = $state({ title: '', ingredients: [], notes: '' });
  const ingredient = {
    id: 1,
    name: 'Whole chicken',
    type: 'protein',
    icon: 'ham',
  };
</script>

<div class="main-container">
  <Button variant="secondary" iconOnly onclick={() => goto('/recipes')}><ArrowLeft /></Button>
  <h1>Add a recipe</h1>
  <div class="flex flex-col gap-1">
    <label for="title">Title</label>
    <input type="text" id="title" name="title" />
  </div>
  <h2>Ingredients</h2>
  <SearchBar searchEndPoint="ingredients" />
  <IngredientCard {ingredient} />
  <Button type="submit" class="mt-auto">Add recipe</Button>
</div>
