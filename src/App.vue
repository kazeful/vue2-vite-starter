<script>
export default defineComponent({
  data() {
    return {
      value: 'HelloWorld',
    }
  },
})
</script>

<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <HelloWorld v-model="value" />
    <br>
    <Welcome v-model="value" />
    <br>
    <DefineModels v-model="value" />
    <br>
    <div flex="~" justify="center" space="x-2">
      <DefineProps :value="value">
        DefineProps
      </DefineProps>

      <DefineProps>
        DefineProps
      </DefineProps>
    </div>
  </main>
</template>
