<template>
  <private-view>
    <div>My Custom Module {{ test }}</div>
  </private-view>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from '@vue/composition-api'
export default defineComponent({
  inject: ['system'],
  mounted() {
    console.log('option api', this.system)
  },
  setup(props, ctx) {
    const system = inject('system')
    console.log('composition api', system)
    return {
      test: computed(() => true),
    }
  },
})
</script>
