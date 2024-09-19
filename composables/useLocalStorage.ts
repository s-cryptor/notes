import { ref, watch, onScopeDispose } from 'vue'

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const val = ref<T>(defaultValue)

  const storageVal = window.localStorage.getItem(key)

  const parsedValue = JSON.parse(storageVal || 'null')
  if (parsedValue) {
    val.value = parsedValue
  }

  function handleStorageEvent(event: StorageEvent) {
    if (event.key === key) {
      val.value = JSON.parse(event.newValue || 'null')
    }
  }

  window.addEventListener('storage', handleStorageEvent)

  onScopeDispose(() => window.removeEventListener('storage', handleStorageEvent))

  watch(
    val,
    (newValue) => {
      window.localStorage.setItem(key, JSON.stringify(newValue))
    },
    {
      deep: true
    }
  )

  return val
}
