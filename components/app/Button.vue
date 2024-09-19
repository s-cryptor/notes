<script setup lang="ts">
interface Props {
  variant?: 'outline' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const styles = {
  outline: 'border-2 border-black hover:bg-black text-black hover:text-white',
  primary: 'bg-black text-white hover:bg-slate-900 border-2 border-transparent'
}
</script>

<template>
  <button
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2',
      styles[props.variant],
    ]"
  >
    <slot />
  </button>
</template>
