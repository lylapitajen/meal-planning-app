<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { ArrowLeft } from '@lucide/svelte';
  import { goto } from '$app/navigation';
  import Chip from '$lib/components/Chip.svelte';

  let formData = $state({ title: '', ingredients: [], notes: '' });
</script>

<div class="main-container">
  <Button variant="secondary" iconOnly onclick={() => goto('/recipes')}><ArrowLeft /></Button>
  <h1>Add a recipe</h1>
  <form>
    <div class="flex flex-col gap-1">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" />
    </div>
    <div class="flex flex-col gap-1">
      <label for="title">Protein</label>
      <select id="protein" name="protein"></select>
    </div>
    <Button type="submit" class="mt-auto">Add recipe</Button>
  </form>
  <h2>Ingredients</h2>
  <Chip isRemovable>Chicken thighs</Chip>
</div>
