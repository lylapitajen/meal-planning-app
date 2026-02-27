<script lang="ts">
  import type { Ingredient } from '$lib/types';
  import { ICONS } from '$lib/constants/icons';
  import Button from './Button.svelte';
  import { X } from '@lucide/svelte';
  let { ingredient }: { ingredient: Ingredient } = $props();

  let Icon = $derived(ICONS[ingredient.icon || 'default']);
</script>

<div class="flex justify-between items-center p-2 border border-border-default rounded-sm">
  <div class="flex gap-2 items-center">
    <div class="rounded-sm p-2 bg-red-50 text-red-800">
      <Icon class="size-4" />
    </div>
    <span>
      {ingredient.name}
    </span>
  </div>
  <Button variant="tertiary" iconOnly size="xs"><X /></Button>
</div>
