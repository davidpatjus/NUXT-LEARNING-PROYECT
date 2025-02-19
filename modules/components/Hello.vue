<template>
  <div class="font-weight-bold text-center">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "¡Hola desde el módulo!",
  },
});
</script>
