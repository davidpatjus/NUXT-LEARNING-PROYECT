<template>
    <div>
      <v-container>
        <!-- Encabezado -->
        <v-row class="mb-8">
          <v-col cols="12">
            <h1 class="text-h3 font-weight-bold text-primary mb-4">Vue Lifecycle Hooks</h1>
            <p class="text-subtitle-1 text-secondary mb-4">
              Explore and understand Vue's lifecycle hooks in action
            </p>
            <v-divider></v-divider>
          </v-col>
        </v-row>
  
        <v-row>
          <!-- Panel de Hooks -->
          <v-col cols="12" md="8">
            <v-card color="surface" elevation="4" class="rounded-lg">
              <v-card-text>
                <v-timeline density="compact">
                  <v-timeline-item
                    v-for="(status, hook) in logs"
                    :key="hook"
                    :dot-color="status ? 'primary' : 'grey'"
                    size="small"
                  >
                    <template v-slot:opposite>
                      <div :class="status ? 'text-primary' : 'text-grey'">
                        {{ status ? '✓' : '○' }}
                      </div>
                    </template>
                    <div class="d-flex justify-space-between align-center ga-2">
                      <div>
                        <strong :class="status ? 'text-primary' : 'text-grey'">{{ hook }}</strong>
                        <div class="text-caption">
                          {{ getHookDescription(hook) }}
                        </div>
                      </div>
                      <v-chip
                        :color="status ? 'primary' : 'grey'"
                        :variant="status ? 'flat' : 'outlined'"
                        size="small"
                      >
                        {{ status ? 'Executed' : 'Pending' }}
                      </v-chip>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
  
          <!-- Panel de Control -->
          <v-col cols="12" md="4">
            <v-card color="surface" elevation="4" class="rounded-lg">
              <v-card-title class="text-h6">Control Panel</v-card-title>
              <v-card-text>
                <div class="text-center mb-4">
                  <div class="text-h2 text-primary mb-2">{{ value }}</div>
                  <div class="text-caption text-secondary">Current Value</div>
                </div>
                
                <v-btn 
                  @click="updateValue" 
                  color="primary" 
                  block
                  size="large"
                  prepend-icon="$productAdd"
                  class="mb-4"
                >
                  Update Value
                </v-btn>
  
                <v-btn 
                  @click="resetHooks" 
                  color="secondary" 
                  block
                  size="large"
                  prepend-icon="$reset"
                >
                  Reset Hooks
                </v-btn>
  
                <v-alert
                  class="mt-4"
                  color="info"
                  variant="tonal"
                  icon="$notifications"
                >
                  Click update to trigger update hooks or reset to clear all hooks
                </v-alert>
              </v-card-text>
            </v-card>
  
            <!-- Información Adicional -->
            <v-card 
              color="surface" 
              elevation="4" 
              class="mt-4 rounded-lg"
            >
              <v-card-title class="text-h6">
                <v-icon left color="primary" class="mr-2">$info</v-icon>
                About Lifecycle Hooks
              </v-card-title>
              <v-card-text>
                <p class="text-body-2">
                  Lifecycle hooks are special methods that allow you to tap into different stages
                  of a Vue component's lifecycle, from creation to destruction.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ["auth", "layout"]
  });
  
  const value = ref(0);
  const logs = reactive({
    onBeforeMount: false,
    onMounted: false,
    onBeforeUpdate: false,
    onUpdated: false,
    onBeforeUnmount: false,
    onUnmounted: false,
  });
  
  const getHookDescription = (hook) => {
    const descriptions = {
      onBeforeMount: 'Called right before the component is mounted',
      onMounted: 'Called after the component has been mounted',
      onBeforeUpdate: 'Called right before the component updates',
      onUpdated: 'Called after the component has been updated',
      onBeforeUnmount: 'Called right before the component is unmounted',
      onUnmounted: 'Called after the component has been unmounted'
    };
    return descriptions[hook];
  };
  
  // Reset all hooks
  const resetHooks = () => {
    Object.keys(logs).forEach(key => {
      logs[key] = false;
    });
    value.value = 0;
  };
  
  // Update value and trigger hooks
  const updateValue = () => {
    // Reset update hooks before triggering new update
    logs.onBeforeUpdate = false;
    logs.onUpdated = false;
    
    // Update the value to trigger the update hooks
    value.value++;
  };
  
  // Watch for value changes to verify update hooks
  watch(value, () => {
    console.log('Value changed to:', value.value);
  });
  
  // Lifecycle Hooks
  onBeforeMount(() => {
    logs.onBeforeMount = true;
    console.log('onBeforeMount executed');
  });
  
  onMounted(() => {
    logs.onMounted = true;
    console.log('onMounted executed');
  });
  
  onBeforeUpdate(() => {
    logs.onBeforeUpdate = true;
    console.log('onBeforeUpdate executed');
  });
  
  onUpdated(() => {
    logs.onUpdated = true;
    console.log('onUpdated executed');
  });
  
  onBeforeUnmount(() => {
    logs.onBeforeUnmount = true;
    console.log('onBeforeUnmount executed');
  });
  
  onUnmounted(() => {
    logs.onUnmounted = true;
    console.log('onUnmounted executed');
  });
  
  // Ensure hooks are properly tracked
  onMounted(() => {
    console.log('Current hooks state:', logs);
  });
  </script>