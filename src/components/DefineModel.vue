<script setup lang="ts">
const { value: state } = defineModel<{
  value?: String
}>()
</script>

<template>
  <div>
    <input v-model="state" type="text" c-red outline-none>
  </div>
</template>
