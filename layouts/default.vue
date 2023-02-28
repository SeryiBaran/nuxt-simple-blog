<script setup lang="ts">
import { useDrawerStore } from "@/stores/drawer.ts";

const drawerStore = useDrawerStore();

const links = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "О сайте",
    href: "/about",
  },
  {
    title: "Посты",
    href: "/posts",
  },
];
</script>

<template>
  <v-app>
    <AppHeader />
    <v-navigation-drawer
      v-model="drawerStore.isOpened"
      location="left"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :to="link.href"
          :key="link.href"
          active-color="primary"
        >
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-grey-lighten-3">
      <v-container class="fill-height">
        <v-row class="fill-height">
          <v-col>
            <v-sheet rounded="lg" elevation="3" class="pa-6 fill-height">
              <slot />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
