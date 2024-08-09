<script setup lang="ts">
withDefaults(
  defineProps<{ icon: string; size?: string; color?: string }>(),
  {
    icon: "i-mdi-alert ",
    size: "5",
    color: ''
  },
);
</script>

<template>
  <svg :class="`${icon} h-${size} w-${size}`" class="inline-block stroke-current" :style="{ color: color}"/>
</template>

<style scoped>

</style>
