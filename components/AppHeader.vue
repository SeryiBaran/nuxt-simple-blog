<script setup>
import { useDrawerStore } from "@/stores/drawer.ts";

const drawerStore = useDrawerStore();
</script>

<template>
  <v-app-bar :elevation="2" color="primary">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawerStore.toggle()"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Блог</v-app-bar-title>
  </v-app-bar>
</template>
