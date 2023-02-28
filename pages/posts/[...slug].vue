<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});
</script>

<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-h3 mb-4">{{ doc.title }}</h1>

      <p class="text-subtitle-2">{{ formatDate(doc.date) }}</p>

      <div class="post mt-4">
        <ContentRenderer :value="doc" />
      </div>

      <template #not-found>
        <h1 class="text-h3 mb-4">Пост не найден!</h1>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
