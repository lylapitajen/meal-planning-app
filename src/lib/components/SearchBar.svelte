<script lang="ts">
  import { Search } from '@lucide/svelte';
  import axios from 'axios';
  import type { Ingredient } from '$lib/types';

  type Props = {
    searchEndPoint: string;
    onSelect?: (ingredient: Ingredient) => void;
  };

  let { searchEndPoint, onSelect }: Props = $props();

  let searchValue = $state('');
  let loading = $state(false);
  let results = $state<Ingredient[]>([]);
  let searchTimeout: number;

  function handleSelect(ingredient: Ingredient) {
    results = [];
    searchValue = '';

    onSelect?.(ingredient);
  }

  $effect(() => {
    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Reset results if search is too short
    if (searchValue.length < 3) {
      results = [];
      loading = false;
      return;
    }

    loading = true;

    searchTimeout = setTimeout(async () => {
      try {
        const response = await axios.get(`/api/${searchEndPoint}`, {
          params: {
            q: searchValue,
          },
        });
        results = response.data;
      } catch (error) {
        console.error('Search error:', error);
        results = [];
      } finally {
        loading = false;
      }
    }, 500);
  });
</script>

<div class="relative">
  <div class="flex gap-1 items-center justify-start border border-border-default py-2 px-3 rounded-sm">
    <Search class="size-4 text-fg-tertiary" />
    <input class="border-0 outline-0 w-full p-0" type="text" bind:value={searchValue} />
  </div>
  {#if searchValue.length >= 3}
    <!--TODO:Create a reusable menu component -->
    <div
      class="absolute flex flex-col p-1 mt-1 rounded-sm border border-border-default shadow-sm w-full bg-bg-default z-10 max-h-64 overflow-y-auto"
    >
      {#if loading}
        <span class="py-2 px-3 text-fg-tertiary italic">Searching...</span>
      {:else if results.length > 0}
        {#each results as ingredient}
          <button
            class="py-2 px-3 flex gap-2 items-center rounded-sm hover:bg-gray-100 text-left w-full"
            onclick={() => handleSelect(ingredient)}
          >
            <span class="font-medium">{ingredient.name}</span>
          </button>
        {/each}
      {:else}
        <span class="py-2 px-3 text-fg-tertiary">Create '{searchValue}'</span>
      {/if}
    </div>
  {/if}
</div>
