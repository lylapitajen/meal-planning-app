<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import { ArrowLeft, Pencil, Plus, Trash } from '@lucide/svelte';
  let { data } = $props();
  let { title, ingredients, images, notes } = $derived(data.recipe);
  $inspect(page);
</script>

<div class="relative">
  <Button variant="secondary" className="absolute top-5 left-5" iconOnly onclick={() => goto('/recipes')}>
    <ArrowLeft />
  </Button>
  <img src={images[0]} alt={title} class="rounded-b-xl h-72 w-full object-cover" />
  <!-- Recipe info -->
  <div
    class="p-3 flex flex-col gap-1 items-center bg-bg-default border border-border-default rounded-md shadow-sm w-[90%] mx-auto absolute -bottom-16 left-1/2 -translate-x-1/2"
  >
    <h1 class="text-center">{title}</h1>
    <div class="flex gap-2 items-center">
      <p class="text-fg-tertiary">{ingredients.length} ingredients</p>
    </div>
  </div>
</div>
<!-- Ingredients list -->
<div class="main-container">
  <div class="flex flex-col gap-2 mt-12">
    <h2 class="text-lg font-semibold">Ingredients</h2>
    <ul class="flex flex-col gap-2 text-fg-secondary">
      {#each ingredients as ingredient}
        <li class="flex gap-0">
          <span class="font-medium">{ingredient.name}</span>
          <span class="text-fg-tertiary">, {ingredient.quantity}</span>
        </li>
      {/each}
    </ul>
    <div class="flex flex-col gap-2 mt-4">
      <Button variant="secondary"><Pencil />Edit</Button>
      <Button variant="primary" destructive><Trash />Delete</Button>
    </div>
  </div>
</div>
