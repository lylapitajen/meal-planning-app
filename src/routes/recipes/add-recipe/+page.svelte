<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { ArrowLeft } from '@lucide/svelte';
  import { goto } from '$app/navigation';
  import IngredientCard from '$lib/components/IngredientCard.svelte';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import type { Ingredient } from '$lib/types';
  import axios from 'axios';

  let recipeData = $state({
    title: '',
    ingredients: [] as Ingredient[],
    notes: '',
  });

  let isSubmitting = $state(false);
  let submitError = $state<string | null>(null);

  const handleIngredientSelect = (ingredient: Ingredient) => {
    if (!recipeData.ingredients.find((ing) => ing.id === ingredient.id)) {
      recipeData.ingredients = [...recipeData.ingredients, ingredient];
    }
  };

  const handleIngredientRemove = (ingredient: Ingredient) => {
    recipeData.ingredients = recipeData.ingredients.filter((ing) => ing.id !== ingredient.id);
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    // Reset error state
    submitError = null;

    // Validate form
    if (!recipeData.title.trim()) {
      submitError = 'Recipe title is required';
      return;
    }

    if (recipeData.ingredients.length === 0) {
      submitError = 'At least one ingredient is required';
      return;
    }

    try {
      isSubmitting = true;

      const response = await axios.post('/api/recipes', {
        title: recipeData.title,
        ingredients: recipeData.ingredients,
        notes: recipeData.notes,
      });

      if (response.status === 201) {
        // Successfully created recipe - redirect to recipe list
        await goto('/recipes');
      }
    } catch (error: any) {
      console.error('Failed to create recipe:', error);
      submitError = error.response?.data?.error || 'Failed to create recipe. Please try again.';
    } finally {
      isSubmitting = false;
    }
  };

  $inspect(recipeData.ingredients);
</script>

<div class="main-container">
  <Button variant="secondary" iconOnly onclick={() => goto('/recipes')}><ArrowLeft /></Button>
  <h1>Add a recipe</h1>

  <form onsubmit={handleSubmit} class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        bind:value={recipeData.title}
        required
        class="border border-border-default rounded-sm p-2"
        placeholder="Enter recipe title..."
      />
    </div>

    <div>
      <h2>Ingredients</h2>
      <SearchBar searchEndPoint="ingredients" onSelect={handleIngredientSelect} />
      <div class="flex flex-col gap-2 mt-2">
        {#each recipeData.ingredients as ingredient}
          <IngredientCard {ingredient} onRemove={handleIngredientRemove} />
        {/each}

        {#if recipeData.ingredients.length === 0}
          <p class="text-fg-tertiary italic text-sm">No ingredients added yet. Search and select ingredients above.</p>
        {/if}
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label for="notes">Notes (optional)</label>
      <textarea
        id="notes"
        name="notes"
        bind:value={recipeData.notes}
        rows="4"
        class="border border-border-default rounded-sm p-2"
        placeholder="Add any cooking instructions or notes..."
      ></textarea>
    </div>

    {#if submitError}
      <div class="bg-red-50 border border-red-200 text-red-800 p-3 rounded-sm">
        {submitError}
      </div>
    {/if}

    <Button
      type="submit"
      class="mt-auto"
      disabled={isSubmitting || !recipeData.title.trim() || recipeData.ingredients.length === 0}
    >
      {isSubmitting ? 'Creating Recipe...' : 'Add Recipe'}
    </Button>
  </form>
</div>
