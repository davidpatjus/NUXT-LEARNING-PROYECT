<template>
  <v-container>
    <v-row>
      <!-- Formulario -->
      <v-col cols="12" md="6">
        <v-card color="surface" elevation="4" class="rounded-lg">
          <v-card-title class="text-h4 mb-6">
            User Profile
          </v-card-title>
          
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="formData.name"
                label="Name"
                prepend-icon="$account"
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="formData.email"
                label="Email"
                prepend-icon="$email"
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="formData.phone"
                label="Phone"
                prepend-icon="$phone"
                variant="outlined"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                v-model="formData.address"
                label="Address"
                prepend-icon="$location"
                variant="outlined"
                class="mb-4"
              ></v-text-field>

            </v-form>
          </v-card-text>
        </v-card>

        <!-- Preferencias de Usuario -->
        <UserPreferences
          v-model:preferences="userPreferences"
          :loading="preferencesLoading"
          @refresh="refreshPreferences"
        />
      </v-col>

      <!-- Tarjeta de Usuario -->
      <v-col cols="12" md="6">
        <UserCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, provide } from 'vue';

definePageMeta({
  middleware: ['auth', 'layout']
});

// Estado del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
});

const preferencesLoading = ref(false);

// Preferencias del usuario
const userPreferences = ref({
  notifications: {
    label: 'Email Notifications',
    value: true,
    icon: '$notifications'
  },
  newsletter: {
    label: 'Newsletter Subscription',
    value: false,
    icon: '$email'
  },
  darkMode: {
    label: 'Dark Mode',
    value: false,
    icon: '$settings'
  }
});

// Proveer los datos al componente hijo
provide('userData', formData);

// Cargar datos iniciales (simulado)
onMounted(() => {
  // Aquí podrías cargar los datos del usuario desde una API
  formData.value = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, City'
  };
});
</script>