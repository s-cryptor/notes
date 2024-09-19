import { v4 } from 'uuid'
import useLocalStorage from '@/composables/useLocalStorage'

export interface Note {
  title: string
  description: string
  uid: string
}

export const useNotesStore = defineStore('notes', () => {
  const notes = useLocalStorage<Note[]>('notes', [])

  function addNote(note: Omit<Note, 'uid'>) {
    notes.value.push({ ...note, uid: v4() })
  }

  function removeNote(uid: string) {
    notes.value = notes.value.filter((note) => note.uid !== uid)
  }

  function updateNote(note: Note) {
    notes.value = notes.value.map((item) => (item.uid === note.uid ? note : item))
  }

  return {
    notes,
    addNote,
    removeNote,
    updateNote
  }
})
