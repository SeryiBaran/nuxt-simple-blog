<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});

const route = useRoute();

const { data } = await useAsyncData("post", () =>
  queryContent(route.path).findOne()
);
</script>

<template>
  <NuxtLayout>
    <h1 class="text-h3 mb-4">{{ data.title }}</h1>

    <p class="text-subtitle-2">{{ formatDate(data.date) }}</p>

    <div class="post mt-4">
      <ContentDoc />
    </div>
  </NuxtLayout>
</template>
