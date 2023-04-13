<script setup lang="ts">
const props = defineProps<{
  value?: String
}>()

defineEmits(['input'])

const state = useVModel(props)
</script>

<template>
  <div>
    <input v-model="state" type="text" c-red outline-none>
  </div>
</template>
