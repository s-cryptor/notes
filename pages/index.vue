<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'LocalNotes'
})

const notesStore = useNotesStore()
</script>

<template>
  <AppContainer>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-10">
      <h2 class="font-bold text-3xl text-gray-800">Заметки, которые живут в Вашем браузере</h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Храним заметки в <b>local storage</b> и никуда не отправляем
      </p>

      <div
        v-if="notesStore.notes.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
      >
        <NoteCard
          v-for="note in notesStore.notes"
          :key="note.uid"
          :title="note.title"
          :description="note.description"
        />
      </div>
      <div v-else>
        <div class="mt-10 mb-4 text-lg text-gray-800">Пока нет ни одной заметки</div>
        <NuxtLink to="/settings"><AppButton>Добавить</AppButton></NuxtLink>
      </div>
    </div>
  </AppContainer>
</template>
