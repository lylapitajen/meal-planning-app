<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { omit } from 'lodash-es';

  type Props = HTMLButtonAttributes & {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'xs' | 'sm' | 'lg';
    iconOnly?: boolean;
    className?: string;
    destructive?: boolean;
  };

  let {
    variant = 'primary',
    size,
    className,
    iconOnly = false,
    destructive = false,
    children,
    ...props
  }: Props = $props();
  let allClasses = $derived.by(() => {
    return `${className} ${variant} ${size || ''} ${iconOnly ? 'icon-only' : ''} ${destructive && 'destructive'}`.trim();
  });
</script>

<button aria-label="button" class={allClasses} {...omit(props, ['class'])}>{@render children?.()}</button>

<style>
  @reference "../../app.css";

  button {
    @apply border border-neutral-900 py-2 px-4 inline-flex gap-1 font-medium justify-center items-center cursor-pointer [&>svg]:size-3.5;
  }
  /* TYPE VARIANTS */

  .primary {
    @apply bg-brand-accent text-fg-default;
  }
  .primary.destructive {
    @apply bg-bg-negative text-fg-default;
  }

  .secondary {
    @apply text-fg-default bg-brand-accent-light;
  }
  .secondary.destructive {
    @apply bg-bg-negative-light text-fg-default;
  }

  .tertiary {
    @apply bg-white text-brand-accent border-none!;
  }
  .tertiary.destructive {
    @apply text-fg-negative;
  }
  /* SIZE VARIANTS */
  .icon-only {
    @apply size-10 p-0;
  }
  .xs.icon-only {
    @apply size-6 p-0;
  }
  .sm {
    @apply py-1.5 px-3.5 text-sm;
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
