<script setup lang="ts">
const { value: state } = defineModels<{
  value?: string
}>()
</script>

<template>
  <div>
    <input v-model="state" type="text" c-red outline-none>
  </div>
</template>
