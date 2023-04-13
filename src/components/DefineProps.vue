<script setup lang="ts">
interface Props {
  value?: string
}

const {
  value: state = 'default',
} = defineProps<Props>()

const stateRef = $$(state)

watchEffect(() => {
  // 会在 props 变化时打印
  console.log('🚀 ~ file: DefineProps.vue:14 ~ watchEffect ~ state:', state)
})

function handleClick() {
  console.log(state) // ReactiveVariable<string>
  console.log(stateRef) // Ref<string>
}
</script>

<template>
  <button btn @click="handleClick">
    <slot />
  </button>
</template>
