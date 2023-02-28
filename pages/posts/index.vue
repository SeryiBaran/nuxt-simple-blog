<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});

const { data } = await useAsyncData("posts", () => queryContent("posts").find());

const formatDate = (date) =>
  new Date(date).toLocaleDateString(["ru-ru"], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>

<template>
  <NuxtLayout>
    <h1 class="text-h3 mb-4">Посты</h1>

    <v-list>
      <v-list-item
        v-for="post in data"
        :key="post.title"
        :title="post.title"
        :subtitle="`${formatDate(post.date)} | ${post.description}`"
        :to="post._path"
      >
      </v-list-item>
    </v-list>
  </NuxtLayout>
</template>
