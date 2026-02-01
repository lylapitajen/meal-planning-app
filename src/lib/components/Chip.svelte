<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from './Button.svelte';
  import { X } from '@lucide/svelte';

  type Props = {
    isRemovable: boolean;
    children?: Snippet;
  };
  let { isRemovable = true, children }: Props = $props();
</script>

<span
  class="inline-flex gap-0.5 items-center text-sm rounded-full border border-border-default px-2 py-1 [&>svg]:size-3"
>
  {@render children?.()}
  {#if isRemovable}
    <Button variant="tertiary" iconOnly size="xs"><X /></Button>
  {/if}
</span>
