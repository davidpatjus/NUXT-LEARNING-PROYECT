<template>
    <v-card color="surface" elevation="4" class="rounded-lg mt-6">

      <v-card-title class="text-h5 text-primary d-flex align-center">
        User Preferences
      </v-card-title>

      <v-card-text>
        <v-card-title>Father Props</v-card-title>
        <v-list-item v-for="(preference, index) in preferences" :key="index" class="">
            <v-list-item-content class="d-flex align-center ga-3">
              <v-icon color="primary">{{ preference.icon }}</v-icon>
              <v-list-item-title>{{ preference.label }}</v-list-item-title>
              <v-list-item-subtitle>{{ preference.value }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
      </v-card-text>

      <v-divider></v-divider>
  
      <v-card-text>
        <v-list>
          <v-list-item v-for="(pref, key) in preferences" :key="key">
            <PreferenceToggle
              :label="pref.label"
              :value="pref.value"
              :icon="pref.icon"
              @update="(val) => updatePreference(key, val)"
            />
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  const props = defineProps({
    preferences: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:preferences', 'refresh']);
  
  const updatePreference = (key, value) => {
    const updatedPreferences = { ...props.preferences };
    updatedPreferences[key].value = value;
    emit('update:preferences', updatedPreferences);
  };
  </script>