<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = HTMLButtonAttributes & {
    variant: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'lg';
    iconOnly?: boolean;
  };

  // type ButtonProps = {
  //   disabled?: boolean;
  //   onclick?: Function;
  //   children: any;
  //   type: HTMLButtonElement['type'];
  // };

  let { variant = 'primary', size, iconOnly = false, children, ...props }: Props = $props();
  let className = $derived.by(() => {
    return `${variant} ${size || ''} ${iconOnly ? 'icon-only' : ''}`.trim();
  });
</script>

<button aria-label="button" class={className} {...props}>{@render children?.()}</button>

<style>
  @reference "../../app.css";

  button {
    @apply py-2 px-4 rounded-lg inline-flex gap-1 font-medium justify-center items-center cursor-pointer [&>svg]:size-3.5;
  }
  .icon-only {
    @apply size-10 p-0;
  }

  .primary {
    @apply bg-bg-accent text-fg-onAccent;
  }

  .secondary {
    @apply text-fg-accent bg-bg-accent-light;
  }

  .tertiary {
    @apply bg-white text-fg-accent;
  }
  .sm {
    @apply py-1.5 px-3 text-sm;
  }
  .sm.icon-only {
    @apply size-8 p-0;
  }

  .lg {
    @apply py-2.5 px-5 [&>svg]:size-4.5;
  }
  .lg.icon-only {
    @apply size-11 p-0;
  }
</style>
