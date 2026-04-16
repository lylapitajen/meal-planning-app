<script lang="ts">
  import { CookingPot } from '@lucide/svelte';

  let { className }: { className: string } = $props();
</script>

<div class="flex items-center justify-center bg-green-100 {className}"><CookingPot /></div>
