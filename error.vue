<script setup lang="ts">
useHead({
  title: '404'
})
</script>

<template>
  <AppContainer>
    <div class="flex flex-col items-center gap-3 mx-auto max-w-4xl mt-10">
      <h2 class="font-bold text-3xl text-gray-800 mb-10">Упс, такой страницы нет.</h2>
      <NuxtLink to="/"><AppButton>Вернуться на главную</AppButton></NuxtLink>
    </div>
  </AppContainer>
</template>
