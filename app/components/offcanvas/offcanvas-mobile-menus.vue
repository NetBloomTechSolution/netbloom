<template>
  <ul>
    <li
      v-for="menuItem in menu_data"
      :key="menuItem.id"
      :class="`has-dropdown ${activeMenu === menuItem.id ? 'active' : ''}`"
    >
      <NuxtLink
        :to="menuItem.link"
        @click.prevent="toggleMenu(menuItem.id)"
      >
        {{ menuItem.title }}
      </NuxtLink>

      <div
        v-if="menuItem.megaMenu && menuItem.submenus"
        :class="`tp-megamenu-wrapper mega-menu ${isDark ? 'megamenu-black-bg' : 'megamenu-white-bg'}`"
        :style="{ display: activeMenu === menuItem.id ? 'block' : 'none' }"
      >
        <div class="row gx-0">
          <div
            v-for="(column, colIndex) in getColumns(menuItem).columns"
            :key="colIndex"
            :class="getColumns(menuItem).image ? 'col-xl-2' : 'col-xl-3'"
          >
            <div class="tp-megamenu-list">
              <h4 class="tp-megamenu-title">{{ column.title }}</h4>
              <ul>
                <li
                  v-for="(link, linkIndex) in column.links"
                  :key="linkIndex"
                >
                  <NuxtLink :to="link.link">
                    {{ link.title }}
                    <span
                      v-if="link.tag"
                      :class="getTagClass(link.tag)"
                    >
                      {{ link.tag }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ul
        v-else-if="menuItem.submenus"
        class="tp-submenu submenu"
        :style="{ display: activeMenu === menuItem.id ? 'block' : 'none' }"
      >
        <li
          v-for="(subItem, subIndex) in menuItem.submenus"
          :key="subIndex"
          :class="
            subItem.submenus
              ? `menu-item-has-children ${activeSubmenu === subIndex ? 'active' : ''}`
              : ''
          "
        >
          <NuxtLink
            :to="subItem.link"
            @click="handleSubmenuClick($event, subItem, subIndex)"
          >
            {{ subItem.title }}
          </NuxtLink>

          <ul
            v-if="subItem.submenus"
            class="tp-submenu submenu"
            :style="{ display: activeSubmenu === subIndex ? 'block' : 'none' }"
          >
            <li
              v-for="(nestedItem, nestedIndex) in subItem.submenus"
              :key="nestedIndex"
            >
              <NuxtLink :to="nestedItem.link">
                {{ nestedItem.title }}
              </NuxtLink>
            </li>
          </ul>

          <button
            v-if="subItem.submenus"
            class="tp-menu-close"
            :class="{ active: activeSubmenu === subIndex }"
            @click="toggleSubmenu(subIndex)"
          >
            <i class="fa-solid fa-plus" />
          </button>
        </li>
      </ul>

      <button
        v-if="menuItem.hasDropdown || menuItem.submenus || menuItem.megaMenu"
        class="tp-menu-close"
        :class="{ active: activeMenu === menuItem.id }"
        @click="toggleMenu(menuItem.id)"
      >
        <i class="fa-solid fa-plus" />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menu_data from '~/data/menu-data';
import type { MenuItem, Submenu, MegaMenuItem } from '~/types/menu-d-t';

const { isDark } = useIsDark();
const activeMenu = ref<number | null>(null);
const activeSubmenu = ref<number | null>(null);

const toggleMenu = (id: number): void => {
  activeMenu.value = activeMenu.value === id ? null : id;
};

const toggleSubmenu = (index: number): void => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};

const handleSubmenuClick = (e: Event, subItem: Submenu, index: number): void => {
  if (subItem.submenus) {
    e.preventDefault();
    toggleSubmenu(index);
  }
};

interface Columns {
  columns: { title: string; links: MegaMenuItem[] }[];
  image?: { src: string; alt: string };
}

const getColumns = (item: MenuItem): Columns => {
  let image: { src: string; alt: string } | null = null;
  const columns = (item.submenus || [])
    .filter((sub: Submenu) => {
      if (sub.isThumb) {
        image = { src: sub.thumbSrc || '', alt: sub.thumbAlt || '' };
        return false;
      }
      return true;
    })
    .map((sub: Submenu) => ({
      title: sub.title || '',
      links: sub.megaMenu || [],
    }));
  return { columns, image: image ?? undefined };
};

const getTagClass = (tag: string): string => {
  const tagMap: Record<string, string> = {
    Popular: 'popular-tag',
    Trending: 'trending-tag',
    Hot: 'hot-tag',
  };
  return tagMap[tag] || '';
};
</script>