<script lang="ts">
  import { page } from '$app/state';
  import { Calendar, BookHeart, ShoppingCart } from '@lucide/svelte';

  const navItems = [
    {
      name: 'Weekly meal plan',
      icon: Calendar,
      href: '/',
    },
    {
      name: 'Recipes',
      icon: BookHeart,
      href: '/recipes',
    },
    {
      name: 'Shopping list',
      icon: ShoppingCart,
      href: '/shopping-list',
    },
  ];
  $inspect(page);

  const activeClass = 'bg-brand-accent-light text-fg-default border border-border-default';
  const inactiveClass = 'text-fg-tertiary';

  const checkActive = (href: string) => {
    if (href === '/') {
      return page.url.pathname === '/' ? activeClass : inactiveClass;
    }

    if (page.url.pathname.startsWith(href)) {
      return activeClass;
    }
    return inactiveClass;
  };
</script>

<nav
  class="flex gap-2 items-center p-1 bg-white shadow-harsh border border-border-default fixed bottom-3 left-1/2 -translate-x-1/2"
>
  {#each navItems as { icon, href }}
    {@const Icon = icon}
    <a {href} class="p-4 {checkActive(href)}">
      <Icon size={22} />
    </a>
  {/each}
</nav>
