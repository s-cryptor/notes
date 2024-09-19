<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const props = defineProps<{
  title: string
  description: string
  uid: string
}>()
const emit = defineEmits(['update', 'cancel'])

const notesStore = useNotesStore()

const state = reactive({
  title: props.title,
  description: props.description,
  uid: props.uid
})
const rules = {
  title: { required },
  description: { required }
}
const v$ = useVuelidate(rules, state)

async function addNote() {
  const isFormValid = await v$.value.$validate()
  if (isFormValid) {
    notesStore.updateNote(state)
    useToastify('Заметка успешно обновлена')
    emit('update')
  }
}
</script>

<template>
  <form class="p-6 bg-slate-50 rounded-lg" @submit.prevent="addNote">
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title"> Заголовок </label>
      <input
        v-model="state.title"
        class="border rounded w-full py-2 px-5 text-gray-700 focus:outline-none focus:border-gray-700"
        id="title"
        type="text"
        placeholder="Заголовок"
        maxlength="64"
      />
      <div v-if="v$.title.$error" class="text-sm text-red-500">Поле обязательно для заполнения</div>
      <div v-else class="min-h-5 w-full"></div>
    </div>
    <div class="mt-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description"> Описание </label>
      <input
        v-model="state.description"
        class="border rounded w-full py-2 px-5 text-gray-700 focus:outline-none focus:border-gray-700"
        id="description"
        type="text"
        placeholder="Описание"
        maxlength="256"
      />
      <div v-if="v$.description.$error" class="text-sm text-red-500">
        Поле обязательно для заполнения
      </div>
      <div v-else class="min-h-5 w-full"></div>
    </div>
    <AppButton type="submit" class="mt-1 min-w-36">Обновить</AppButton>
    <AppButton class="mt-1 min-w-36 ml-4" variant="outline" @click="$emit('cancel')"
      >Отменить</AppButton
    >
  </form>
</template>
