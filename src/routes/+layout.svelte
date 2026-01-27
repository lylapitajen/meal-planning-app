<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import Nav from '$lib/components/Nav.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="md: max-w-3xl mx-auto bg-bg-default min-h-screen text-fg-default">
  <Nav></Nav>
  <main class="pb-24">
    {@render children()}
  </main>
</div>
