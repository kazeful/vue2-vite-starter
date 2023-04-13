<script>
export default defineComponent({
  props: ['value'],
  // Only for type-checking purposes (does not affect runtime behavior)
  emits: ['input'],
  computed: {
    state: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      },
    },
  },
})
</script>

<template>
  <div>
    <input v-model="state" type="text" c-red outline-none>
  </div>
</template>
