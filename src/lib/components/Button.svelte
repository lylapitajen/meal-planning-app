<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { omit } from 'lodash-es';

  type Props = HTMLButtonAttributes & {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'lg';
    iconOnly?: boolean;
    className?: string;
    destructive?: boolean;
  };

  // type ButtonProps = {
  //   disabled?: boolean;
  //   onclick?: Function;
  //   children: any;
  //   type: HTMLButtonElement['type'];
  // };

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
    @apply py-2 px-4 rounded-full inline-flex gap-1 font-medium justify-center items-center cursor-pointer [&>svg]:size-3.5;
  }
  /* COLOR VARIANTS */

  .primary {
    @apply bg-bg-accent text-fg-onAccent;
  }
  .primary.destructive {
    @apply bg-bg-negative text-fg-onNegative;
  }

  .secondary {
    @apply text-fg-accent bg-bg-accent-light;
  }
  .secondary.destructive {
    @apply bg-bg-negative-light text-fg-negative;
  }

  .tertiary {
    @apply bg-white text-fg-accent;
  }
  .tertiary.destructive {
    @apply text-fg-negative;
  }
  /* SIZE VARIANTS */
  .icon-only {
    @apply size-10 p-0;
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
