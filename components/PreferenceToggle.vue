<template>
    <div class="d-flex align-center py-2 px-2">
      <v-icon :icon="icon" color="primary" class="mr-4"></v-icon>
      <span class="text-body-1">{{ label }}</span>
      <v-spacer></v-spacer>
      <v-switch
        v-model="localValue"
        color="primary"
        hide-details
        density="compact"
        @update:model-value="$emit('update', $event)"
      ></v-switch>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  });
  
  const emit = defineEmits(['update']);
  
  const localValue = ref(props.value);
  
  watch(() => props.value, (newVal) => {
    localValue.value = newVal;
  });
  </script>