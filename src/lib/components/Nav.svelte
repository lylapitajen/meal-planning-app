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

  const activeClass = 'bg-gray-100 text-fg-accent';
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
  class="flex gap-2 items-center p-1 rounded-full bg-bg-default shadow-sm border border-border-default fixed bottom-4 left-1/2 -translate-x-1/2"
>
  {#each navItems as { icon, href }}
    {@const Icon = icon}
    <a {href} class="p-4 rounded-full {checkActive(href)}">
      <Icon size={22} />
    </a>
  {/each}
</nav>
