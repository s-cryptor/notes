<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Настройки'
})

const notesStore = useNotesStore()
const isFormEditActive = ref<Record<string, boolean>>({})
</script>

<template>
  <AppContainer>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-10">
      <h2 class="font-bold text-3xl text-gray-800">Управление заметками</h2>

      <div class="mt-5">
        <h3 class="font-bold text-2xl text-gray-800">Новая заметка</h3>
        <NoteAddForm class="mt-4" />
      </div>

      <div class="mt-5">
        <h3 class="font-bold text-2xl text-gray-800 mb-4">Мои заметки</h3>
        <div v-if="!notesStore.notes.length">Пока нет ни одной</div>
        <div v-else class="flex flex-col gap-4">
          <div v-for="note in notesStore.notes" :key="note.uid">
            <div
              v-if="!isFormEditActive[note.uid]"
              class="p-6 bg-slate-50 rounded-lg flex items-center justify-between gap-4"
            >
              <span class="font-bold truncate">{{ note.title }}</span>
              <div class="flex gap-4">
                <AppButton variant="outline" @click="isFormEditActive[note.uid] = true"
                  ><Icon name="uil:edit" class="font-bold text-lg"
                /></AppButton>
                <AppButton variant="outline" @click="notesStore.removeNote(note.uid)"
                  ><Icon name="uil:trash" class="font-bold text-lg"
                /></AppButton>
              </div>
            </div>
            <NoteUpdateForm
              v-else
              v-bind="note"
              @cancel="isFormEditActive[note.uid] = false"
              @update="isFormEditActive[note.uid] = false"
            />
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</template>
